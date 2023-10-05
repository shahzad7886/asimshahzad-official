import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';


export default function CustomizedInputBase() {
  return (
    <Paper
      component="form"
      sx={{ p: '1px 10px', display: 'flex', alignItems: 'center',}}
    >
     
      <InputBase
        sx={{ mr: 4, flex: 4 }}
        placeholder="Search Here"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <IconButton type="button" color='primary' sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
