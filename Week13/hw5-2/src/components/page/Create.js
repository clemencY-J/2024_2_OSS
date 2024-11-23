import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const API_URL = "https://672818af270bd0b975544fae.mockapi.io/api/v1/Student_management";

function CreatePage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const nameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const handleCreate = () => {
    if (!name) {
      nameRef.current.focus();
      alert("이름을 입력해주세요!");
      return;
    }
    if (!email) {
      emailRef.current.focus();
      alert("이메일을 입력해주세요!");
      return;
    }
    if (!phone) {
      phoneRef.current.focus();
      alert("휴대폰 번호를 입력해주세요!");
      return;
    }

    const data = { name, email, phone_number: phone };
    fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then(() => {
        alert("등록 성공!");
        navigate("/");
      });
  };

  return (
    <div>
      <h1>학생 추가</h1>
      <form>
        <div className="mb-3">
          <label>Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            ref={nameRef}
          />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            ref={emailRef}
          />
        </div>
        <div className="mb-3">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            ref={phoneRef}
          />
        </div>
        <button type="button" onClick={handleCreate} className="btn btn-primary">
          Save
        </button>
      </form>
    </div>
  );
}

export default CreatePage;
