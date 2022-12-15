package com.application.employeehr.client.response;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

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
