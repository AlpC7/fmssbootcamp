package com.application.employeehr.exception;

public class ExpensesNotFoundException extends RuntimeException {
    public ExpensesNotFoundException(String message) {
        super(message);
    }
}
