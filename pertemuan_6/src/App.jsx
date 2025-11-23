import { useState } from "react";
import { Routes, Route } from "react-router";
import Navigation from "./components/NavigationBar";
import HomePage from "./pages/HomePage";
import AddStudentPage from "./pages/AddStudentPage";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      course: "Computer Science",
      grade: "A",
    },
    {
      id: 2,
      name: "Jane Smith",
      email: "jane.smith@example.com",
      phone: "+1 (555) 987-6543",
      course: "Mathematics",
      grade: "B+",
    },
    {
      id: 3,
      name: "Mike Johnson",
      email: "mike.johnson@example.com",
      phone: "+1 (555) 456-7890",
      course: "Physics",
      grade: "A-",
    },
  ]);

  const addStudent = (student) => {
    const newStudent = {
      ...student,
      id: students.length + 1,
    };
    setStudents([...students, newStudent]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((student) => student.id !== id));
  };

  return (
    <div className="App">
      <Navigation />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage students={students} onDeleteStudent={deleteStudent} />} />
          <Route path="/add-student" element={<AddStudentPage onAddStudent={addStudent} />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
