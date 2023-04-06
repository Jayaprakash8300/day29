import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Card from 'react-bootstrap/Card';
import Base from "../Base/Base";


const ViewStudent=({studentsData})=>{
    const {id}=useParams();
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [gender, setGender] = useState("");
    const [house, setHouse] = useState("");
    const [dob, setDob] = useState("");
    const [wand, setWand] = useState("");
    const [image, setImage] = useState("");

    const studentData=studentsData[id];
    useEffect(()=>{

        setName(    studentData.name)
        setSpecies( studentData.species)
        setGender(  studentData.gender)
        setHouse(   studentData.house)
        setDob(     studentData.dateOfBirth)
        setWand(    studentData.wand)
        setImage(   studentData.image)
    },[studentData.name,
        studentData.species,
        studentData.gender,
        studentData.house,
        studentData.dateOfBirth,
        studentData.wand,
        studentData.image]
        )
  
    // viewStudent();
    return(
        <Base>
            <div className="card-view">
                <Card.Img variant="top"className="img" src={image} />       
                <Card.Body style={{padding:"0.5rem"}}>
                    <Card.Title style={{padding:"0.5rem"}}>{name}</Card.Title>
                    <Card.Title style={{padding:"0.5rem"}}> Species : {species}</Card.Title>
                    <Card.Title style={{padding:"0.5rem"}}> Gender : {gender}</Card.Title>
                    <Card.Title style={{padding:"0.5rem"}}> House: {house}</Card.Title>
                    <Card.Title style={{padding:"0.5rem"}}> Date of Birth : {dob}</Card.Title>
                    <Card.Title style={{padding:"0.5rem"}}>Wand Type : {wand}</Card.Title>
                </Card.Body>
            </div>
        </Base>
    )
}


export default ViewStudent