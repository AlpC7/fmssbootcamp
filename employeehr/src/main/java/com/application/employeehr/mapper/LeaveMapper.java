package com.application.employeehr.mapper;

import com.application.employeehr.client.request.CreateLeaveRequest;
import com.application.employeehr.client.response.LeaveDto;
import com.application.employeehr.model.Leave;
import org.mapstruct.Mapper;

@Mapper(implementationName = "LeaveMapperImpl" , componentModel = "spring")
public interface LeaveMapper {

    Leave toLeave(LeaveDto leaveDto);

    LeaveDto toLeaveDto(Leave leave);

    Leave toLeaveFromCreateLeaveRequest(CreateLeaveRequest leaveRequest);


}