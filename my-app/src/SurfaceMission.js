import ColorToggleButton from './ToggleBtn'
export default function SurfaceMission(){
    return(
        <div style={{
            // background:"red",
            height:"auto",
            padding:"0 10px",
            margin:"100px 0px"
        }}>
        <h1 style={{fontSize:"50px"}}>مهامي</h1>
        <hr/>
        <ColorToggleButton/>
        </div>
    );
}