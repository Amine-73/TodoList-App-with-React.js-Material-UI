import "./App.css";
import SurfaceMission from "./SurfaceMission";
import Container from "@mui/material/Container";
import Input from "./Input";
import { createTheme } from "@mui/material";
import { orange, green } from "@mui/material/colors";

function App() {
  return (
    <div
      className="App"
      style={{ background: "#9fa8da", display: "flex", height: "100vh" }}
    >
      <Container
        maxWidth="sm"
        style={{
          background: "#fff",
          height: "auto",
          margin: "100px auto",
        }}
      >
        <SurfaceMission />
        <Input />
      </Container>
    </div>
  );
}

export default App;
