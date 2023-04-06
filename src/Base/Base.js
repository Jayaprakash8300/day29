import { AppBar, Toolbar } from "@mui/material";
import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";


const Base = ({title, description, children}) => {
const history = useNavigate();

  return (
    <div className="main-component">
      <div className="nav nav-tabs justify-content-end">
        <AppBar position='static'>
          <Toolbar variant='dense'>
            <Button color="inherit" onClick={()=>history("/")}>Welcome</Button>
            <Button color="inherit" onClick={()=>history("/StudentList")}>Student List</Button>
            <Button color="inherit" onClick={()=>history("/TeacherList")}>Teachers List</Button>
            <Button color="inherit" onClick={()=>history("/add-student")}>AddStudent</Button>
            <Button color="inherit" onClick={()=>history("/add-teacher")}>AddTeacher</Button>
            <Button color="inherit" onClick={()=>history("/about")}>About</Button>
          </Toolbar>
        </AppBar>
      </div>
      <div className="logo">
        <img
          src="https://www.freeiconspng.com/thumbs/harry-potter-logo/harry-potter-logo-transparent-1.png"
          alt="hp-logo"
        ></img>
      </div>
      <div className="school-name">
        <h2>
        Hogwarts School of Witchcraft and Wizardry
        </h2> 
      <div>
          <img
            className="school-logo"
            src="https://blog.logomyway.com/wp-content/uploads/2021/09/hogwarts-logo-draco.jpg"
            alt="hogwarts"
            >
          </img>
        </div>
      </div>

      <div className="title">
        <h3>{title}</h3>
      </div>
      <div className="description">
        <h4>{description}</h4>
      </div>

      <div className="Children">
      {children}
      </div>

      

      <div className="footer-image">
      <img
          src="https://silvergold.media/media/products/7943/tn-7943-m.png"
          alt="Griffyndor"
        ></img>
         <img
          src="https://i0.wp.com/ortadunya.com/wp-content/uploads/2016/11/Slytherin.png"
          alt="Slytherin"
        ></img>
       
          
          <img
          src="https://www.freepnglogos.com/uploads/hogwarts-logo-png/hogwarts-logo-shadopro-deviantart-0.png"
          alt="Hogwarts"
        ></img>
        
         <img
          src="https://toppng.com/uploads/preview/escudo-gryffindor-png-hufflepuff-house-11563000685lwbmbe5zf8.png"
          alt="hufflepuff"
        ></img>
         <img
          src="https://www.seekpng.com/png/full/184-1840811_ravenclaw-crest-harry-potter-harry-potter-ravenclaw-house.png"
          alt="ravenclaw"
        ></img>
       </div>
    </div>
  );
};

export default Base;