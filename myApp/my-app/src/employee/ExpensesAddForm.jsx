import React, { Component } from 'react'
import {Row, Col, Input, FormGroup,Button, Label,Form} from 'reactstrap'
import InputField from '../FormElement/InputField';

export default class LeaveForm extends Component {


  initialState= {
    expenseType: '',
    expenseTotal:'',
    receiptDate:'',
    taxRate: '',
    description: '',
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
  let { expenseType,expenseTotal, receiptDate,taxRate,description,userData } = this.state;
  userData.push({ expenseType,expenseTotal, receiptDate,taxRate,description });
  this.setState({ expenseType,expenseTotal, receiptDate,taxRate,description });

  var data = this
  let req={
    expenseType: "",
    expenseTotal: "",
    receiptDate: "",
    taxRate: "",
    description: "",
    employeeId: "",
  }
  
  req.expenseType=this.state.expenseType
  req.expenseTotal=this.state.expenseTotal
  req.receiptDate=this.state.receiptDate
  req.taxRate=this.state.taxRate
  req.description=this.state.description
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
  const response = await fetch('/api/v1/expenses/', requestOptions);
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
                 <InputField id="expenseType" name="expenseType" placeholder="Type" type="text"  displaylbl="Type :" fieldvalue={this.state.expenseType} 
                     onchangefun={this.textChangeHandler}
                    
               />
              </FormGroup>
            </Col>
            <Col>
              <FormGroup>
                <InputField id="expenseTotal" name="expenseTotal" placeholder="Total " type="text" displaylbl="Total  :" fieldvalue={this.state.expenseTotal} 
                        onchangefun={this.textChangeHandler}
                        
                />
              </FormGroup>
           </Col>
          </Row>
          <Row >
           <Col > 
            <FormGroup>
              <InputField id="receiptDate" name="receiptDate" placeholder="receiptDate " type="date"  displaylbl="Receip Date :" fieldvalue={this.state.receiptDate} 
                     onchangefun={this.textChangeHandler}
                    
              />
            </FormGroup>
           </Col>
           <Col>
            <FormGroup>
              <InputField id="taxRate" name="taxRate" placeholder="Tax Rate" type="text" displaylbl="Tax Rate :" fieldvalue={this.state.taxRate} 
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
      <Col><Button block color="primary" outline onClick={this.setAllLeave}>  Save </Button></Col>
      {/* <Col><Button block color="primary" outline onClick={()=> alert("Güncellendi!")}>  Güncelle </Button></Col>
      <Col><Button block color="primary" outline onClick={()=> alert("Silindi!")}>  Sil </Button></Col> */}
    </Row>
        </Form>
      </div>
    )
  }
}
