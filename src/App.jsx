import { useState } from 'react'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import HomeIcon from '@mui/icons-material/Home';


function App() {

  return (
    <>
      <h1>Hello world</h1>
      <Stack direction="row" spacing={3}>
        <HomeIcon />
        <HomeIcon color="primary" />
        <HomeIcon color="secondary" />
        <HomeIcon color="success" />
        <HomeIcon color="action" />
        <HomeIcon color="disabled" />
    </Stack>
    </>
  )
}

export default App
