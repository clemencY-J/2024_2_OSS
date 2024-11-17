import React, { useState, useEffect } from "react";
import StudentList from "./components/StudentList.js";
import StudentFormModal from "./components/StudentFormModal.js";

const App = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchStudents = async () => {
    const response = await fetch("http://localhost:3000/students");
    const data = await response.json();
    setStudents(data);
  };

  const handleCreate = async (student) => {
    await fetch("http://localhost:3000/students", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });
    fetchStudents();
    setIsModalOpen(false);
  };

  const handleUpdate = async (student) => {
    await fetch(`http://localhost:3000/students/${student.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(student),
    });
    fetchStudents();
    setIsModalOpen(false);
  };

  const handleDelete = async (id) => {
    await fetch(`http://localhost:3000/students/${id}`, {
      method: "DELETE",
    });
    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container mt-4">
      <button
        className="btn btn-success"
        onClick={() => {
          setSelectedStudent(null);
          setIsModalOpen(true);
        }}
      >
        Add Student
      </button>
      <StudentList
        students={students}
        onEdit={(student) => {
          setSelectedStudent(student);
          setIsModalOpen(true);
        }}
        onDelete={handleDelete}
      />
      {isModalOpen && (
        <StudentFormModal
          student={selectedStudent}
          onSave={selectedStudent ? handleUpdate : handleCreate}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

export default App;
