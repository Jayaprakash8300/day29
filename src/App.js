import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddStudentPage from "./Components/AddStudent";
import AddStaffPage from "./Components/AddTeacher";
import EditStudent from "./Components/EditStudent";
import EditTeacher from "./Components/EditTeacher";
import SchoolAbout from "./Components/SchoolAbout";
import ViewStudent from "./Components/StudentProfile";
import TeacherList from "./Components/StaffList";
import StudentsList from "./Components/StudentList";
import ViewTeacher from "./Components/TeacherProfile";
import WelcomePage from "./Components/WelcomePage";
import { student } from "./Data/students";
import { teacher } from "./Data/teachers";

function App() {
  const [studentsData, setStudentsData] = React.useState(student);
  const [teachersData, setTeachersData] = React.useState(teacher);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route
          path="/StudentList"
          element={
            <StudentsList
              studentsData={studentsData}
              setStudentsData={setStudentsData}
            />
          }
        ></Route>

        <Route
          path="/TeacherList"
          element={
            <TeacherList
              teachersData={teachersData}
              setTeachersData={setTeachersData}
            />
          }
        ></Route>
        <Route
          path="/view-student/:id"
          element={<ViewStudent studentsData={studentsData} />}
        ></Route>

        <Route
          path="/view-staff/:id"
          element={<ViewTeacher teachersData={teachersData} />}
        ></Route>

        <Route
          path="/StudentEdit/:id"
          element={
            <EditStudent
              studentsData={studentsData}
              setStudentsData={setStudentsData}
            />
          }
        ></Route>

        <Route
          path="/edit-staff/:id"
          element={
            <EditTeacher
              teachersData={teachersData}
              setTeachersData={setTeachersData}
            />
          }
        ></Route>

        <Route
          path="/add-student"
          element={
            <AddStudentPage
              studentsData={studentsData}
              setStudentsData={setStudentsData}
            />
          }
        ></Route>

        <Route
          path="/add-teacher"
          element={
            <AddStaffPage
              teachersData={teachersData}
              setTeachersData={setTeachersData}
            />
          }
        ></Route>

        <Route path="/about" element={<SchoolAbout />}></Route>
      </Routes>
    </div>
  );
}

export default App;