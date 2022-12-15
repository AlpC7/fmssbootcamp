import React, { Component } from 'react'
import {Row, Col, Input, FormGroup,Button, Label,Form} from 'reactstrap'
import InputField from '../FormElement/InputField';

export default class LeaveForm extends Component {


  initialState= {
    leaveType: '',
    leaveTotal:'',
    leaveStartDate:'',
    leaveEndDate: '',
    description: '',
    leaveReturnDate: '',
    employee:'',
    userData: [],
}


constructor(props) {
  super(props);
  debugger
  this.state = this.initialState;
  this.propArrayLeave = this.props.employeeId
  
}
    setAllLeave = (e) => {
  debugger
  e.preventDefault();
  let { leaveType,leaveTotal, leaveStartDate,leaveEndDate,description, leaveReturnDate,userData } = this.state;
  userData.push({ leaveType,leaveTotal, leaveStartDate,leaveEndDate,description, leaveReturnDate });
  this.setState({ leaveType,leaveTotal, leaveStartDate,leaveEndDate,description, leaveReturnDate });

  var data = this
  let req={
    leaveType: "",
    leaveTotal: "",
    leaveStartDate: "",
    leaveEndDate: "",
    description: "",
    leaveReturnDate: "",
    employeeId: "",
  }
  
  req.leaveType=this.state.leaveType
  req.leaveTotal=this.state.leaveTotal
  req.leaveStartDate=this.state.leaveStartDate
  req.leaveEndDate=this.state.leaveEndDate
  req.description=this.state.description
  req.leaveReturnDate=this.state.leaveReturnDate
  req.employeeId=this.propArrayLeave.id
 
  this.sendLeave(req)
  
  }
  textChangeHandler = (e) => {
    debugger
    let { name, value } = e.target;
    
    this.setState({
        [name]: value,
    });
    debugger
    this.data=this.state;
}
async sendLeave(postdata) {
  // POST request using fetch with async/await
  debugger

  const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(postdata)
  };
  const response = await fetch('/api/v1/leaves/', requestOptions);
  const data = await response.json();
    // this.setState({ responseError: data });
    alert("Saved")
  debugger

}

  render() {
    return (
      <div> 
        <Form>
          <Row >
             <Col > 
              <FormGroup>
                <Label>{this.propArrayLeave.id}</Label>
                 <InputField id="leaveType" name="leaveType" placeholder="Type" type="text"  displaylbl="Type :" fieldvalue={this.state.leaveType} 
                     onchangefun={this.textChangeHandler}
                    
               />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <InputField id="leaveTotal" name="leaveTotal" placeholder="Total Day" type="text" displaylbl="Total Day :" fieldvalue={this.state.leaveTotal} 
                        onchangefun={this.textChangeHandler}
                        
                />
              </FormGroup>
           </Col>
          </Row>
          <Row >
           <Col > 
            <FormGroup>
              <InputField id="leaveStartDate" name="leaveStartDate" placeholder="Start Date" type="date"  displaylbl="Start Date :" fieldvalue={this.state.leaveStartDate} 
                     onchangefun={this.textChangeHandler}
                    
              />
            </FormGroup>
           </Col>
           <Col>
            <FormGroup>
              <InputField id="leaveEndDate" name="leaveEndDate" placeholder="End Date" type="date" displaylbl="End Date :" fieldvalue={this.state.leaveEndDate} 
                        onchangefun={this.textChangeHandler}
                        
              />
            </FormGroup>
           </Col>
          </Row>
          <Row>
            <InputField id="description" name="description" placeholder="Description" type="textarea" displaylbl="Description :" fieldvalue={this.state.description} 
                        onchangefun={this.textChangeHandler}
                        
              />
          </Row>
          <Row>
            <InputField id="leaveReturnDate" name="leaveReturnDate" placeholder="Return Date" type="date" displaylbl="Return Date :" fieldvalue={this.state.leaveReturnDate} 
                        onchangefun={this.textChangeHandler}
                        
              />
          </Row>
          <Row>
      <Col><Button block color="primary" outline onClick={this.setAllLeave}>  Save </Button></Col>
      {/* <Col><Button block color="primary" outline onClick={()=> alert("Güncellendi!")}>  Güncelle </Button></Col>
      <Col><Button block color="primary" outline onClick={()=> alert("Silindi!")}>  Sil </Button></Col> */}
    </Row>
        </Form>
      </div>
    )
  }
}
