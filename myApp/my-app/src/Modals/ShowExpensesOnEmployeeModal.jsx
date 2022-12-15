import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ShowExpensesOnEmployeeTable from '../Table/ShowExpensesOnEmployeeTable';

function ShowExpensesOnEmployeeModal(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button  onClick={toggle}>
        Expenses
      </Button>
      <Modal size='lg' isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Expenses of Employee</ModalHeader>
        <ModalBody>
          <ShowExpensesOnEmployeeTable employeeId={args.employeeId}/>
        </ModalBody>
        
      </Modal>
    </div>
  );
}

export default ShowExpensesOnEmployeeModal;