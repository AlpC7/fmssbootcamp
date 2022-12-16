import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Table from '../Table/Table';
import Employee from '../employee/Employee';
import {Modal as Modal2} from 'reactstrap'
import Table2 from '../employee/LeaveForm';
import LeaveForm from '../employee/LeaveForm';
import EmployeeUpdateForm from '../employee/EmployeeUpdateForm';
import ShowEmployeeTable from '../Table/ShowEmployeeTable';

function Example(args) {
  const [modal, setModal] = useState(false);

  const toggle = (param) =>{
    debugger
    //ShowEmployeeTable
    let x=this
    setModal(!modal);

  }  

  return (
    <div>
        {/* <h1>{args.employeeId}</h1> */}
      <Button  color="primary" onClick={toggle}>
        Update
      </Button>
      <Modal fullscreen isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader  toggle={toggle}>Update Employee</ModalHeader>
        <ModalBody >
          <EmployeeUpdateForm employeeId={args.employeeId}/>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
      
    </div>
  );
}

export default Example;