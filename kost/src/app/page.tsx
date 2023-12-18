"use client"
import React, { useState } from 'react';
import { Container, Typography } from '@mui/material';
import ExpenseForm from "./component/ExpenseForm"
import ExpenseList from './component/ExpenseList'
import ExpenseSplitCalculator from './component/ExpenseSplitCalculator';

export default function Home() {

  const [expenses, setExpenses] = useState([])



  const addExpense = (expense: never) => {
    setExpenses([...expenses, expense])
  }

  return (
    <Container maxWidth="md">
      <Typography variant="h4" align="center" gutterBottom>
        Expense Splitter
      </Typography>
      <ExpenseForm addExpense={addExpense} />
      <ExpenseList expenses={expenses} />
      <ExpenseSplitCalculator expenses={expenses} />
    </Container>
  )
}
