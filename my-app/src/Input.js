import * as React from 'react';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import Buttons from './Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: (theme.vars ?? theme).palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 200px 15px 12px', 
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));



export default function CustomizedSelects() {
  return (
    <div style={{display:"flex"}}>
        <div>
            <Buttons/>
        </div>
        <div>
          <Box sx={{ width: 500, maxWidth: '85%',marginLeft:"10px",marginTop:"29px" }}>
              <TextField fullWidth label="عنوان المهمة" id="fullWidth" />
          </Box>
        </div>
    </div>
  );
}
