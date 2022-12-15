package com.application.employeehr.mapper;

import com.application.employeehr.client.request.CreateEmployeeRequest;
import com.application.employeehr.client.response.AddressDto;
import com.application.employeehr.model.Address;
import org.mapstruct.Mapper;

@Mapper(implementationName = "AddressMapperImpl" , componentModel = "spring")
public interface AddressMapper {

    Address toAddress(AddressDto addressDto);

    AddressDto toAddressDto(Address address);
//
//    Address toAddressFromCreateAddressRequest(CreateAddressRequest AddressRequest);
}
