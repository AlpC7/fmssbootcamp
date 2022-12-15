package com.application.employeehr.mapper;

import com.application.employeehr.client.request.CreateEmployeeRequest;
import com.application.employeehr.client.response.EmployeeDto;
import com.application.employeehr.model.Employee;
import org.mapstruct.Mapper;

@Mapper(implementationName = "EmployeeMapperImpl" , componentModel = "spring")
public interface EmployeeMapper {

    Employee toEmployee(EmployeeDto employeeDto);

    EmployeeDto toEmployeeDto(Employee employee);

    Employee toEmployeeFromCreateEmployeeRequest(CreateEmployeeRequest employeeRequest);
}