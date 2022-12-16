import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Table from '../Table/Table';
import Employee from '../employee/Employee';
import {Modal as Modal2} from 'reactstrap'
import Table2 from '../employee/LeaveForm';
import ShowEmployeeTable from '../Table/ShowEmployeeTable';
import ShowLeaveTable from '../Table/ShowLeaveTable'

function Example(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button  color="primary" onClick={toggle}>
        List of Leave
      </Button>
      <Modal fullscreen isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader  toggle={toggle}>List of Leave</ModalHeader>
        <ModalBody>
          <ShowLeaveTable/>
        </ModalBody>
        <ModalFooter>
        </ModalFooter>
      </Modal>
      
    </div>
  );
}

export default Example;