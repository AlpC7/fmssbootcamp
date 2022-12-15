


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
        fetch("/api/v1/expenses")       //https://raw.githubusercontent.com/aspsnippets/test/master/Customers.json
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
expenseDeleteFetch(expenseId) {
    debugger
    // Simple DELETE request with fetch
    const fetchDeleteId = "/api/v1/expenses/"+expenseId
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
            <th>Expense ID </th>
            <th>Expense Type</th>
            <th>Expense Total</th>
            <th>Receipt Date </th>
            <th>Tax Rate </th>
            <th>Description</th>
            <th>Employee Info</th>
            <th>Delete Expense</th>
            
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
                <td onClick={()=>{this.Trigger(expense)}}><ShowEmployeeOnExpensesTable sendExpensesToGetEmployee={expense}/></td>
                <td onClick={()=>{this.expenseDeleteFetch(expense.id)}}><Button color="danger">Delete</Button></td>
            </tr>
        )}
    </tbody>
</Table> </>);
  }
}
