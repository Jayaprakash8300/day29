import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, TextField } from '@mui/material';
import Base from "../Base/Base";


const EditStudent=({studentsData,setStudentsData})=>{
  const history = useNavigate();
    const {id} = useParams();
    const student = studentsData[id]
    const [editId, setEditId] = useState("");
    const [idx, setIdx] = useState("");
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [gender, setGender] = useState("");
    const [house, setHouse] = useState("");
    const [dob, setDob] = useState("");
    const [wand, setWand] = useState("");
    const [image, setImage] = useState("");
    

useEffect(()=>{
    setEditId(student.idx);
    setIdx(student.id)
    setName(student.name)
    setSpecies(student.species)
    setGender(student.gender)
    setHouse(student.house)
    setDob(student.dateOfBirth)
    setWand(student.wand)
    setImage(student.image)
},[student.id,student.idx, student.name,student.species, student.gender,student.house,
  student.dateOfBirth,student.wand,student.image])


const updateStudentData = () =>{

    const studentIndex=studentsData.findIndex((stud)=>stud.id===editId)

  const updatedData={
        id,
        name,
        species,
        gender,
        house,
        dateOfBirth:dob,
        wand,
        image
    }

    studentsData[studentIndex]=updatedData;

    setStudentsData([...studentsData]);

    setEditId("");
    setIdx("")
    setName("")
    setSpecies("")
    setGender("")
    setHouse("")
    setDob("")
    setWand("")
    setImage("")

    history("/StudentList");
}
    return(
        <Base
        title = "Edit A Student"
        description= "You can a Edit a student data here"
        >
        
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
          onClick={updateStudentData }
        >
          Update Data
        </Button>


   </div>

   
         
        </Base>
    )
}



export default EditStudent