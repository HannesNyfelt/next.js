"use client"

import { TextField, Button, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material"
import DeleteIcon from "@mui/icons-material/Delete"
import React, { useState, useEffect } from 'react'

interface Todo {
  id: number;
  completed: boolean;
  text: string;
}


export default function Home() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodoText, setNewTodoText] = useState<string>('')

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
                <TableCell align="left">Check</TableCell>
                <TableCell align="left">Name</TableCell>
                <TableCell align="right">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {todos.map(todo => (
                <TableRow key={todo.id}>
                  <TableCell><input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)}></input></TableCell>
                  <TableCell><span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.text}</span></TableCell>
                  <TableCell align="right"><DeleteIcon onClick={() => deleteTodo(todo.id)}></DeleteIcon></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>

    </div>
  )
}

