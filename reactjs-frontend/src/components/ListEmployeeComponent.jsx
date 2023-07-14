import { useEffect, useState } from 'react'
import axios from 'axios'

const ListEmployeeComponent = () => {
  const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/v1/employees'
  const [employees, setEmployees] = useState([])

  const getEmployees = () => {
    axios.get(EMPLOYEE_API_BASE_URL).then((res) => {
      setEmployees(res.data)
    })
  }

  const addEmployee = () => {
    
  }

  useEffect(() => {
    getEmployees()
  }, [])
  // console.log(employees)

  return (
    <div className="container">
      <h2>Employees List</h2>
      <div className="row">
        <button className="btn btn-primary" onClick={addEmployee}>Add Employee</button>
      </div>
      <div className="row">
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th>Employee First Name</th>
              <th>Employee Last Name</th>
              <th>Employee Email Id</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => {
              return (
                <tr key={employee.id}>
                  <td>{employee.firstName}</td>
                  <td>{employee.lastName}</td>
                  <td>{employee.emailId}</td>
                  <td>
                    <button className="btn btn-info">Update</button>
                    <button className="btn btn-danger">Delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
export default ListEmployeeComponent
