package com.application.employeehr.client.request;

import com.application.employeehr.client.response.AddressDto;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import lombok.experimental.SuperBuilder;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
@ToString
public class UpdateEmployeeRequest {


    private Long id;

    @NotBlank(message = "Name cannot empty")
    private String firstName;

    @NotBlank(message = "Last Name cannot empty")
    private String lastName;

    @NotBlank(message = "e-mail cannot empty")
    private String email;

    @NotBlank(message = "TC NO cannot empty")
    private String tcNo;
    @Min(value = 1000, message = "Salary Min=1000")
    private float salary;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate startDate;

    @NotBlank(message = "Title cannot empty")
    private String title;

    @NotBlank(message = "Role cannot empty")
    private String role;

    @NotBlank(message = "Department cannot empty")
    private String department;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate birthDate;

    private Integer level;

    private AddressDto address;
}