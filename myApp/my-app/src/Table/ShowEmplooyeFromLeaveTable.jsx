import React, { Component } from 'react'
import {Table} from 'reactstrap'


export default class ShowEmplooyeFromLeaveTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employees: [],
        }
        
    }
    
    async componentDidMount() {
        debugger
        // GET request using fetch with async/await
        const fetchMap = `/api/v1/employees/leave/`+this.props.sendLeaveToGetEmployee.id;
        const response = await fetch(fetchMap);
        const data = await response.json();
        this.setState({ employees: data })
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
                  <th>Employee Id</th>
                  <th>First Name </th>
                  <th>Last Name </th>
                  <th>e-mail </th>
                  <th>TC No </th>
            
              </tr>
          </thead>
      
          <tbody>
                  <tr>
                  <td>{this.state.employees.id}</td>
                      <td>{this.state.employees.firstName}</td>
                      <td>{this.state.employees.lastName}</td>
                      <td>{this.state.employees.email}</td>
                      <td>{this.state.employees.tcNo}</td>
                  </tr>
              
          </tbody>
      </Table> </>
    )
  }
}
