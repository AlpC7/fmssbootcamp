package com.application.employeehr.client.response;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
@Builder
public class AddressDto {

    public Long id;

    private String address;

    private String city;

    private String country;

    private String phone;

    private String zipCode;
}
