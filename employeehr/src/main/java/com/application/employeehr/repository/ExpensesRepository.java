package com.application.employeehr.repository;

import com.application.employeehr.model.Expenses;
import com.application.employeehr.model.Leave;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ExpensesRepository extends JpaRepository<Expenses, Long> {
    Expenses findOneById(Long id);

    List<Expenses> findAllByEmployee_Id(Long id);

}
