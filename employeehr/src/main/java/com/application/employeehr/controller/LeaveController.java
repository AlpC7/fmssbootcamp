package com.application.employeehr.controller;

import com.application.employeehr.client.request.CreateLeaveRequest;
import com.application.employeehr.client.request.UpdateLeaveRequest;
import com.application.employeehr.client.response.LeaveDto;
import com.application.employeehr.service.LeaveService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/leaves")
@RequiredArgsConstructor
public class LeaveController {

    private final LeaveService leaveService;

    @PostMapping
    public ResponseEntity<LeaveDto> createLeave(@Valid @RequestBody CreateLeaveRequest leaveRequest){
        return ResponseEntity.ok(leaveService.createLeave(leaveRequest));
    }

    @GetMapping
    public ResponseEntity<List> getAllLeave() {
        return ResponseEntity.ok(leaveService.getAllLeave());
    }


    @GetMapping("/{id}")
    public ResponseEntity<LeaveDto> getLeaveById(@PathVariable Long id){
        return ResponseEntity.ok(leaveService.getLeaveDtoById(id));
    }

    @GetMapping("/employee/{employeeId}")
    public ResponseEntity<List> getLeaveByEmployeeId(@PathVariable Long employeeId){
        return ResponseEntity.ok(leaveService.getLeaveByEmployeeId(employeeId));
    }

    @PutMapping("/{id}")
    public ResponseEntity<LeaveDto> updateLeave(@PathVariable Long id,@Valid @RequestBody UpdateLeaveRequest leaveRequest){
        return ResponseEntity.ok(leaveService.updateLeave(id,leaveRequest));
    }

    @DeleteMapping("/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteLeave(@PathVariable Long id){
        leaveService.deleteLeave(id);
    }
}
