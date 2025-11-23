import { useState } from "react";
import { useNavigate } from "react-router";

function AddStudentForm({ onAddStudent }) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    grade: "A",
  });

  const courses = ["Computer Science", "Mathematics", "Physics", "Chemistry", "Biology", "Engineering", "Business Administration", "Psychology"];

  const grades = ["A", "A-", "B+", "B", "B-", "C+", "C", "D", "F"];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.course) {
      alert("Please fill in all required fields");
      return;
    }

    onAddStudent(formData);

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      course: "",
      grade: "A",
    });

    // Show success message and redirect
    alert("Student added successfully!");
    navigate("/");
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="student-form">
        <div className="form-group">
          <label htmlFor="name" className="form-label">
            Full Name *
          </label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="form-input" placeholder="Enter student's full name" required />
        </div>

        <div className="form-group">
          <label htmlFor="email" className="form-label">
            Email Address *
          </label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="form-input" placeholder="Enter student's email" required />
        </div>

        <div className="form-group">
          <label htmlFor="phone" className="form-label">
            Phone Number
          </label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="form-input" placeholder="Enter student's phone number" />
        </div>

        <div className="form-group">
          <label htmlFor="course" className="form-label">
            Course *
          </label>
          <select id="course" name="course" value={formData.course} onChange={handleChange} className="form-select" required>
            <option value="">Select a course</option>
            {courses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="grade" className="form-label">
            Grade
          </label>
          <select id="grade" name="grade" value={formData.grade} onChange={handleChange} className="form-select">
            {grades.map((grade) => (
              <option key={grade} value={grade}>
                {grade}
              </option>
            ))}
          </select>
        </div>

        <div className="form-actions">
          <button type="button" className="btn-secondary" onClick={() => navigate("/")}>
            Cancel
          </button>
          <button type="submit" className="btn-primary">
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddStudentForm;
