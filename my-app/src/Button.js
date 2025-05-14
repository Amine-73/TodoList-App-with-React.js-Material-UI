import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { purple, deepOrange } from "@mui/material/colors";
import { createTheme } from "@mui/material";
export default function Buttons() {
  const theme = createTheme({
    palette: {
      primary: purple,
      secondary: deepOrange,
    },
  });
  return (
    <Stack direction="row" spacing={2}>
      <Button
        variant="contained"
        theme={theme}
        color="secondary"
        style={{
          fontSize:"20px",
          marginTop: "30px",
          marginBottom: "30px",
          paddingTop: "10px",
          paddingBottom: "9px",
          paddingLeft:"30px",
          paddingRight:"30px",
        }}
      >
        إضافة
      </Button>
    </Stack>
  );
}
