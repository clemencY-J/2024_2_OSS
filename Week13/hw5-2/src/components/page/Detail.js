import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "https://672818af270bd0b975544fae.mockapi.io/api/v1/Student_management";

function DetailPage() {
    const { id } = useParams();
    const [student, setStudent] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`${API_URL}/${id}`)
            .then((response) => response.json())
            .then((data) => setStudent(data));
    }, [id]);

    if (!student) return <p>Loading...</p>;

    return (
        <div>
            <h1>학생 세부 정보</h1>
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{student.name}</h5>
                    <p className="card-text">Email: {student.email}</p>
                    <p className="card-text">Phone: {student.phone_number}</p>
                </div>
            </div>
            <button onClick={() => navigate("/")} className="btn btn-secondary">
                Back to List
            </button>
        </div>
    );
}

export default DetailPage;
