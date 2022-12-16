package com.application.employeehr.client.response;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;

@Getter
@Setter
@Builder
public class EmployeeDto {
    private long id;
    private String firstName;

    private String lastName;

    private String email;

    private String tcNo;

    private float salary;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate startDate;

    private String title;

    private String role;

    private String department;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate birthDate;

    private Integer level;

    private AddressDto address;

}
