import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import ColorLensOutlinedIcon from '@material-ui/icons/ColorLensOutlined';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import ColorLensIcon from '@material-ui/icons/ColorLens';

function Note(props) {
  const [state , setState] = React.useState({
    color : false ,
    delete : false
  })
  const [background , setBackground] = React.useState("") ;
  
  function handleClick() {
    props.onDelete(props.id);
  }
  function color1(){
       setBackground("rgb(255 , 255 , 255)")
  }
  function color2(){
    setBackground("rgb(0, 255, 157)")
  }
  function color3(){
    setBackground("rgb(42, 146, 216)")
  }
  function color4(){
    setBackground("rgb(252, 140, 233)")
  }
  function color5(){
    setBackground("rgb(238, 255, 144)")
  }
  function color6(){
    setBackground("rgb(250, 176, 106)")
  }
  function color7(){
    setBackground("rgb(123, 245, 239)")
  }
  function color8(){
    setBackground("rgb(228, 187, 255)")
  }
  function color9(){
    setBackground("rgb(250, 151, 184)")
  }
  function mouseIsOverd(event){
    const {name , value} = event.target ;
    if(name === "color"){
      setState({
        color : true ,
        delete : false
      })
    }
    else if(name === "delete"){
      setState({
        color : false ,
        delete : true
      })
    }
   }
  function mouseIsOut(){
    setState({
      color : false ,
      delete : false
    })
  }

  return (
    <div className="note" style = {{backgroundColor : background}} >
      <h1>{props.title}</h1>
      <p>{props.content}</p>
       
      <div className="button-container">
      <button name = "delete" onMouseOver = {mouseIsOverd} onClick = {handleClick}  style = {{backgroundColor : background}} onPointerLeave = {mouseIsOut} >
         {state.delete ? <DeleteIcon/> : <DeleteOutlineOutlinedIcon/>}       
      </button>

      <button name = "color" onMouseOver = {mouseIsOverd} className = "dropdown" style = {{backgroundColor : background}} onPointerLeave = {mouseIsOut}>
         {state.color ? <ColorLensIcon/> : <ColorLensOutlinedIcon/>} 
        <div className = "dropdown-content">
             <div className="color color1" onClick={color1}></div>
             <div className="color color2" onClick={color2}></div>
             <div className="color color3" onClick={color3}></div>
             <div className="color color4" onClick={color4}></div>
             <div className="color color5" onClick={color5}></div>
             <div className="color color6" onClick={color6}></div>
             <div className="color color7" onClick={color7}></div>
             <div className="color color8" onClick={color8}></div>
             <div className="color color9" onClick={color9}></div>          
        </div>
      </button> 
      </div>
    </div>
  );
}

export default Note;
