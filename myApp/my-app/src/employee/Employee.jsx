import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap';
import {Input} from 'reactstrap'
import {FormText,Form,FormGroup,Label} from 'reactstrap'
import {Button} from 'reactstrap'
import InputField from '../FormElement/InputField';




export default class Employee extends Component {

  data ={  
    firstName: '',
    lastName:'',
    email:'',
    tcNo: '',
    salary: '',
    startDate: '',
    title: '',
    role: '',
    department: '',
    birthDate: '',
    level: '',
    
      address: '',
      city: '',
      country: '',
      phone: '',
      zipCode: '',
  }
 
  initialState= {
    firstName: '',
    lastName:'',
    email:'',
    tcNo: '',
    salary: '',
    startDate: '',
    title: '',
    role: '',
    department: '',
    birthDate: '',
    level: '',
    optionOne:'1',
    optionTwo:'1',
    optionThree:'1',
    userData: [],
    responseError:[],
    
      address: '',
      city: '',
      country: '',
      phone: '',
      zipCode: '',
    
}

constructor(props) {
  super(props);
  debugger
  this.state = this.initialState;
  
}

   setAllEmployee = (e) => {
    debugger
    e.preventDefault();
    let { firstName,lastName, email,tcNo,salary, startDate, title, role, department,  birthDate, userData, level,address,city,country,phone,zipCode } = this.state;
    userData.push({ firstName,lastName, email,tcNo,salary, startDate, title, role, department,  birthDate, level,address,city,country,phone,zipCode });
    this.setState({ firstName,lastName, email,tcNo,salary, startDate, title, role, department,  birthDate, level,address,city,country,phone,zipCode});

    var data = this
    let req={
      firstName: "",
      lastName: "",
      email: "",
      tcNo: "",
      salary: "",
      startDate: "",
      title: "",
      role: "",
      department: "",
      birthDate: "",
      level: "",
      address : {
        address: "",
        city: "",
        country: "",
        phone: "",
        zipCode: "",
  
      }
     
    }
    
    req.firstName=this.state.firstName
    req.lastName=this.state.lastName
    req.email=this.state.email
    req.tcNo=this.state.tcNo
    req.salary=this.state.salary
    req.startDate=this.state.startDate
    req.title=this.state.title
    req.role=this.state.role
    req.department=this.state.department
    req.birthDate=this.state.birthDate
    req.address.address=this.state.address
    req.address.city=this.state.city
    req.address.country=this.state.country
    req.address.phone=this.state.phone
    req.address.zipCode=this.state.zipCode
    // if(req.firstName==null || req.firstName==""){
    // alert(" Name cannot empty!")
    //   }
     
  

    this.sendEmployee(req)
    
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
 
  
  handleChange = (selectedOption) => {
   debugger
   this.state.level = selectedOption.target.value;
  }

  async sendEmployee(postdata) {
    debugger


    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(postdata)
    };
    const response = await fetch('/api/v1/employees/', requestOptions);
    debugger
   const data = await response.json();
    if(response.ok==false)
      alert(JSON.stringify(data))
      if(response.ok==true)
        alert("Saved")
}
  
  render() {
   
    return(
      
      <>
      <div>
        
    <Form >
      <Row >
        <Col > 
         <FormGroup>
           <InputField id="firstName" name="firstName" placeholder="Name" type="text"  displaylbl="Name :" fieldvalue={this.state.firstName} 
                     onchangefun={this.textChangeHandler}
                    
              />
         </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <InputField id="lastName" name="lastName" placeholder="Last Name" type="text" displaylbl="Last Name :" fieldvalue={this.state.lastName} 
                        onchangefun={this.textChangeHandler}
                        
              />
          </FormGroup>
        </Col>
     </Row>
      <Row >
        <Col>
          <FormGroup>
            <InputField id="email" name="email" placeholder="mail@mail.com" type="email" displaylbl="e-mail :" fieldvalue={this.state.email} 
                        onchangefun={this.textChangeHandler}
                       
              />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <InputField id="tcNo" name="tcNo" placeholder="TC No" type="text" displaylbl="TC No :" fieldvalue={this.state.tcNo} 
                        onchangefun={this.textChangeHandler}
            
              />
          </FormGroup>
        </Col>
      </Row>
      <Row >
        <Col>
          <FormGroup>
            <InputField id="salary" name="salary" placeholder="Salary" type="text" displaylbl="Salary :" fieldvalue={this.state.salary}
                        onchangefun={this.textChangeHandler}
              />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <InputField id="startDate" name="startDate" placeholder="Start Date" type="date" displaylbl="Start Date :" fieldvalue={this.state.startDate} 
                          onchangefun={this.textChangeHandler}
              />
          </FormGroup>
        </Col>
      </Row>
      <Row >
        <Col>
          <FormGroup>
            <InputField id="title" name="title" placeholder="Title" type="text" displaylbl="Title :" fieldvalue={this.state.title}  
                        onchangefun={this.textChangeHandler}
              />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <InputField id="role" name="role" placeholder="Role" type="text" displaylbl="Role :" fieldvalue={this.state.role} 
                        onchangefun={this.textChangeHandler}
              />
          </FormGroup>
        </Col>
      </Row>
      <Row >
        <Col>
          <FormGroup>
              <InputField id="department" name="department" placeholder="Department" type="name" displaylbl="Department :" fieldvalue={this.state.department} 
                          onchangefun={this.textChangeHandler}
                />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <InputField id="birthDate" name="birthDate" placeholder="Birth Date" type="date" displaylbl="Birth Date :" fieldvalue={this.state.birthDate} 
                        onchangefun={this.textChangeHandler}
              />
         </FormGroup>
        </Col>
      </Row>
      <Row xs="5">
        <Col >
          <FormGroup>
            <Label>Level</Label>
            <Input name="level" type="select" onChange={(value)=>this.handleChange(value)}>
              <option> Select Level </option>
              <option value={"1"}> 1 </option>
              <option value={"2"}> 2 </option>
              <option value={"3"}> 3 </option>
           </Input>
          </FormGroup>
        </Col>
      </Row>
      <Row>
        <Col> 
          <FormGroup>
            <InputField id="id_address" name="address" type="textarea" displaylbl="Adress :" fieldvalue={this.state.address} 
                        onchangefun={this.textChangeHandler}
              
              />
          </FormGroup>
        </Col>
      </Row>
      <Row >
        <Col>
          <FormGroup>
            <InputField id="id_city" name="city" placeholder="City" type="text" displaylbl="City :" fieldvalue={this.state.city} 
                        onchangefun={this.textChangeHandler}
    
              />
          </FormGroup>
       </Col>
       <Col>
         <FormGroup>
          <InputField id="id_country" name="country" placeholder="Country" type="text" displaylbl="Country :" fieldvalue={this.state.country} 
                        onchangefun={this.textChangeHandler}
    
            />
        </FormGroup>
      </Col>
      
    </Row>
    <Row>
      <Col>
        <FormGroup>
          <InputField id="id_phone" name="phone" placeholder="Phone Number" type="text" displaylbl="Phone Number :" fieldvalue={this.state.phone} 
                        onchangefun={this.textChangeHandler}
          
            />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <InputField id="id_postcode" name="zipCode" placeholder="ZIP Code" type="text" displaylbl="ZIP Code :" fieldvalue={this.state.zipCode} 
                        onchangefun={this.textChangeHandler}
    
            />
        </FormGroup>
      </Col>
    </Row>
    <Row>
      <Col><Button block color="primary" outline onClick={this.setAllEmployee}>  SAVE </Button></Col>
    </Row>
  </Form>
      
</div>
</>

 
    );
  }
}
