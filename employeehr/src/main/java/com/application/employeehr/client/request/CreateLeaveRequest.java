package com.application.employeehr.client.request;

import com.application.employeehr.model.Employee;
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
public class CreateLeaveRequest {

    private String leaveType;

    private float leaveTotal;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate leaveStartDate;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate leaveEndDate;

    private String description;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate leaveReturnDate;

    public Long employeeId;

}