"use client"
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";

export default function Home() {

  const [assets, setAssets] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.coincap.io/v2/assets')
      const data = await res.json()
      setAssets(data.data)
      console.log(data);

    }
    fetchData().catch(e => {
      console.log(e);
    })
  }, [])

  return (
    <TableContainer id="mainContainer" component={Paper}>
      <Table aria-label="Crypto Valuator">
        <TableHead>
          <TableRow id="topRow">
            <TableCell className="topCell" ><b>Name</b></TableCell>
            <TableCell className="topCell" align="right"><b>Price</b></TableCell>
            <TableCell className="topCell" align="right"><b>Change in %</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map(asset => (
            <TableRow key={asset.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row" >{asset.name}</TableCell>
              <TableCell align="right">${asset.priceUsd / 1}</TableCell>
              <TableCell align="right">{asset.changePercent24Hr}%</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer >
  );
}
