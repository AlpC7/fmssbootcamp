package com.application.employeehr.service;

import com.application.employeehr.client.request.CreateExpensesRequest;
import com.application.employeehr.client.request.UpdateExpensesRequest;
import com.application.employeehr.client.response.AddressDto;
import com.application.employeehr.client.response.ExpensesDto;
import com.application.employeehr.client.response.LeaveDto;
import com.application.employeehr.exception.ExpensesNotFoundException;
import com.application.employeehr.mapper.ExpensesMapper;
import com.application.employeehr.model.Employee;
import com.application.employeehr.model.Expenses;
import com.application.employeehr.model.Leave;
import com.application.employeehr.repository.EmployeeRepository;
import com.application.employeehr.repository.ExpensesRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RequiredArgsConstructor
@Service

public class ExpensesService {
    private final ExpensesRepository expensesRepository;
    private final ExpensesMapper expensesMapper;

    private final EmployeeRepository employeeRepository;


    public ExpensesDto createExpenses(CreateExpensesRequest expensesRequest){

        Expenses expenses = expensesMapper.toExpensesFromCreateExpensesRequest(expensesRequest);

        Employee employee = new Employee();
        employee= employeeRepository.findOneById(expensesRequest.getEmployeeId());

        expenses.setEmployee(employee);

        return expensesMapper.toExpensesDto(expensesRepository.save(expenses));
    }

    public List<ExpensesDto> getAllExpenses(){
        List<Expenses>expensesList = expensesRepository.findAll();
        return expensesList.stream().map(expensesMapper::toExpensesDto).collect(Collectors.toList());
    }

    @Transactional
    public ExpensesDto getExpensesDtoById(Long id) {
        Optional<Expenses> expensesOptional = expensesRepository.findById(id);

        return expensesOptional.map(expensesMapper::toExpensesDto)
                .orElseThrow(() -> new RuntimeException("Expenses not exist!(by id)"));
    }

    public ExpensesDto updateExpenses(Long id, UpdateExpensesRequest expensesRequest){
        Optional<Expenses> expensesOptional = expensesRepository.findById(id);
        expensesOptional.ifPresent(expenses -> {

            expenses.setExpenseType(expensesRequest.getExpenseType());
            expenses.setExpenseTotal(expensesRequest.getExpenseTotal());
            expenses.setReceiptDate(expensesRequest.getReceiptDate());
            expenses.setTaxRate(expensesRequest.getTaxRate());
            expenses.setDescription(expensesRequest.getDescription());


            expensesRepository.save(expenses);
        });
        return expensesOptional.map(expensesMapper::toExpensesDto)
                .orElseThrow(() -> new ExpensesNotFoundException("Expenses not found!"));
    }
    public void deleteExpenses(Long id) {
        expensesRepository.deleteById(id);
    }

    @Transactional
    public List <ExpensesDto> getExpensesByEmployeeId(Long id){

        List <Expenses> expenses = expensesRepository.findAllByEmployee_Id(id);

        return expenses.stream().map(expensesMapper::toExpensesDto).collect(Collectors.toList());
    }


}
