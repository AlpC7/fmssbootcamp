


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
        fetch("/api/v1/leaves")       
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
leaveDeleteFetch(leaveId) {
    debugger
    // Simple DELETE request with fetch
    const fetchDeleteId = "/api/v1/leaves/"+leaveId
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
            <th>Leave ID </th>
            <th>Leave Type</th>
            <th>Total Day</th>
            <th>Start Date </th>
            <th>Leave End Date </th>
            <th>Description</th>
            <th>Return Date </th>
            <th>Employee Info</th>
            <th>Delete Leave</th>
            
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
                <td onClick={()=>{this.Trigger(leave)}}><ShowEmployeeOnLeaveTable sendLeaveToGetEmployee={leave}/></td>
                <td onClick={()=>{this.leaveDeleteFetch(leave.id)}}><Button color="danger">Delete</Button></td>
            </tr>
        )}
    </tbody>
</Table> </>);
  }
}
