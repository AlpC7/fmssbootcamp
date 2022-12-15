package com.application.employeehr.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.*;
import javax.persistence.*;
import java.time.LocalDate;

@AllArgsConstructor
@NoArgsConstructor
@Builder
@Entity
@Getter
@Setter
@EqualsAndHashCode
@ToString
public class Leave {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "employee_id", nullable = false, referencedColumnName = "id")
    private Employee employee;

}