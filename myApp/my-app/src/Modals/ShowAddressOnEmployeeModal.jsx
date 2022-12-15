import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ShowAddressOnEmployeeTable from '../Table/ShowAddressOnEmployeeTable';

function ShowExpensesOnEmployeeModal(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button  onClick={toggle}>
        Contact Info
      </Button>
      <Modal size='lg' isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Contact Info of Employee</ModalHeader>
        <ModalBody>
          <ShowAddressOnEmployeeTable employeeId={args.employeeId}/>
        </ModalBody>
        
      </Modal>
    </div>
  );
}

export default ShowExpensesOnEmployeeModal;