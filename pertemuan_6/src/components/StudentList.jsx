// add student data and delete student function
function StudentList({ students, onDeleteStudent }) {
  const getGradeColor = (grade) => {
    switch (grade) {
      case "A":
        return "#10b981";
      case "A-":
        return "#34d399";
      case "B+":
        return "#84cc16";
      case "B":
        return "#eab308";
      case "B-":
        return "#f59e0b";
      case "C+":
        return "#f97316";
      case "C":
        return "#ef4444";
      default:
        return "#6b7280";
    }
  };

  return (
    <div className="student-list">
      <div className="list-header">
        <span>
          Showing {students.length} student{students.length !== 1 ? "s" : ""}
        </span>
      </div>

      <div className="students-grid">
        {students.map((student) => (
          <div key={student.id} className="student-card">
            <div className="student-header">
              <div className="student-profile">
                <div className="student-avatar">
                  {student.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="student-info">
                  <h3>{student.name}</h3>
                  <p className="student-course">{student.course}</p>
                </div>
              </div>
              <button className="delete-btn" onClick={() => onDeleteStudent(student.id)} title="Delete student">
                ×
              </button>
            </div>

            <div className="student-details">
              <div className="detail-item">
                <span className="detail-label">📧 Email</span>
                <span className="detail-value">{student.email}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">📞 Phone</span>
                <span className="detail-value">{student.phone}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">📊 Grade</span>
                <span className="grade-badge" style={{ backgroundColor: getGradeColor(student.grade) }}>
                  {student.grade}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentList;
