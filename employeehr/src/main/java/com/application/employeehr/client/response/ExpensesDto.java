package com.application.employeehr.client.response;

import com.application.employeehr.model.Employee;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.FetchType;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
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
