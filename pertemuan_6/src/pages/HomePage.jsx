import StudentList from "../components/StudentList";

// add student data and delete student function
function HomePage({ students, onDeleteStudent }) {
  return (
    <div className="page-container">
      <div className="page-header">
        <h1>Student Directory</h1>
        <p>Manage and view all student records</p>
      </div>

      {students.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">📚</div>
          <h3>No Students Found</h3>
          <p>Add your first student to get started!</p>
        </div>
      ) : (
        // pass student data and delete student function
        <StudentList students={students} onDeleteStudent={onDeleteStudent} />
      )}
    </div>
  );
}

export default HomePage;
