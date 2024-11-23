import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";

const API_URL = "https://672818af270bd0b975544fae.mockapi.io/api/v1/Student_management";

function UpdatePage() {
  const { id } = useParams();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [editCount, setEditCount] = useState(0);
  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  useEffect(() => {
    fetch(`${API_URL}/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setName(data.name);
        setEmail(data.email);
        setPhone(data.phone_number);
      });
  }, [id]);

  const handleInputChange = (field, value) => {
    if (field === "name") setName(value);
    if (field === "email") setEmail(value);
    if (field === "phone") setPhone(value);

    setEditCount((prev) => prev + 1);

    const data = { name, email, phone_number: phone };
    fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).catch((err) => console.error("Update failed:", err));
  };

  return (
    <div>
      <h1>학생 수정</h1>
      <form>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => handleInputChange("name", e.target.value)}
            ref={nameRef}
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            ref={emailRef}
          />
        </div>
        <div className="mb-3">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            value={phone}
            onChange={(e) => handleInputChange("phone", e.target.value)}
            ref={phoneRef}
          />
        </div>
        <p>수정 횟수: {editCount}</p>
        <button type="button" onClick={() => navigate("/")} className="btn btn-secondary">
          Back
        </button>
      </form>
    </div>
  );
}

export default UpdatePage;
