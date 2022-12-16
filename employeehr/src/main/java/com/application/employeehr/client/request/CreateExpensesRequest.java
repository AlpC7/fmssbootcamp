package com.application.employeehr.client.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import lombok.experimental.SuperBuilder;
import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
@ToString
public class CreateExpensesRequest {

    private String expenseType;

    private float expenseTotal;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate receiptDate;

    private float taxRate;

    private String description;

    public Long employeeId;

}
