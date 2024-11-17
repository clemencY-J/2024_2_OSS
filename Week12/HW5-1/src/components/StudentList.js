import React from "react";

const StudentList = ({ students, onEdit, onDelete }) => {
  return (
    <div className="mt-4">
      {students.map((student) => (
        <div key={student.id} className="d-flex justify-content-between align-items-center mb-2">
          <div>
            <span>{student.id}</span> - <span>{student.name}</span> - <span>{student.age}</span> - <span>{student.phone}</span>
          </div>
          <div>
            <button
              className="btn btn-primary btn-sm me-2"
              onClick={() => onEdit(student)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger btn-sm"
              onClick={() => onDelete(student.id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
