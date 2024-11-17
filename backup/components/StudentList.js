import React from "react";

function StudentList({ students, onEdit, onDelete }) {
  return (
    <div className="mt-4">
      {students.map((student) => (
        <div key={student.id} className="d-flex justify-content-between align-items-center border p-2 m-2">
          <div>
            {student.id} {student.name}{student.age} {student.phone}
          </div>
          <div>
            <button className="btn btn-primary" onClick={() => onEdit(student)}> Edit </button>
            <button className="btn btn-danger" onClick={() => onDelete(student.id)}> Delete </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
