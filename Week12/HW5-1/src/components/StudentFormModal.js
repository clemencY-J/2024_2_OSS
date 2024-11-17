import React, { useState, useEffect } from "react";

const StudentFormModal = ({ student, onSave, onClose }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    age: "",
    phone: "",
  });

  useEffect(() => {
    if (student) {
      setFormData(student);
    }
  }, [student]);

  const handleChange = (props) => {
    const { name, value } = props.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <div className="modal show d-block">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{student ? "Edit Student" : "Add Student"}</h5>
            <button className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            <div className="mb-3">
              <label htmlFor="id" className="form-label">ID</label>
              <input type="text" className="form-control" name="id" value={formData.id} onChange={handleChange} disabled={!!student}/>
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange}/>
            </div>
            <div className="mb-3">
              <label htmlFor="age" className="form-label">Age</label>
              <input type="number" className="form-control" name="age" value={formData.age} onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Phone</label>
              <input type="text" className="form-control" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
          </div>
          <div className="modal-footer">
            <button className="btn btn-secondary" onClick={onClose}>Cancel</button>
            <button className="btn btn-primary" onClick={handleSubmit}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentFormModal;
