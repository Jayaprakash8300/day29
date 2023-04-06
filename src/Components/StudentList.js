import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Base from "../Base/Base";

import { useNavigate } from "react-router-dom";



const StudentsList=( {studentsData,setStudentsData})=>{
    const  Navigate = useNavigate(); 

    const deleteStudent=(id)=>{
        const removeStudent= studentsData.filter((stud,idx)=>(idx!==id));
        setStudentsData(removeStudent)
       }

    return(
<Base>
    <div className="card-containers"> 
        <div className="row"> 
            {studentsData.map((stu,idx)=>(
                <div className="col-lg-3 col-md-4 col-sm-6 " key={idx}> 
                    <div className="card-main">
                        
                            <Card.Img variant="top" className="img" src={stu.image} />
                            <Card.Body>
                                <Card.Title>{stu.name}</Card.Title>
                                <ButtonGroup className="ButtonGroup">
                                    <Button variant="secondary" onClick={()=>Navigate(`/StudentEdit/${idx}`)}>Edit</Button>
                                    <Button variant="danger" color="warning" onClick={()=>deleteStudent(idx)}>Delete</Button>
                                    <Button variant="info" onClick={()=>Navigate(`/view-student/${idx}`)}>View Student</Button>
                                </ButtonGroup>
                            </Card.Body>
                    </div>
                </div>
            ))}   
        </div>
    </div>
</Base>
)
}
export default StudentsList