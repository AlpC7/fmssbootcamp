package com.application.employeehr.repository;

import com.application.employeehr.model.Address;
import com.application.employeehr.model.Expenses;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AddressRepository extends JpaRepository<Address, Long> {

    Address findOneById(Long id);

    Address findOneByEmployee_Id(Long id);
}
