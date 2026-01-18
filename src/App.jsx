import React, { useState } from "react";
import "./App.css";
import EmployeeForm from "./components/EmployeeForm";
import employeeData from "./data/employees";
import Header from "./components/Header";
import EmployeeList from "./components/EmployeeList";

function App() {
  const [employees, setEmployees] = useState(employeeData);

  function handleDelete(employeeToDelete) {
    const newArray = employees.filter(
      (employee) => employee.id !== employeeToDelete.id
    );
    setEmployees(newArray);
  }

  function handleEdit(employeeToEdit) {
    const newArray = employees.map((employee) =>
      employee.id === employeeToEdit.id ? employeeToEdit : employee
    );
    setEmployees(newArray);
  }

  return (
    <div>
      <Header />
      <EmployeeForm employees={employees} setEmployees={setEmployees} />
      <EmployeeList
        employees={employees}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
