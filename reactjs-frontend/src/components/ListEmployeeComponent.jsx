import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const ListEmployeeComponent = () => {
  const [employees, setEmployees] = useState([])

  const getAllEmployees = () => {
    EmployeeService.getEmployees()
      .then((res) => {
        setEmployees(res.data)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    getAllEmployees()
  }, [])
  // console.log(employees)

  const deleteEmployee = (e) => {
    // console.log(e)
    EmployeeService.deleteEmployee(e)
      .then((res) => {
        getAllEmployees()
        console.log(e + 'deleted')
      })
      .catch((err) => console.log(err))
  }

  return (
    <div className="container">
      <h2>Employees List</h2>
      <div className="row">
        <Link to="/add-employee" className="btn btn-primary mb-2">
          Add Employee
        </Link>
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
                    <Link
                      to={`/edit-employee/${employee.id}`}
                      className="btn btn-info"
                    >
                      Update
                    </Link>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteEmployee(employee.id)}
                      style={{ marginLeft: '1rem' }}
                    >
                      Delete
                    </button>
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
