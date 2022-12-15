


import React, { Component } from 'react'
import {Table} from 'reactstrap'
import {Button} from 'reactstrap'

var employeeToAnotherPage =  {};

export default class ShowAddressOnEmployeeTable extends Component {
    constructor(props) {
        super(props);
        this.state = {
            address: [],
        }
        
    }
    
    componentDidMount() {
        debugger
        const fetchMap = "/api/v1/employees/addresses/"+this.props.employeeId.id
        fetch(fetchMap)      
        .then(res => res.json())
        .then(
            (address) => {
                this.setState({ address: address });
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
            <th>Address ID </th>
            <th>Contact Address</th>
            <th>City</th>
            <th>Country</th>
            <th>Phone </th>
            <th>ZIP Code</th>
        </tr>
    </thead>

    <tbody>
        
            <tr>
                <td>{this.state.address.id}</td>
                <td>{this.state.address.address}</td>
                <td>{this.state.address.city}</td>
                <td>{this.state.address.country}</td>
                <td>{this.state.address.phone}</td>
                <td>{this.state.address.zipCode}</td>
                
            </tr>
    
    </tbody>
</Table> </>);
  }
}
