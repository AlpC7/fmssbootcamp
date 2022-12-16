import React, { Component } from 'react'
import { Col, Container, Row } from 'reactstrap';
import {Input} from 'reactstrap'
import {FormText,Form,FormGroup,Label} from 'reactstrap'
import {Button} from 'reactstrap'

import InputField from '../FormElement/InputField';


export default class EmployeeUpdateForm extends Component {

   propArray = [] 
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
    employeeId: '',
    anotherarray:[],
    address: '',
    city: '',
    country: '',
    phone: '',
    zipCode: '',
    getAddressArray:[]
   
}
    getIdState={
        employees: []
    }
constructor(props) {
  super(props);
  debugger
  this.state = this.initialState;
  this.propArray = this.props.employeeId
}

   setAllEmployee = (e) => {
    debugger
    e.preventDefault();
    let { firstName,lastName, email,tcNo,salary, startDate, title, role, department,  birthDate, userData, level,address,city,country,phone,zipCode } = this.state;
    userData.push({ firstName,lastName, email,tcNo,salary, startDate, title, role, department,  birthDate, level,address,city,country,phone,zipCode });
    this.setState({ firstName,lastName, email,tcNo,salary, startDate, title, role, department,  birthDate, level,address,city,country,phone,zipCode });

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
 debugger
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
    req.level=this.state.level
    req.address.address=this.state.address
    req.address.city=this.state.city
    req.address.country=this.state.country
    req.address.phone=this.state.phone
    req.address.zipCode=this.state.zipCode

    let anotherarray={}

    // if(req.firstName==null || req.firstName==""){
    // alert("isim alani bos olamaz!")
    //   }

    
    if(req.firstName==null || req.firstName==""){
        req.firstName = this.propArray.firstName
    }
    if(req.lastName==null || req.lastName==""){
      req.lastName = this.propArray.lastName
    }
    if(req.email==null || req.email==""){
      req.email = this.propArray.email
    }
    if(req.tcNo==null || req.tcNo==""){
      req.tcNo = this.propArray.tcNo
    }
    if(req.salary==null || req.salary==""){
      req.salary = this.propArray.salary
    }
    if(req.startDate==null || req.startDate==""){
      req.startDate = this.propArray.startDate
    }
    if(req.title==null || req.title==""){
      req.title = this.propArray.title
    }
    if(req.role==null || req.role==""){
      req.role = this.propArray.role
    }
    if(req.department==null || req.department==""){
      req.department = this.propArray.department
    }
    if(req.birthDate==null || req.birthDate==""){
      req.birthDate = this.propArray.birthDate
    }
    if(req.level==null || req.level==""){
      req.level = this.propArray.level
    }
    if(req.address.address==null || req.address.address==""){
      req.address.address = this.state.getAddressArray.address
    }
    if(req.address.city==null || req.address.city==""){
      req.address.city = this.state.getAddressArray.city
    }
    if(req.address.country==null || req.address.country==""){
      req.address.country = this.state.getAddressArray.country
    }
    if(req.address.phone==null || req.address.phone==""){
      req.address.phone = this.state.getAddressArray.phone
    }
    if(req.address.zipCode==null || req.address.zipCode==""){
      req.address.zipCode = this.state.getAddressArray.zipCode
    }
  

    this.sendEmployee(req)
    
    }

    
    textChangeHandler = (e) => {
      debugger
      let { name, value } = e.target;

      if(e.target.id === "firstName"){this.propArray.firstName = e.target.value;}
      if(e.target.id === "lastName"){this.propArray.lastName = e.target.value;}
      if(e.target.id === "email"){this.propArray.email = e.target.value;}
      if(e.target.id === "tcNo"){this.propArray.tcNo = e.target.value;}
      if(e.target.id === "salary"){this.propArray.salary = e.target.value;}
      if(e.target.id === "startDate"){this.propArray.startDate = e.target.value;}
      if(e.target.id === "title"){this.propArray.title = e.target.value;}
      if(e.target.id === "role"){this.propArray.role = e.target.value;}
      if(e.target.id === "department"){this.propArray.department = e.target.value;}
      if(e.target.id === "birthDate"){this.propArray.birthDate = e.target.value;}
      if(e.target.id === "address"){this.state.getAddressArray.address = e.target.value;}
      if(e.target.id === "city"){this.state.getAddressArray.city = e.target.value;}
      if(e.target.id === "country"){this.state.getAddressArray.country = e.target.value;}
      if(e.target.id === "phone"){this.state.getAddressArray.phone = e.target.value;}
      if(e.target.id === "zipCode"){this.state.getAddressArray.zipCode = e.target.value;}
     


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
    // POST request using fetch with async/await
    debugger

    const fetchMap = `/api/v1/employees/`+this.props.employeeId.id;

    const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' } ,
        body: JSON.stringify(postdata)
    };
    const response = await fetch(fetchMap, requestOptions);
    debugger
    const data = await response.json();
    // this.setState({ responseError: data });
    alert("Saved")
}
  componentDidMount() {
        debugger
        const fetchMap = "/api/v1/employees/addresses/"+this.props.employeeId.id
        fetch(fetchMap)      
        .then(res => res.json())
        .then(
            (address) => {
                this.setState({ getAddressArray: address });
            },
            (error) => {
                alert(JSON.stringify(error));
            }
        )
    }

  render() {
   
    return(
      
      <>
      <div>
        
    <Form >
      <Row >
        <Col > 
         <FormGroup>
          {/* <Label>{this.props.employeeId}</Label> onChange={(e)=>{this.textChangeHandler(e)} */} 
           <InputField id="firstName" name="firstName" placeholder={this.props.employeeId.firstName} displaylbl="First Name :" type="text" fieldvalue={this.propArray.firstName} 
                     onchangefun={this.textChangeHandler} 
                    
              /> 
         </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <InputField id="lastName" name="lastName" placeholder={this.propArray.lastName} type="text" displaylbl="Last Name :" fieldvalue={this.propArray.lastName} 
                        onchangefun={this.textChangeHandler}
                        
              />
          </FormGroup>
        </Col>
     </Row>
      <Row >
        <Col>
          <FormGroup>
            <InputField id="email" name="email" placeholder="mail@mail.com" type="email" displaylbl="e-mail :" fieldvalue={this.propArray.email} 
                        onchangefun={this.textChangeHandler}
                       
              />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <InputField id="tcNo" name="tcNo" placeholder="TC No" type="text" displaylbl="TC No :" fieldvalue={this.propArray.tcNo} 
                        onchangefun={this.textChangeHandler}
            
              />
          </FormGroup>
        </Col>
      </Row>
      <Row >
        <Col>
          <FormGroup>
            <InputField id="salary" name="salary" placeholder="Maas" type="text" displaylbl="Salary :" fieldvalue={this.propArray.salary}
                        onchangefun={this.textChangeHandler}
              />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <InputField id="startDate" name="startDate" placeholder="Start Date" type="date" displaylbl="Start Date :" fieldvalue={this.propArray.startDate} 
                          onchangefun={this.textChangeHandler}
              />
          </FormGroup>
        </Col>
      </Row>
      <Row >
        <Col>
          <FormGroup>
            <InputField id="title" name="title" placeholder="Title" type="name" displaylbl="Title :" fieldvalue={this.propArray.title}  
                        onchangefun={this.textChangeHandler}
              />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <InputField id="role" name="role" placeholder="Role" type="name" displaylbl="Role :" fieldvalue={this.propArray.role} 
                        onchangefun={this.textChangeHandler}
              />
          </FormGroup>
        </Col>
      </Row>
      <Row >
        <Col>
          <FormGroup>
              <InputField id="department" name="department" placeholder="Department" type="name" displaylbl="Department :" fieldvalue={this.propArray.department} 
                          onchangefun={this.textChangeHandler}
                />
          </FormGroup>
        </Col>
        <Col>
          <FormGroup>
            <InputField id="birthDate" name="birthDate" placeholder="Birth Date" type="date" displaylbl="Birth Date :" fieldvalue={this.propArray.birthDate} 
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
            <InputField id="address" name="address" type="textarea" displaylbl="Address :" fieldvalue={this.state.getAddressArray.address} 
                        onchangefun={this.textChangeHandler}
              
              />
          </FormGroup>
        </Col>
      </Row>
      <Row >
        <Col>
          <FormGroup>
            <InputField id="city" name="city" placeholder="City" type="text" displaylbl="City :"fieldvalue={this.state.getAddressArray.city} 
                        onchangefun={this.textChangeHandler}
    
              />
          </FormGroup>
       </Col>
       <Col>
         <FormGroup>
          <InputField id="country" name="country" placeholder="Country" type="text" displaylbl="Country :"fieldvalue={this.state.getAddressArray.country} 
                        onchangefun={this.textChangeHandler}
    
            />
        </FormGroup>
      </Col>
      
    </Row>
    <Row>
      <Col>
        <FormGroup>
          <InputField id="phone" name="phone" placeholder="Phone Number" type="text" displaylbl="Phone No :" fieldvalue={this.state.getAddressArray.phone} 
                        onchangefun={this.textChangeHandler}
          
            />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <InputField id="zipCode" name="zipCode" placeholder="ZIP Code" type="text" displaylbl="ZIP Code :"fieldvalue={this.state.getAddressArray.zipCode} 
                        onchangefun={this.textChangeHandler}
    
            />
        </FormGroup>
      </Col>
    </Row>
    <Row>
      <Col><Button block color="primary" outline onClick={this.setAllEmployee}>  UPDATE </Button></Col>
      
    </Row>
  </Form>
      
</div>
</>

 
    );
  }
}
