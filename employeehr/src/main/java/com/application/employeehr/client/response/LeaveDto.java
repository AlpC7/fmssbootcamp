package com.application.employeehr.client.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Builder
public class LeaveDto {

    private Long id;

    private String leaveType;

    private float leaveTotal;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate leaveStartDate;
    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate leaveEndDate;

    private String description;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate leaveReturnDate;





}
