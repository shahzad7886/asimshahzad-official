import React from 'react'
import Navbar from './component/Navbar'
// import { unstable_createMuiStrictModeTheme } from '@mui/material/styles';
import {createTheme,  ThemeProvider } from '@mui/material/styles';
import { orange } from '@mui/material/colors';
const theme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
        <Navbar />
      </ThemeProvider>
  )
}

export default App
