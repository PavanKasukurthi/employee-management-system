import { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'

const AddEmployee = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [emailId, setEmailId] = useState('')
  const navigate = useNavigate()

  const { id } = useParams()

  const saveOrUpdateEmployee = (e) => {
    e.preventDefault()

    const employee = { firstName, lastName, emailId }
    // console.log(employee)

    if (id) {
      EmployeeService.updateEmployee(id, employee)
        .then((res) => {
          console.log(res.data)
          navigate('/employees')
        })
        .catch((err) => console.log(err))
    } else {
      EmployeeService.saveEmployee(employee)
        .then((res) => {
          console.log(res.data)
          navigate('/employees')
        })
        .catch((err) => console.log(err))
    }
  }

  useEffect(() => {
    EmployeeService.getEmployeeById(id)
      .then((res) => {
        setFirstName(res.data.firstName)
        setLastName(res.data.lastName)
        setEmailId(res.data.emailId)
      })
      .catch((err) => console.log(err))
  }, [])

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            <h2 className="text-center">
              {id ? 'Edit Employee' : 'Add Employee'}
            </h2>
            <div className="card-body">
              <form action="">
                <div className="form-group mb-2">
                  <label htmlFor="" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="firstName"
                    id=""
                    placeholder="Enter First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    name="lastName"
                    id=""
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="form-group mb-2">
                  <label htmlFor="" className="form-label">
                    Email Id
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="emailId"
                    id=""
                    placeholder="Enter Email Id"
                    value={emailId}
                    onChange={(e) => setEmailId(e.target.value)}
                  />
                </div>
                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateEmployee(e)}
                >
                  Submit
                </button>

                <Link to="/employees" className="btn btn-danger ">
                  Cancel
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default AddEmployee
