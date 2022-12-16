package com.application.employeehr.client.request;

import com.application.employeehr.client.response.AddressDto;
import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import lombok.experimental.SuperBuilder;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@SuperBuilder
@ToString
public class CreateEmployeeRequest {
    @NotBlank(message = "Name cannot empty")
    private String firstName;

    private String lastName;

    @Email(regexp = "^(.+)@(.+)$", message = "Email is not valid. Please follow the example: fmss@mail.com")
    @NotBlank(message = "Email must not be null")
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