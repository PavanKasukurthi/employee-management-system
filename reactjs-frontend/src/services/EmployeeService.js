import axios from 'axios';



class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }
}

export default new EmployeeService();