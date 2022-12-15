package com.application.employeehr.repository;

import com.application.employeehr.model.Leave;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LeaveRepository extends JpaRepository<Leave, Long> {

    Leave findOneById(Long id);

    List<Leave> findAllByEmployee_Id(Long id);


}
