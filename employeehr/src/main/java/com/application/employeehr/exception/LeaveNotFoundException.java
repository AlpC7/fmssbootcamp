package com.application.employeehr.exception;

public class LeaveNotFoundException extends RuntimeException{

    public LeaveNotFoundException(String message) {
        super(message);
    }
}
