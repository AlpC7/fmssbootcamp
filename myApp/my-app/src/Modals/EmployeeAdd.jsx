import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Table from '../Table/Table';
import Employee from '../employee/Employee';
import {Modal as Modal2} from 'reactstrap'
import Table2 from '../employee/LeaveForm';
import {Row} from 'reactstrap'
import EmployeeUpdateForm from '../employee/EmployeeUpdateForm'

function Example(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
        Add Employee
      </Button>
      <Modal fullscreen  isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Add Employee</ModalHeader>
        <ModalBody>
          <Employee/>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
      
    </div>
  );
}

export default Example;