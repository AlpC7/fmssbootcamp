package com.application.employeehr.client.request;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import lombok.experimental.SuperBuilder;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
@ToString
public class UpdateExpensesRequest {


    private Long id;

    @NotBlank(message = "Type cannot empty")
    private String expenseType;

    @NotBlank(message = "Total cannot empty")
    private float expenseTotal;


    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate receiptDate;

    @NotBlank(message = "Tax Rate cannot empty")
    private float taxRate;

    private String description;


}
