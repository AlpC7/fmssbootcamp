import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';

import EmployeeAdd from './Modals/EmployeeAdd';
import ShowEmployee from './Modals/ShowEmployee'
import ShowLeave from './Modals/ShowLeave'
import {Button,ButtonGroup} from 'reactstrap'
import ShowExpenses from './Modals/ShowExpenses'

export default class App extends Component {
  render() {
    return (
      <div>
   
        <EmployeeAdd/>
        
        <ShowEmployee/>

        <ShowLeave/>
        <ShowExpenses/>
       
        
      {/* <Employee/> */}
       
{/*        
       <Table deleteclicked={this.showDeletePopup} data={this.state.userData} editclicked={this.onEditClick} /> */}
    
    </div>
    )
  }
}

