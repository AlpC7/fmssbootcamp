import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Table from '../Table/Table';
import Employee from '../employee/Employee';
import {Modal as Modal2} from 'reactstrap'
import Table2 from '../employee/LeaveForm';
import LeaveForm from '../employee/LeaveForm';

function Example(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button  onClick={toggle}>
        Add Leave
      </Button>
      <Modal fullscreen isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader  toggle={toggle}>Add Leave</ModalHeader>
        <ModalBody >
          <LeaveForm employeeId={args.employeeId}/>
        </ModalBody>
        <ModalFooter>
          {/* <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button> */}
        </ModalFooter>
      </Modal>
      
    </div>
  );
}

export default Example;