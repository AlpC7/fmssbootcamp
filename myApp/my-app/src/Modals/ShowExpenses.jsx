import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Table from '../Table/Table';
import Employee from '../employee/Employee';
import {Modal as Modal2} from 'reactstrap'
import Table2 from '../employee/LeaveForm';
import ShowEmployeeTable from '../Table/ShowEmployeeTable';
import ShowLeaveTable from '../Table/ShowLeaveTable'
import ShowExpenses from '../Table/ShowExpenses'

function Example(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button  color="primary" onClick={toggle}>
        List of Expenses
      </Button>
      <Modal fullscreen isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader  toggle={toggle}>List of Expenses</ModalHeader>
        <ModalBody>
          <ShowExpenses/>
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