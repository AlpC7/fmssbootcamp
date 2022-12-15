package com.application.employeehr.controller;

import com.application.employeehr.client.request.CreateEmployeeRequest;
import com.application.employeehr.client.request.UpdateEmployeeRequest;
import com.application.employeehr.client.response.AddressDto;
import com.application.employeehr.client.response.EmployeeDto;
import com.application.employeehr.service.EmployeeService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/employees")
@RequiredArgsConstructor
public class EmployeeController {
    private final EmployeeService employeeService;

    @PostMapping
    public ResponseEntity<EmployeeDto> createEmployee(@Valid @RequestBody CreateEmployeeRequest employeeRequest){
        return ResponseEntity.ok(employeeService.createEmployee(employeeRequest));
    }

    @PutMapping("/{id}")
    public ResponseEntity<EmployeeDto> updateEmployee( @PathVariable Long id,@Valid @RequestBody UpdateEmployeeRequest employeeRequest){
        return ResponseEntity.ok(employeeService.updateEmployee(id,employeeRequest));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteEmployee(@PathVariable Long id){
        employeeService.deleteEmployee(id);
    }

    @GetMapping
    public ResponseEntity<List> getAllEmployees(){
        return ResponseEntity.ok(employeeService.getAllEmployees());
    }

    @GetMapping("/{id}")
    public ResponseEntity<EmployeeDto> getEmployeeById(@PathVariable Long id){
        return ResponseEntity.ok(employeeService.getEmployeeDtoById(id));
    }

    @GetMapping("/leave/{id}")
    public EmployeeDto getEmployeeByLeaveId(@PathVariable Long id){
        return employeeService.getEmployeeByLeaveId(id);
    }

    @GetMapping("/expenses/{id}")
    public EmployeeDto getEmployeeByExpensesId(@PathVariable Long id){
        return employeeService.getEmployeeByExpensesId(id);
    }
    @GetMapping("/addresses/{employeeId}")
    public AddressDto getAddressByEmployeeId(@PathVariable Long employeeId){
        return employeeService.getAddressByEmployeeId(employeeId);
    }

}