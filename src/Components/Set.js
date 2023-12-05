import React from 'react'
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

const Set = ({sdata}) => {
  return (
    <div className='row'>
    {
      sdata.map((ele,k)=>(
        <div key={k} className='col-lg-4 mb-4'>
        <Stack spacing={1} style={{width:"22rem"}} className='mb-4  '>
      <Skeleton variant="rectangular" animation="wave" width={"22rem"} height={220} className='rounded-3' />
      <div className='d-flex justify-content-between align-items-center'>
      <Skeleton variant="text" animation="wave" width={"12rem"} className='rounded-3' />
      <Skeleton variant="text" animation="wave" width={"5rem"} className='rounded-3' />
      </div>
      <div className='d-flex justify-content-between align-items-center'>
      <Skeleton variant="text" animation="wave" width={"13rem"} className='rounded-3' />
      <Skeleton variant="text" animation="wave" width={"7rem"} className='rounded-3' />
      </div>
</Stack>
    </div>
      ))
    }
    </div>
  )
}

export default Set