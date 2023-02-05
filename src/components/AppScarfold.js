import { Box } from '@mui/system'
import React from 'react'
import Header from './Header'

const AppScarfold = ({children}) => {
  return (
    <>
    <Box sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "15vh",
    }}>
    <Header />
    {children}
    </Box>
    </>
  )
}

export default AppScarfold