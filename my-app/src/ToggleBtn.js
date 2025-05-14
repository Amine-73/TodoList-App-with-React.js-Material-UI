import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { orange  } from '@mui/material/colors';

export default function ColorToggleButton() {

    const theme = createTheme({
        palette: {
            primary: {
            main: orange[900],
            },
            secondary: {
            main: '#f44336',
            },
        },
        typography: {
            // Tell MUI what the font-size on the html element is.
            htmlFontSize: 10,
        },
    });

    const [alignment, setAlignment] = React.useState('web');

    const handleChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };

    return (
        <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        >
            
        <ToggleButton theme={theme}  value="ios">غيرمنجز</ToggleButton>
        <ToggleButton theme={theme} value="android">منجز</ToggleButton>
        <ToggleButton theme={theme} value="web">الكل</ToggleButton>
        </ToggleButtonGroup>
    );
}
