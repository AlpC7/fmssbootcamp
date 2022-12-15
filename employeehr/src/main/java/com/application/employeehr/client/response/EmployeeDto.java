package com.application.employeehr.client.response;

import com.application.employeehr.model.Employee;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonInclude;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.CascadeType;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import java.time.LocalDate;
import java.util.Set;

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
