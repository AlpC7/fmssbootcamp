


import React, { Component } from 'react'
import {Table} from 'reactstrap'
import {Button} from 'reactstrap'
import LeaveAdd from '../Modals/LeaveAdd'
import EmployeeUpdate from '../Modals/EmployeeUpdate'
import ExpensesAdd from '../Modals/ExpensesAdd'
import ShowExpensesOnEmployeeModal from '../Modals/ShowExpensesOnEmployeeModal'
import ShowLeaveOnEmployeeModal from '../Modals/ShowLeaveOnEmployeeModal'
import ShowAddressOnEmployeeModal from '../Modals/ShowAddressOnEmployeeModal'

 var employeeToAnotherPage =  {};

export default class ShowEmployeeTable extends Component {
     
    constructor(props) {
        super(props);
        this.state = {
            employees: []
        }
        
    }
    
    componentDidMount() {
        fetch("/api/v1/employees/")       
        .then(res => res.json())
        .then(
            (employees) => {
                this.setState({ employees: employees });
            },
            // (error) => {
            //     alert(JSON.stringify(error));
            // }
        )
        
    }
  
    Trigger = (info) => {
           
            employeeToAnotherPage = info;
    }
    employeeDeleteFetch(employeeId) {
        debugger
        // Simple DELETE request with fetch
        const fetchDeleteId = "/api/v1/employees/"+employeeId
        fetch(fetchDeleteId, { method: 'DELETE' })
            .then(alert("Deleted"));
            
    }

    
  render() {
    return (
        <>
    
    <Table bordered
  dark
  hover
  responsive
  striped  >
    <thead>
        <tr>
            <th>Employee ID </th>
            <th>First Name </th>
            <th>Last Name </th>
            <th>e-mail </th>
            <th>TC No </th>
            <th>Salary </th>
            <th>Start Date </th>
            <th>Title </th>
            <th>Role </th>
            <th>Department </th>
            <th>Birth Date </th>
            <th>Level </th>
            <th>Leaves</th>
            <th>Expenses</th>
            <th>Contact Info</th>
            <th>Update Info</th>
            <th>Delete Employee</th>
        </tr>
    </thead>

    <tbody>
        {this.state.employees.map(employee =>
            <tr>
                
                <th scope="row">{employee.id}</th>
                <td> {employee.firstName} </td>
                <td> {employee.lastName} </td>
                <td>{employee.email}</td>
                <td>{employee.tcNo}</td>
                <td>{employee.salary}</td>
                <td>{employee.startDate}</td>
                <td>{employee.title}</td>
                <td>{employee.role}</td>
                <td>{employee.department}</td>
                <td>{employee.birthDate}</td>
                <td>{employee.level}</td>
                <td onClick={()=>{this.Trigger(employee)}}><ShowLeaveOnEmployeeModal employeeId={employee}/><LeaveAdd employeeId={employee}/></td>
               
                {/* <td onClick={()=>{this.Trigger(employee)}}> Visit Profile  </td> */}
                <td onClick={()=>{this.Trigger(employee)}}><ShowExpensesOnEmployeeModal employeeId={employee}/><ExpensesAdd employeeId={employee}/></td>
                <td onClick={()=>{this.Trigger(employee)}}><ShowAddressOnEmployeeModal employeeId={employee}/></td>
                <td onClick={()=>{this.Trigger(employee)}}><EmployeeUpdate employeeId={employee}/></td>
                <td onClick={()=>{this.employeeDeleteFetch(employee.id)}}><Button color="danger">Delete</Button></td>
                
               
            </tr>
        )}
    </tbody>
</Table> </>

);
  }
}


