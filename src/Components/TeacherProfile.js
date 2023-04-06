import React, { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Base from "../Base/Base";

const ViewTeacher=({teachersData})=>{
   
    
    const {id}=useParams();
    const [name, setName] = useState("");
    const [species, setSpecies] = useState("");
    const [gender, setGender] = useState("");
    const [house, setHouse] = useState("");
    const [dob, setDob] = useState("");
    const [wand, setWand] = useState("");
    const [image, setImage] = useState("");

    const staff=teachersData[id];
    useEffect(()=>{

     
        setName(staff.name)
        setSpecies(staff.species)
        setGender(staff.gender)
        setHouse(staff.house)
        setDob(staff.dateOfBirth)
        setWand(staff.wand)
        setImage(staff.image)
    },[staff.name, staff.species, staff.gender,staff.house,staff.dateOfBirth,staff.wand,staff.image])

    return(
        <Base
            title = "Staff Profile"
            description= "here we have full staff details"
        >
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
    

export default ViewTeacher