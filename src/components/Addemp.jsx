import React from 'react'
import Typography from '@mui/material/Typography';
import { Button, Stack, TextField } from '@mui/material';
import { useForm } from 'react-hook-form';
import axios from 'axios';
const Addemp = () => {
    const { register, handleSubmit} = useForm();
    const getval=(val) => {
        alert('form submitted');
        axios.post('https://reqres.in/api/users',val).then((res)=>{
          alert(`The Data is Posted with id ${res.data.id}`)
        })
      }
  return (
    <div>
    
     <Stack
      component="form"
      sx={{
        marginTop:'90px',
        marginLeft:'550px',
        width: '25ch',
      }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
      name='empname'
      {...register('empname')}
        hiddenLabel
        id="filled-hidden-label-small"
        defaultValue="Employee Name"
        variant="outlined"
       
      />
      <TextField
        hiddenLabel
        name='emploc'
        {...register('emploc')}
        id="filled-hidden-label-normal"
        defaultValue="Employee Location"
        variant="outlined"
      />
      <TextField
        hiddenLabel
        name='empdes'
        {...register('empdes')}
        id="filled-hidden-label-normal"
        defaultValue="Employee Designation"
        variant="outlined"
      />
      <Button variant='contained' onClick={handleSubmit(getval)}>Submit</Button>
    </Stack>
    </div>
  )
}

export default Addemp
