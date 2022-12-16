


import React, { Component } from 'react'
import {Table} from 'reactstrap'
import {Button} from 'reactstrap'
import ShowEmployeeOnExpensesTable from '../Modals/ShowEmployeeOnExpensesTable'

var employeeToAnotherPage =  {};

export default class ShowEmployeeTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            expense: [],
        }
        
    }
    
    componentDidMount() {
        debugger
        const fetchMap = "/api/v1/expenses/employee/"+this.props.employeeId.id
        fetch(fetchMap)      
        .then(res => res.json())
        .then(
            (expense) => {
                this.setState({ expense: expense });
            },
            (error) => {
                alert(JSON.stringify(error));
            }
        )
    }
    Trigger = (info) => {
           
        employeeToAnotherPage = info;
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
            <th>Expense ID </th>
            <th>Expense Type</th>
            <th>Expense Total</th>
            <th>Receipt Date </th>
            <th>Tax Rate </th>
            <th>Description</th>
            
            
        </tr>
    </thead>

    <tbody>
        {this.state.expense.map(expense =>
            <tr>
                <th scope="row">{expense.id}</th>
                <td>{expense.expenseType}</td>
                <td>{expense.expenseTotal}</td>
                <td>{expense.receiptDate}</td>
                <td>{expense.taxRate}</td>
                <td>{expense.description}</td>
                
            </tr>
        )}
    </tbody>
</Table> </>);
  }
}
