import "./App.css";
import SurfaceMission from "./SurfaceMission";
import Container from "@mui/material/Container";
import Input from "./Input";
import { Route, Routes } from "react-router-dom";
import Post from "./Post";

function App() {
  return (
    <section style={{background: "#9fa8da",height:"100vh",maxHeight:"100vh"}}>
    
    <div
      className="App"
      style={{ display: "flex", height: "auto" }}
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
        
        <Routes>
          <Route path="/الكل" element={<Post/>}/>
          <Route path="/غيرمنجز" element={<h1> </h1>}/>
          <Route path="/منجز" element={<h1> </h1>}/>
        </Routes>
        <Input />
      </Container>
      
    </div>
    </section>
  );
}

export default App;
