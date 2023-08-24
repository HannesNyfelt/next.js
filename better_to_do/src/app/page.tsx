"use client"

import { Card, TextField, Typography, Button, Box, Table, TableBody, TableContainer, TableHead, TableRow } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import React, { useState, useEffect } from 'react'

interface Todo {
  id: number;
  completed: boolean;
  text: string;
  createdAt: number;
}


export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodoText, setNewTodoText] = useState<string>('')
  const [editTodoId, setEditTodoId] = useState<number | null>(null)
  const [editTodoText, setEditTodoText] = useState<string>('')

  useEffect(() => {
    const storedTodos = localStorage.getItem('todos')
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  function addTodo() {
    if (newTodoText.trim() !== '') {
      const newTodo: Todo = {
        id: Date.now(),
        completed: false,
        text: newTodoText,
        createdAt: Date.now()
      }

      setTodos(prevTodos => [...prevTodos, newTodo])
      setNewTodoText('')
    }
  }

  function toggleTodo(id: number) {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    )
  }

  function startEdit(id: number, text: string) {
    setEditTodoId(id)
    setEditTodoText(text)
  }

  function saveEdit() {
    if (editTodoId !== null) {
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === editTodoId ? { ...todo, text: editTodoText } : todo
        )
      )
      setEditTodoId(null)
      setEditTodoText('')
    }
  }


  function deleteTodo(id: number) {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id))
  }
  return (
    <div>
      <Box sx={{
        width: '100%',
        height: '90vh',
        display: "flex",
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
      }}>
        <Box sx={{
          width: '300',
          height: '100',
          display: "flex",
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }}>
          <TextField value={newTodoText} onChange={e => setNewTodoText(e.target.value)} sx={{ width: 500 }}></TextField>
          <Button onClick={addTodo} variant="contained">Add to-Do</Button>
        </Box>
        <TableContainer>
          <Table sx={{ minWidth: 500 }}>
            <TableHead>
              <TableRow>
              </TableRow>
            </TableHead>
            <TableBody sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
              {todos.map(todo => (
                <Card sx={{ width: '20%', padding: 2, margin: 2 }} key={todo.id}>
                  {editTodoId === todo.id ? (
                    <>
                      <TextField value={editTodoText} onChange={e => setEditTodoText(e.target.value)}></TextField>
                      <Button onClick={saveEdit}>Save</Button>
                    </>
                  ) : (
                    <>
                      <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)}></input>
                      <Typography style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</Typography>
                      <Typography fontSize={13} color={"gray"} >Created: {new Date(todo.createdAt).toLocaleString()}</Typography>
                      <Button onClick={() => startEdit(todo.id, todo.text)}>Edit</Button>
                      <DeleteIcon onClick={() => deleteTodo(todo.id)}></DeleteIcon>
                    </>
                  )}
                </Card>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

    </div>
  )
}

