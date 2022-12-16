package com.application.employeehr.client.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import java.time.LocalDate;

@Getter
@Setter
@Builder
public class ExpensesDto {

    private Long id;

    private String expenseType;

    private float expenseTotal;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate receiptDate;

    private float taxRate;

    private String description;







}
