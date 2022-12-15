package com.application.employeehr.mapper;

import com.application.employeehr.client.request.CreateExpensesRequest;
import com.application.employeehr.client.response.ExpensesDto;
import com.application.employeehr.model.Expenses;
import org.mapstruct.Mapper;

@Mapper(implementationName = "ExpensesMapperImpl" , componentModel = "spring")
public interface ExpensesMapper {

    Expenses toExpenses(ExpensesDto expensesDto);

    ExpensesDto toExpensesDto(Expenses expenses);

    Expenses toExpensesFromCreateExpensesRequest(CreateExpensesRequest expensesRequest);

}

