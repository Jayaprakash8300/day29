import { TextField } from "@mui/material";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button} from '@mui/material';
import Base from "../Base/Base";


const AddStaffPage=({teachersData,setTeachersData})=>{
     

          const history = useNavigate();
          const {id} = useParams();
          const [idx, setIdx] = useState("");
          const [name, setName] = useState("");
          const [species, setSpecies] = useState("");
          const [gender, setGender] = useState("");
          const [house, setHouse] = useState("");
          const [dob, setDob] = useState("");
          const [wand, setWand] = useState("");
          const [image, setImage] = useState("");
      
          const Addteacherlist=()=>{
      
            const newStudent={
              id,
              name,
              species,
              gender,
              house,
              dateOfBirth:dob,
              wand,
              image
              
            }
            setTeachersData([...teachersData,newStudent])
      
            history("/TeacherList")
          }
    
    return(
    
          <Base
          title="Add a Staff Data"
          description="This page is to add New Staff Data">
          
              
  <div className="input-section">
       
          
       <TextField 
       fullWidth label="Enter the id" 
       onChange={(event)=>setIdx(event.target.value)}
       value = {idx}
       id="fullWidth" />
  
       <TextField 
       fullWidth 
       label="Enter the Name"
       onChange={(event)=>setName(event.target.value)}
       value= {name}
        id="fullWidth" />
  
       <TextField 
       fullWidth 
       label="Enter the Species"
       onChange={(event)=>setSpecies(event.target.value)}
       value = {species}
        id="fullWidth" />
  
       <TextField 
       fullWidth 
       label="Enter the Gender"
       onChange={(event)=>setGender(event.target.value)}
       value = {gender}
        id="fullWidth" />
  
       <TextField 
       fullWidth 
       label="Enter the House"
       onChange={(event)=>setHouse(event.target.value)}
       value = {house}
        id="fullWidth" />
  
  <TextField 
       fullWidth 
       label="Enter Date of Birth"
       onChange={(event)=>setDob(event.target.value)}
       value = {dob}
        id="fullWidth" />
  
  <TextField 
       fullWidth 
       label="Enter the Wand Type"
       onChange={(event)=>setWand(event.target.value)}
       value = {wand}
        id="fullWidth" />
  
  <TextField 
       fullWidth 
       label="Enter a Image"
       onChange={(event)=>setImage(event.target.value)}
       value = {image}
        id="fullWidth" />
   
          <Button
            className="add-btn"
            color="secondary"
            variant="contained"
            onClick={Addteacherlist }
          >
            Update Data
          </Button>
          </div>
          </Base>
        
      
    )
}

export default AddStaffPage