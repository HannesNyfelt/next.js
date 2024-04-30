"use client"
import { useEffect, useState } from "react";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Typography, Box } from "@mui/material";

export default function Home() {

  const [assets, setAssets] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://api.coincap.io/v2/assets')
      const data = await res.json()
      setAssets(data.data)

    }
    fetchData().catch(e => {
      console.log(e);
    })
  }, [])

  return (
    <TableContainer sx={{ minWidth: 580, display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }} id="mainContainer" component={Paper}>
      <Typography className="text" variant="h2" >Crypto Valuator</Typography>
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
            <TableRow id="resRow" key={asset.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

              <TableCell className="test2" component="th" scope="row" >
                <Typography className="test"><b>Name</b></Typography>
                <Typography>{asset.name}</Typography>
              </TableCell>

              <TableCell className="test2" align="right">
                <Typography className="test"><b>Price</b></Typography>
                <Typography>${asset.priceUsd / 1}</Typography>
              </TableCell>

              <TableCell className="test2" align="right">
                <Typography className="test"><b>Change in %</b></Typography>
                <Typography>{asset.changePercent24Hr}%</Typography>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
//make this responsive by stacking all three Cells in a column

