import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useEffect, useState } from 'react'
import './Styl.css'
import axios from 'axios';
const Home = () => {
  var [value, setvalue] = useState([])
   useEffect(()=>{
    axios.get('https://dummyjson.com/users').then((response)=>{
      console.log(response.data.users);
      setvalue(value=response.data.users);
    })
   },[])
  return (
    <div className='ty'>
      <Table >
        <TableHead>
          <TableRow className='vd'>
            <TableCell className='vd'>First Name</TableCell>
            <TableCell className='vd'>Last Name</TableCell>
            <TableCell className='vd'>Age</TableCell>
          </TableRow>
        </TableHead>
        <TableBody className='vd'>
          {value.map((data,ind)=>{
            return <TableRow>
              <TableCell className='vd'>{data.firstName}</TableCell>
              <TableCell className='vd'>{data.lastName}</TableCell>
              <TableCell className='vd'>{data.age}</TableCell>
            </TableRow>
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default Home
