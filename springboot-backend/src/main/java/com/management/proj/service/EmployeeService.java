package com.management.proj.service;

import com.management.proj.model.Employee;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface EmployeeService {

    public Employee saveEmployee(Employee employee);

    public List<Employee> findAll();

    public ResponseEntity<Employee> findById(long id);

    public ResponseEntity<Employee> updateEmployee(long id, Employee employeeDetails);

    public ResponseEntity<HttpStatus> deleteEmployee(long id);
}
