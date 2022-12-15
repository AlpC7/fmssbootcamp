import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ShowEmplooyeFromExpenseTable from '../Table/ShowEmployeeFromExpensesTable';

function Example(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button  onClick={toggle}>
        Employee Info
      </Button>
      <Modal size='lg' isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Employee Info</ModalHeader>
        <ModalBody>
          <ShowEmplooyeFromExpenseTable sendExpensesToGetEmployee={args.sendExpensesToGetEmployee}/>
        </ModalBody>
        
      </Modal>
    </div>
  );
}

export default Example;