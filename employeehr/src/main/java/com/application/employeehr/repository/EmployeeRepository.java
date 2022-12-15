package com.application.employeehr.repository;

import com.application.employeehr.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;
import java.util.Optional;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {

    @Query("select e from Employee e order by e.id")
    List<Employee> findAllById();

    Employee findOneById(Long id);

}
