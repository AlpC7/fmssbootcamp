import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import Table from '../Table/Table';
import Employee from '../employee/Employee';
import {Modal as Modal2} from 'reactstrap'
import Table2 from '../employee/LeaveForm';
import ShowEmployeeTable from '../Table/ShowEmployeeTable';

function Example(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="primary" onClick={toggle}>
      Employees
      </Button>
      <Modal fullscreen isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader  toggle={toggle}>Employee List</ModalHeader>
        <ModalBody>
          <ShowEmployeeTable/>
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