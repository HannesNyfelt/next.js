"use client"

import { Button, Box, Typography } from '@mui/material'
import React, { useState } from 'react'

export default function Home() {

  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [num3, setNum3] = useState(0)

  const count = num1 + num2 + num3

  const handleIncrement = (num: number) => {
    switch (num) {
      case 1:
        setNum1(num1 + 1)
        break;
      case 2:
        setNum2(num2 + 1)
        break;
      case 3:
        setNum3(num3 + 1)
        break;
      default:
        break;
    }
  }

  const handleDecrement = (num: number) => {
    switch (num) {
      case 1:
        setNum1(num1 - 1)
        break;
      case 2:
        setNum2(num2 - 1)
        break;
      case 3:
        setNum3(num3 - 1)
        break;
      default:
        break;
    }
  }

  return (
    <main style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <Typography variant='h1'>{count}</Typography>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
      }}>
        <Button variant='outlined' onClick={() => handleIncrement(1)}>+</Button>
        <Typography>{num1}</Typography>
        <Button variant='outlined' onClick={() => handleDecrement(1)}>-</Button>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
      }}>
        <Button variant='outlined' onClick={() => handleIncrement(2)}>+</Button>
        <Typography>{num2}</Typography>
        <Button variant='outlined' onClick={() => handleDecrement(2)}>-</Button>
      </Box>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 5
      }}>
        <Button variant='outlined' onClick={() => handleIncrement(3)}>+</Button>
        <Typography>{num3}</Typography>
        <Button variant='outlined' onClick={() => handleDecrement(3)}>-</Button>
      </Box>

    </main>
  )
}