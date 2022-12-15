package com.application.employeehr.controller;

import com.application.employeehr.client.request.CreateExpensesRequest;
import com.application.employeehr.client.request.UpdateExpensesRequest;
import com.application.employeehr.client.response.ExpensesDto;
import com.application.employeehr.service.ExpensesService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/v1/expenses")
@RequiredArgsConstructor
public class ExpensesController {

    private final ExpensesService expensesService;

    @PostMapping
    public ResponseEntity<ExpensesDto> createExpenses(@Valid @RequestBody CreateExpensesRequest expensesRequest){
        return ResponseEntity.ok(expensesService.createExpenses(expensesRequest));
    }
    @GetMapping
    public ResponseEntity<List> getAllExpenses(){
        return ResponseEntity.ok(expensesService.getAllExpenses());
    }
    @GetMapping("/{id}")
    public ResponseEntity<ExpensesDto> getExpensesById(@PathVariable Long id){
        return ResponseEntity.ok(expensesService.getExpensesDtoById(id));
    }
    @GetMapping("/employee/{employeeId}")
    public ResponseEntity<List> getLeaveByEmployeeId(@PathVariable Long employeeId){
        return ResponseEntity.ok(expensesService.getExpensesByEmployeeId(employeeId));
    }
    @PutMapping("/{id}")
    public ResponseEntity<ExpensesDto> updateExpenses(@PathVariable Long id, @Valid @RequestBody UpdateExpensesRequest expensesRequest){
        return ResponseEntity.ok(expensesService.updateExpenses(id,expensesRequest));
    }
    @DeleteMapping("/{id}")
    @ResponseStatus(value = HttpStatus.NO_CONTENT)
    public void deleteExpenses(@PathVariable Long id){
        expensesService.deleteExpenses(id);
    }
}
