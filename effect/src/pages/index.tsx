import { log } from "console"
import React, { useEffect, useState } from "react"

export default function Home() {
  const [timer, setTimer] = useState(0)
  const [isActive, setIsActive] = useState(false)


  function toggle() {
    setIsActive(!isActive)
  }

  useEffect(() => {
    let interval = null as any

    if (isActive) {
      interval = setInterval(() => {
        setTimer(timer => timer + 1)
      }, 1000)

    } else if (!isActive && timer !== 0) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isActive, timer])

  return (
    <>
      <div>
        <h1>{timer}</h1>
        <div id="buttons">
          <button onClick={toggle}>{isActive ? 'Pause' : 'Start'}</button>
          <button onClick={() => setTimer(0)}>Reset</button>
        </div>
      </div>
    </>
  )
}
