import axios from 'axios'

const EMPLOYEE_API_BASE_URL = 'http://localhost:8080/api/v1/employees'

class EmployeeService {
  //get employees
  getEmployees() {
    return axios.get(EMPLOYEE_API_BASE_URL)
  }

  //post employees
  saveEmployee(employee) {
    return axios.post(EMPLOYEE_API_BASE_URL, employee)
  }

  //get employee by id
  getEmployeeById(id) {
    return axios.get(EMPLOYEE_API_BASE_URL + `/${id}`)
  }

  //update employee by id
  updateEmployee(id, employee) {
    return axios.put(EMPLOYEE_API_BASE_URL + `/${id}`, employee)
  }

  //delete employee by id
  deleteEmployee(id) {
    return axios.delete(EMPLOYEE_API_BASE_URL + `/${id}`)
  }
}

export default new EmployeeService()
