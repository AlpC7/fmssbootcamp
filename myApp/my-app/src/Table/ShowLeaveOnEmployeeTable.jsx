


import React, { Component } from 'react'
import {Table} from 'reactstrap'
import {Button} from 'reactstrap'
import ShowEmployeeOnLeaveTable from '../Modals/ShowEmployeeOnLeaveTable'

var employeeToAnotherPage =  {};

export default class ShowEmployeeTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            leave: [],
            leaveEmployee: []
        }
        
    }
    
    componentDidMount() {
        debugger
        const fetchMap = "/api/v1/leaves/employee/"+this.props.employeeId.id
        fetch(fetchMap)       //https://raw.githubusercontent.com/aspsnippets/test/master/Customers.json
        .then(res => res.json())
        .then(
            (leave) => {
                this.setState({ leave: leave });
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
    {/* <Button onClick={() => {
  this.componentDidMount();
  }}> Calisanlari Goster</Button> */}
    
    <Table bordered
  dark
  hover
  responsive
  striped  >
    <thead>
        <tr>
            <th>Leave ID </th>
            <th>Leave Type</th>
            <th>Total Day</th>
            <th>Start Date </th>
            <th>Leave End Date </th>
            <th>Description</th>
            <th>Return Date </th>
            
        </tr>
    </thead>

    <tbody>
        {this.state.leave.map(leave =>
            <tr>
                <th scope="row">{leave.id}</th>
                <td>{leave.leaveType}</td>
                <td>{leave.leaveTotal}</td>
                <td>{leave.leaveStartDate}</td>
                <td>{leave.leaveEndDate}</td>
                <td>{leave.description}</td>
                <td>{leave.leaveReturnDate}</td>
            </tr>
        )}
    </tbody>
</Table> </>);
  }
}
