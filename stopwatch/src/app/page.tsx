"use client"

import React, { useState, useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material'

export default function Home() {

  //clock
  const [date, setDate] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date())
    }, 1000)

    return () => clearInterval(intervalId)
  }, [])

  //stopwatch
  const [time, setTime] = useState(0);

  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId: any;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time + 1), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning, time]);

  const hours = Math.floor(time / 360000);

  const minutes = Math.floor((time % 360000) / 6000);

  const seconds = Math.floor((time % 6000) / 100);

  const milliseconds = time % 100;

  const startAndStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
  };

  //Clicker
  const [count, setCount] = useState(0);
  const [add, setAdd] = useState(1);
  const [cost1, setCost1] = useState(10);
  const [cost2, setCost2] = useState(100);


  const autoAdd = (currentAdd: any) => {
    setCount(prevCount => prevCount + currentAdd);
  };

  const increment = () => {
    setCount(count + add);
  };

  const buyClickUpgrade = () => {
    if (count >= cost1) {
      setCount(count - cost1);
      setAdd(add + 1);
      setCost1(cost1 * 2);
    }
  };

  const buyAutoClicker = () => {
    if (count >= cost2) {
      setCount(count - cost2);
      setCost2(cost2 * 2);
      setInterval(() => autoAdd(add), 1000);
    }
  };

  //Visit count
  const [visits, setVisits] = useState(0)

  useEffect(() => {
    let num = JSON.parse(localStorage.getItem('Times') as any);
    setVisits(num);

    const handleLoad = () => {
      const updatedNum = num + 1;
      window.localStorage.setItem('Times', updatedNum);
      setVisits(updatedNum);
    };

    handleLoad()


    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);


  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      marginBottom: 10
    }}>
      <h1>Clicker</h1>
      <h3>Points per click: {add}</h3>
      <Typography variant='h1'>{count}</Typography>
      <Button variant='contained' onClick={increment} >Click Here!</Button>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '60%'
      }}>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
          <Typography variant='h6'>Buy click upgrade</Typography>
          <Button variant='contained' onClick={buyClickUpgrade} disabled={count < cost1}>{cost1}</Button>
        </Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
          <Typography variant='h6'>Buy one auto clicker</Typography>
          <Button variant='contained' onClick={buyAutoClicker} disabled={count < cost2}>{cost2}</Button>
        </Box>
      </Box>
      <h1>Clock</h1>
      <Typography variant='h1'>
        {date.toLocaleTimeString()}
      </Typography>
      <h1>Stopwatch</h1>
      <Typography sx={{ backgroundColor: 'lightgray' }} variant='h1'>
        {hours}:{minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}:{milliseconds.toString().padStart(2, '0')}
      </Typography>

      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <Button color='success' variant='contained' onClick={startAndStop}>{isRunning ? 'Stop' : 'Start'}</Button>
        <Button color='error' variant='contained' onClick={reset}>Reset</Button>
      </Box>
      <h1>Visit count</h1>
      <Typography variant='h3'>
        you have visited this website {visits} times
      </Typography>
    </Box>
  )
}
