import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, ticketprice, hall, starttime,endtime) {
  return { name, ticketprice, hall, starttime,endtime};
}

const rows = [
  createData('The Northman', 90, 5, 12.00, 2),
  createData('tamaseeh elneil', 110, 4, 4, 6),
  createData('Wahed tany', 70, 6, 1.00, 3),
];

export default function AcccessibleTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <caption><h4>Every thing you need about your interesting watching</h4></caption>
        <TableHead>
          <TableRow>
            <TableCell>Moviename</TableCell>
            <TableCell align="right">ticketprice</TableCell>
            <TableCell align="right">hall;</TableCell>
            <TableCell align="right">starttime&nbsp;(pm)</TableCell>
            <TableCell align="right">endtime&nbsp;(pm)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.ticketprice}</TableCell>
              <TableCell align="right">{row.hall}</TableCell>
              <TableCell align="right">{row.starttime}</TableCell>
              <TableCell align="right">{row.endtime}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
