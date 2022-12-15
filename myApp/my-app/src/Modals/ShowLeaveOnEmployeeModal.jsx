import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ShowLeaveOnEmployeeTable from '../Table/ShowLeaveOnEmployeeTable';

function ShowLeaveOnEmployeeModal(args) {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button  onClick={toggle}>
        Leave
      </Button>
      <Modal size='lg' isOpen={modal} toggle={toggle} {...args}>
        <ModalHeader toggle={toggle}>Leaves of Employee</ModalHeader>
        <ModalBody>
          <ShowLeaveOnEmployeeTable employeeId={args.employeeId}/>
        </ModalBody>
        
      </Modal>
    </div>
  );
}

export default ShowLeaveOnEmployeeModal;