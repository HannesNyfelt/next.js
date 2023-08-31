"use client"

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Tabs, Tab, Typography } from '@mui/material'
import employees from './employees .json'
import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    meh: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Evaluation',
    },
  },
};

const content = {
  labels: employees.map((employee) => employee.firstName),
  datasets: [
    {
      label: 'perfromance',
      data: employees.map((employee) => employee.performance),
      backgroundColor: 'rgba(255, 99, 132, 0.5)'
    },
  ],
};

export default function Employees() {
  const [something, setSomething] = React.useState(0)

  const handleChange = (event: React.SyntheticEvent, newSomething: number) => {
    setSomething(newSomething)
  }





  return (
    <Box sx={{
      width: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>


      <Tabs value={something} onChange={handleChange} aria-label='basic tabs example'>
        <Tab label="EMPLOYEE LIST">{a11yProps(0) as any}</Tab>
        <Tab label="PERDORMANCE METRICS">{a11yProps(1) as any}</Tab>
      </Tabs>
      <CustomTabPanel value={something} index={0}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 850 }} aria-label='simple table'>
            <TableHead>
              <TableRow>
                <TableCell>First Name</TableCell>
                <TableCell>Last Name</TableCell>
                <TableCell>Position</TableCell>
                <TableCell>Department</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Phone number</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {employees.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell>{row.firstName}</TableCell>
                  <TableCell>{row.lastName}</TableCell>
                  <TableCell>{row.position}</TableCell>
                  <TableCell>{row.department}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.phoneNumber}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CustomTabPanel>
      <CustomTabPanel value={something} index={1}>
        <div><Bar style={{ height: 400 }} options={options} data={content} /></div>
      </CustomTabPanel>
    </Box>
  )
}

