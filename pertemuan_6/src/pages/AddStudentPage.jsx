import StudentForm from "../components/AddStudentForm";

// include add student function
function AddStudentPage({ onAddStudent }) {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Add New Student</h1>
        <p>Enter student information to add to the directory</p>
      </div>
      {/* pass add student function */}
      <StudentForm onAddStudent={onAddStudent} />
    </div>
  );
}

export default AddStudentPage;
