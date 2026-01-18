import React, { useState } from "react";

function Employee({ employee, handleEdit, handleDelete }) {
  const [edit, setEdit] = useState(false);
  const [roleEdit, setRoleEdit] = useState(employee.role);

  function handleSubmit(e) {
    e.preventDefault();

    handleEdit({
      ...employee,
      role: roleEdit,
    });

    setEdit(false);
  }

  return (
    <tr>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>

      <td onClick={() => setEdit(true)}>
        {edit ? (
          <form onSubmit={handleSubmit}>
            <input
              value={roleEdit}
              onChange={(e) => setRoleEdit(e.target.value)}
              onBlur={handleSubmit}
              autoFocus
            />
          </form>
        ) : (
          employee.role
        )}
      </td>

      <td>
        <button onClick={() => handleDelete(employee)}>X</button>
      </td>
    </tr>
  );
}

export default Employee;
