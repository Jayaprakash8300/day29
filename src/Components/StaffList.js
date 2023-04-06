import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { useNavigate } from "react-router-dom";
import Base from "../Base/Base";



const TeacherList =({teachersData,setTeachersData})=>{

    const history=useNavigate();
    const deleteStaff=(id)=>{
        const removeTeacher= teachersData.filter((stud,idx)=>(idx!==id));
        setTeachersData(removeTeacher)
       }
    return(
        <Base
        title="Welcome to Hogwards"
        description="Here We have Data of Staffs of Hogwards"
        >
        <div className="card-containers">
            <div className="row">
                {teachersData.map((teacher,idx)=>(      
                    <div className="col-lg-3 col-md-4 col-sm-6" key={idx}> 
                        <div className="card-main">
                            <Card.Img variant="top"className="img" src={teacher.image} />
                            <Card.Body>
                            <Card.Title>{teacher.name}</Card.Title>
                            <ButtonGroup className="ButtonGroup">
                            <Button variant="secondary" onClick={()=>history(`/edit-staff/${idx}`)}>Edit</Button>
                            <Button variant="danger" color="warning" onClick={()=>deleteStaff(idx)}>Delete</Button>
                            <Button variant="info"onClick={()=>history(`/view-staff/${idx}`)}>View Staff</Button>
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

export default TeacherList;