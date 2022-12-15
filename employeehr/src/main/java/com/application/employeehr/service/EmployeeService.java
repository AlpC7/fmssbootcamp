package com.application.employeehr.service;

import com.application.employeehr.client.request.CreateEmployeeRequest;
import com.application.employeehr.client.request.UpdateEmployeeRequest;
import com.application.employeehr.client.response.AddressDto;
import com.application.employeehr.client.response.EmployeeDto;
import com.application.employeehr.exception.AddressNotFoundException;
import com.application.employeehr.exception.EmployeeNotFoundException;
import com.application.employeehr.mapper.AddressMapper;
import com.application.employeehr.mapper.EmployeeMapper;
import com.application.employeehr.model.Address;
import com.application.employeehr.model.Employee;
import com.application.employeehr.model.Expenses;
import com.application.employeehr.model.Leave;
import com.application.employeehr.repository.AddressRepository;
import com.application.employeehr.repository.EmployeeRepository;
import com.application.employeehr.repository.ExpensesRepository;
import com.application.employeehr.repository.LeaveRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class EmployeeService {
    private final EmployeeRepository employeeRepository;
    private final LeaveRepository leaveRepository;

    private final ExpensesRepository expensesRepository;
    private final EmployeeMapper employeeMapper;

    private final AddressMapper addressMapper;

    private final AddressRepository addressRepository;

    public EmployeeDto createEmployee(CreateEmployeeRequest employeeRequest){

        Employee employee = employeeMapper.toEmployeeFromCreateEmployeeRequest(employeeRequest);

        EmployeeDto employeeDto = employeeMapper.toEmployeeDto(employeeRepository.save(employee));

        Address address = addressMapper.toAddress(employeeRequest.getAddress());

        address.setEmployee(employeeRepository.findOneById(employeeDto.getId()));

        addressRepository.save(address);

        employeeDto.setAddress(employeeRequest.getAddress());

        return employeeDto;
    }
    @Transactional
    public EmployeeDto getEmployeeDtoById(Long id) {
        Optional<Employee> employeeOptional = employeeRepository.findById(id);

        return employeeOptional.map(employeeMapper::toEmployeeDto)
                .orElseThrow(() -> new RuntimeException("Employee not exist!(by id)"));
    }
    public List<EmployeeDto> getAllEmployees(){
        List<Employee>employeeList = employeeRepository.findAllById();
        return employeeList.stream().map(employeeMapper::toEmployeeDto).collect(Collectors.toList());
    }

    public EmployeeDto updateEmployee(Long id, UpdateEmployeeRequest employeeRequest){
        Optional<Employee> employeeOptional = employeeRepository.findById(id);
        employeeOptional.ifPresent(employee -> {


            Address address = addressRepository.findOneByEmployee_Id(id);
            address.setAddress(employeeRequest.getAddress().getAddress());
            address.setCity(employeeRequest.getAddress().getCity());
            address.setCountry(employeeRequest.getAddress().getCountry());
            address.setPhone(employeeRequest.getAddress().getPhone());
            address.setZipCode(employeeRequest.getAddress().getZipCode());
            addressRepository.save(address);

            employee.setFirstName(employeeRequest.getFirstName());
            employee.setLastName(employeeRequest.getLastName());
            employee.setBirthDate(employeeRequest.getBirthDate());
            employee.setEmail(employeeRequest.getEmail());
            employee.setTcNo(employeeRequest.getTcNo());
            employee.setSalary(employeeRequest.getSalary());
            employee.setStartDate(employeeRequest.getStartDate());
            employee.setTitle(employeeRequest.getTitle());
            employee.setRole(employeeRequest.getRole());
            employee.setDepartment(employeeRequest.getDepartment());
            employee.setLevel(employeeRequest.getLevel());
            employeeRepository.save(employee);

        });
        return employeeOptional.map(employeeMapper::toEmployeeDto)
                .orElseThrow(() -> new EmployeeNotFoundException("Employee not found!"));
    }
    public void deleteEmployee(Long id) {
        employeeRepository.deleteById(id);
    }
    public EmployeeDto getEmployeeByLeaveId(Long id){

        Leave leave = leaveRepository.findOneById(id);

        Employee employee = leave.getEmployee();

        Long employeeId = employee.getId();

        Optional<Employee> employeeOptional = employeeRepository.findById(employeeId);

        return employeeOptional.map(employeeMapper::toEmployeeDto).orElseThrow(()-> new EmployeeNotFoundException("Employee can not found"));
    }
    public EmployeeDto getEmployeeByExpensesId(Long id){

        Expenses expenses = expensesRepository.findOneById(id);

        Employee employee = expenses.getEmployee();

        Long employeeId = employee.getId();

        Optional<Employee> employeeOptional = employeeRepository.findById(employeeId);

        return employeeOptional.map(employeeMapper::toEmployeeDto).orElseThrow(() -> new EmployeeNotFoundException("Employee can not found"));
    }


    public AddressDto getAddressByEmployeeId(Long id){

        Optional <Address> addressOptional = Optional.ofNullable(addressRepository.findOneByEmployee_Id(id));

        return addressOptional.map(addressMapper::toAddressDto).orElseThrow(() -> new AddressNotFoundException("Address not exist!(by id)"));
    }


}