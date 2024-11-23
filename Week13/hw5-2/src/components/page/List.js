import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://672818af270bd0b975544fae.mockapi.io/api/v1/Student_management";

function ListPage() {
    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => setStudents(data));
    }, []);

    const handleDelete = (id) => {
        fetch(`${API_URL}/${id}`, {
            method: "DELETE",
        })
            .then((response) => {
                if (response.ok) {
                    setStudents(students.filter((student) => student.id !== id));
                    alert("삭제 성공!");
                } else {
                    alert("삭제 실패!");
                }
            });
    };

    return (
        <div>
            <h1>학생 목록</h1>
            <button onClick={() => navigate("/create")} className="btn btn-success">
                Add Student
            </button>
            <div className="mt-4">
                {students.map((student) => (
                    <div key={student.id} className="student-entry">
                        <span>{student.name}</span>
                        <span>{student.phone_number}</span>
                        <span>{student.email}</span>
                        <button
                            className="btn btn-info btn-sm"
                            onClick={() => navigate(`/detail/${student.id}`)}
                        >
                            View Details
                        </button>
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={() => navigate(`/update/${student.id}`)}
                        >
                            Edit
                        </button>
                        <button
                            className="btn btn-danger btn-sm"
                            onClick={() => handleDelete(student.id)}
                        >
                            Delete
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ListPage;
