import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/navbar";
import OurCourses from "./components/OurCourses";
import Teacher from "./components/Teacher";
import StudentList from "./components/StudentList";
import StudentDetail from "./components/StudentDetail";
import { Routes, Route } from "react-router-dom";
import LinkToStudents from "./components/LinkToStudent";
import Login from "./components/login";
import StudentEdit from "./components/StudentEdit";
import ScrollHandler from "./components/ScrollHandler";

function App() {
  return (
    <>
      <Navbar />
      <ScrollHandler />
      <Routes>
        {/* صفحه اصلی */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <OurCourses />
              <LinkToStudents />
              <Teacher />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        {/* صفحه لیست دانشجوها */}
        <Route path="/students" element={<StudentList />} />

        {/* صفحه جزئیات هر دانشجو */}
        <Route path="/students/:id" element={<StudentDetail />} />

        <Route path="/students/:id/login" element={<Login />} />
        <Route path="/students/:id/edit" element={<StudentEdit />} />
      </Routes>
    </>
  );
}

export default App;
