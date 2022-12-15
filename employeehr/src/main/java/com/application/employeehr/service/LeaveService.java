package com.application.employeehr.service;

import com.application.employeehr.client.request.CreateLeaveRequest;
import com.application.employeehr.client.request.UpdateLeaveRequest;
import com.application.employeehr.client.response.EmployeeDto;
import com.application.employeehr.client.response.LeaveDto;
import com.application.employeehr.exception.EmployeeNotFoundException;
import com.application.employeehr.exception.LeaveNotFoundException;
import com.application.employeehr.mapper.LeaveMapper;
import com.application.employeehr.model.Employee;
import com.application.employeehr.model.Leave;
import com.application.employeehr.repository.EmployeeRepository;
import com.application.employeehr.repository.LeaveRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service
public class LeaveService {
    private final LeaveRepository leaveRepository;
    private final LeaveMapper leaveMapper;

    private final EmployeeRepository employeeRepository;

    public LeaveDto createLeave(CreateLeaveRequest leaveRequest){

        Leave leave = leaveMapper.toLeaveFromCreateLeaveRequest(leaveRequest);

        Employee employee = new Employee();
        employee= employeeRepository.findOneById(leaveRequest.getEmployeeId());

       leave.setEmployee(employee);

        return leaveMapper.toLeaveDto(leaveRepository.save(leave));
    }

    public List<LeaveDto> getAllLeave(){
        List<Leave>leaveList = leaveRepository.findAll();
        return leaveList.stream().map(leaveMapper::toLeaveDto).collect(Collectors.toList());
    }

    @Transactional
    public LeaveDto getLeaveDtoById(Long id) {
        Optional<Leave> leaveOptional = leaveRepository.findById(id);

        return leaveOptional.map(leaveMapper::toLeaveDto)
                .orElseThrow(() -> new RuntimeException("Leave not exist!(by id)"));
    }

    public LeaveDto updateLeave(Long id, UpdateLeaveRequest leaveRequest){
        Optional<Leave> leaveOptional = leaveRepository.findById(id);
        leaveOptional.ifPresent(leave -> {

            leave.setLeaveType(leaveRequest.getLeaveType());
            leave.setLeaveTotal(leaveRequest.getLeaveTotal());
            leave.setLeaveStartDate(leaveRequest.getLeaveStartDate());
            leave.setLeaveEndDate(leaveRequest.getLeaveEndDate());
            leave.setDescription(leaveRequest.getDescription());
            leave.setLeaveReturnDate(leaveRequest.getLeaveReturnDate());

            leaveRepository.save(leave);
        });
        return leaveOptional.map(leaveMapper::toLeaveDto)
                .orElseThrow(() -> new LeaveNotFoundException("Leave not found!"));
    }
    public void deleteLeave(Long id) {
        leaveRepository.deleteById(id);
    }

    @Transactional
    public List <LeaveDto> getLeaveByEmployeeId(Long id){

        List <Leave> leave = leaveRepository.findAllByEmployee_Id(id);

        return leave.stream().map(leaveMapper::toLeaveDto).collect(Collectors.toList());
    }
}