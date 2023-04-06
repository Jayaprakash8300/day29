import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, TextField } from '@mui/material';
import Base from "../Base/Base";

const EditStaff=({teachersData,setTeachersData})=>{
    const history=useNavigate();
    const {id}=useParams();
    const staff=teachersData[id];
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
    setEditId(staff.idx);
    setIdx(staff.id)
    setName(staff.name)
    setSpecies(staff.species)
    setGender(staff.gender)
    setHouse(staff.house)
    setDob(staff.dateOfBirth)
    setWand(staff.wand)
    setImage(staff.image)
    },[staff.idx,staff.id,staff.name,staff.species,staff.gender,staff.house,staff.dateOfBirth,
        staff.wand,staff.image])

    const updateStaff=()=>{

        const staffIndex=teachersData.findIndex((staff)=>staff.id===editId)

        let updatedStaff={
            id,
            name,
            species,
            gender,
            house,
            dateOfBirth:dob,
            wand,
            image
        }

        teachersData[staffIndex]=updatedStaff;

        setTeachersData([...teachersData])

        setEditId("");
    setIdx("")
    setName("")
    setSpecies("")
    setGender("")
    setHouse("")
    setDob("")
    setWand("")
    setImage("")
    history("/TeacherList");
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
         onClick={updateStaff}
        >
          Update
        </Button>


   </div>

        </Base>
    )
}



export default EditStaff