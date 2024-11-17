import React, { useState, useEffect } from "react";
import axios from "axios";
import StudentList from "./components/StudentList";
import StudentModal from "./components/StudentModal";

function App() {
  const [students, setStudents] = useState([]);
  const [modalData, setModalData] = useState({ id: "", name: "", age: "", phone: "" });
  const [isModalOpen, setModalOpen] = useState(false);

  // 데이터 가져오기
  const fetchStudents = async () => {
    try {
      const response = await axios.get("http://localhost:3000/students");
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
    }
  };

  // 새 데이터 추가
  const createStudent = async (student) => {
    try {
      await axios.post("http://localhost:3000/students", student);
      fetchStudents();
      setModalOpen(false);
    } catch (error) {
      console.error("Error creating student:", error);
    }
  };

  // 기존 데이터 수정
  const updateStudent = async (student) => {
    try {
      await axios.put(`http://localhost:3000/students/${student.id}`, student);
      fetchStudents();
      setModalOpen(false);
    } catch (error) {
      console.error("Error updating student:", error);
    }
  };

  // 데이터 삭제
  const deleteStudent = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/students/${id}`);
      fetchStudents();
    } catch (error) {
      console.error("Error deleting student:", error);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Student Management</h1>
      <button
        className="btn btn-primary"
        onClick={() => {
          setModalData({ id: "", name: "", age: "", phone: "" });
          setModalOpen(true);
        }}
      >
        Add Student
      </button>
      <StudentList students={students} onEdit={setModalData} onDelete={deleteStudent} />
      <StudentModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        data={modalData}
        onSave={(data) => (data.id ? updateStudent(data) : createStudent(data))}
      />
    </div>
  );
}

export default App;
