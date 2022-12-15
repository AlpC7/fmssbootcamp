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
public class UpdateLeaveRequest {


    private Long id;

    @NotBlank(message = "Leave Type cannot empty")
    private String leaveType;

    @NotBlank(message = "Total Day cannot empty")
    private float leaveTotal;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate leaveStartDate;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate leaveEndDate;

    @NotBlank(message = "Description cannot empty")
    private String description;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate leaveReturnDate;


}
