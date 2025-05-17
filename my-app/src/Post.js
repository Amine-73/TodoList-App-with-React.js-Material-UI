import { useContext } from "react";
import { list } from "./ListPost";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Avatar from '@mui/material/Avatar';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DoneIcon from '@mui/icons-material/Done';
import { red,blue, green } from "@mui/material/colors"
import { createTheme } from "@mui/material";
export default function Post(){
    const theme = createTheme({
    palette: {
            primary: red,
            secondary: blue,
            
        },
    });
    let mylist=useContext(list);
    let maplist=mylist.map((l)=>{
        return(
            <div  style={{backgroundColor:"#42a5f5",padding:"20px",margin:"10px",textAlign:"right",fontSize:"26px"}}>
                
                <div style={{listStyle:"none",display:"flex",justifyContent:"space-between"}} >
                    <div style={{display:"flex"}}>
                        <Avatar  sx={{bgcolor:"#fff",mx:"5px"}}><DeleteOutlinedIcon theme={theme} color="primary" /></Avatar>
                        <Avatar sx={{bgcolor:"#fff",mx:"5px"}}><EditOutlinedIcon theme={theme} color="secondary" /></Avatar>
                        <Avatar sx={{bgcolor:"#fff",mx:"5px",color:"green"}}><DoneIcon  /></Avatar>
                    </div>
                    <div>
                        <li key={l.id}>{l.name}</li>
                    </div>
                </div>
            </div>
        )
    })
    return(
        <>
            {maplist}
        </>
    );
}