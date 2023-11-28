"use client"
import React, { useEffect, useState } from "react"
import { Box } from "@mui/material";

export default function Home() {
  const [d4, setD4] = useState<number[]>([0]);
  const [d6, setD6] = useState<number[]>([0]);
  const [d8, setD8] = useState<number[]>([0]);
  const [d10, setD10] = useState<number[]>([0]);
  const [d12, setD12] = useState<number[]>([0]);
  const [d20, setD20] = useState<number[]>([0]);
  const [sum, setSum] = useState(0)

  useEffect(() => {
    setSum(d4[0] + d6[0] + d8[0] + d10[0] + d12[0] + d20[0])
  })

  function D4() {
    setD4([
      Math.floor(Math.random() * 4 + 1)
    ])
  }

  function D6() {
    setD6([
      Math.floor(Math.random() * 6 + 1)
    ]);
  }

  function D8() {
    setD8([
      Math.floor(Math.random() * 8 + 1)
    ]);
  }

  function D10() {
    setD10([
      Math.floor(Math.random() * 10 + 1)
    ]);
  }

  function D12() {
    setD12([
      Math.floor(Math.random() * 12 + 1)
    ]);
  }

  function D20() {
    setD20([
      Math.floor(Math.random() * 20 + 1)
    ]);
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: 2 }}>
          you rolled a : {d4}
          <img onClick={D4} style={{ width: 100 }} src="\images\d4.png" className="button" id="d4" />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: 2 }}>
          you rolled a : {d6}
          <img onClick={D6} style={{ width: 100 }} src="\images\d6.png" className="button" id="d6" />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: 2 }}>
          you rolled a : {d8}
          <img onClick={D8} style={{ width: 100 }} src="\images\d8.png" className="button" id="d8" />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: 2 }}>
          you rolled a : {d10}
          <img onClick={D10} style={{ width: 100 }} src="\images\d10.png" className="button" id="d10" />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: 2 }}>
          you rolled a : {d12}
          <img onClick={D12} style={{ width: 100 }} src="\images\d12.png" className="button" id="d12" />
        </Box>

        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', margin: 2 }}>
          you rolled a : {d20}
          <img onClick={D20} style={{ width: 100 }} src="\images\d20.png" className="button" id="d20" />
        </Box>
      </Box>
      your total is : {sum}
    </Box>
  )
}
