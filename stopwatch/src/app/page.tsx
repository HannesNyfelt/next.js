'use client'

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
  const [points, setPoints] = useState(0)
  const [pointsPerClick, setPointsPerClick] = useState(1)
  const [clickUpgradeCost, setClickUpgradeCost] = useState(10)
  const [secondUpgradeCost, setSecondUpgradeCost] = useState(100)

  const updateUI = () => {

  }

  const autoClick = () => {
    setPoints(points => points + pointsPerClick)
    updateUI()
  }

  const increment = () => {
    setPoints(points + pointsPerClick)
    updateUI()
  }

  const buyClickUpgrade = () => {
    if (points >= clickUpgradeCost) {
      setPoints(points - clickUpgradeCost)
      setPointsPerClick(pointsPerClick + 1)
      setClickUpgradeCost(clickUpgradeCost * 2)
      updateUI()
    }
  }

  const buyAutoClicker = () => {
    if (points >= secondUpgradeCost) {
      setPoints(points - secondUpgradeCost)
      setSecondUpgradeCost(secondUpgradeCost * 2)
      setInterval(autoClick, 1000)
      updateUI()
    }
  }

  useEffect(() => {

  }, [])

  return (
    <Box sx={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    }}>
      <h1>Clicker</h1>
      <h3>Points per click: {pointsPerClick}</h3>
      <Typography variant='h1'>{points}</Typography>
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
          <Button variant='contained' onClick={buyClickUpgrade} disabled={points < clickUpgradeCost}>{clickUpgradeCost}</Button>
        </Box>
        <Box sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column'
        }}>
          <Typography variant='h6'>Buy Second upgrade</Typography>
          <Button variant='contained' onClick={buyAutoClicker} disabled={points < secondUpgradeCost}>{secondUpgradeCost}</Button>
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
    </Box>
  )
}
