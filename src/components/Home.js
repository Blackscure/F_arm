import React, { Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../components/Home.scss'
import { UncontrolledButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle } from 'reactstrap';
import { Line } from "react-chartjs-2";
import { Modal } from 'bootstrap';


const state = {
    labels: ['Jan', 'Feb', 'March',
             'Apr', 'May', 'June','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
      {
        label: 'farm prfomance',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [5, 15, 20, 81, 56,40,70,80,20,78]
      }
    ]
  }

  //const [lgShow, setLgShow] = useState(false);

export class Home extends Component {
    constructor(props) {
        super(props);
      
        this.state = {
          leftOpen: true,
          rightOpen: true,
          //handleLogout: true,
        }
      }

      toggleSidebar = (event) => {
        let key = `${event.currentTarget.parentNode.id}Open`;
        this.setState({ [key]: !this.state[key] });
      }
    
      render() {
        let leftOpen = this.state.leftOpen ? 'open' : 'closed';
        let rightOpen = this.state.rightOpen ? 'open' : 'closed';
        const handleLogout = this.handleLogout;

      
        return (
            <div>
                <Navbar bg="success" expand="lg">
                    <Navbar.Brand id="logo" href="#home">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                        <NavDropdown title="Nanaimo" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Bundi</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>
                    
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-list-4" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbar-list-4" id="profile">
                    <ul class="navbar-nav">
                    <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="basic-nav-dropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img src="https://images.unsplash.com/photo-1509506489701-dfe23b067808?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1668&q=80" width="40" height="40" class="rounded-circle"/>
                    </a>
                    <div class="dropdown-menu" aria-labelledby="basic-nav-dropdown">
                        <a class="dropdown-item" href="#">My Profile</a>
                        <a class="dropdown-item" href="#">Account</a>
                        <a class="dropdown-item" href="#">Sign Out</a>
                        <button onClick={handleLogout}>Sign Out</button>
                    </div>
                     
                    </li>
                    </ul>
                    </div>
                </Navbar>

      <div id='layout'>

<div id='left' className={leftOpen} >
    <div className={`sidebar ${leftOpen}`} >
    <nav id="mainNav">
        <ul id="myMenu">
            <li><a href="#">Farm</a></li>
            <li><a href="#">Crop</a></li>
            <li><a href="#">Soil</a></li>
            <li><a href="#">Resource</a></li>
            <li><a href="#">Analytics</a></li>
            <li><a href="#">Classified</a></li>
          </ul>
          <div class="header">
            <p>Busia weather bulletin</p>
            <UncontrolledButtonDropdown>    
                <DropdownToggle  caret color="success">
                        3 months
                    </DropdownToggle>
                    <DropdownMenu className="dropbtnle"> 
                    <DropdownItem header>1 week</DropdownItem>
                    <DropdownItem disabled>1 Month</DropdownItem>
                </DropdownMenu>
            </UncontrolledButtonDropdown>
     </div>
    </nav>
    </div>
</div>

<div id='main'><br></br>
    <div className='headeri'>
    <UncontrolledButtonDropdown>
      <DropdownToggle  caret color="success">
        All Fields
      </DropdownToggle>
      <DropdownMenu className="dropbtnle"> 
        <DropdownItem header>Field 1</DropdownItem>
        <DropdownItem disabled>Field 2</DropdownItem>
        <DropdownItem>Field 3</DropdownItem>
        <DropdownItem divider />
        <DropdownItem>New Field</DropdownItem>
      </DropdownMenu>
    </UncontrolledButtonDropdown>
    <button7 type="button" className="btn btn-outline-success">New Crop</button7>
   

    </div>
    <div className='content'>
            <div className="flex-container">
                <Card style={{ width: '14rem' }}>   
                    <Card.Body>
                        <Card.Title>
                        <div class="headcard">
                          <h4>Field 1</h4>
                          <h4>DHO1 Maize</h4>
                      </div>
                          </Card.Title>                
                        <Card.Text>                  
                        <div class="cadbody">
                        <p><b>Size</b>: 1.5acres</p>
                        <p> <b>Current stage</b>:Lorem ipsum, or lipsum as it is sometimes known, is dummy text used</p>
                        <p><b>Estimated yield</b>:90,00bags</p>
                    </div>
                    <div className="card mb-2 ">
                      <div className="smallcard">
                        <p>Plant Seed</p>
                        <span>Due 1st jan</span><br></br>
                        <input type="radio" id="other" name="complte" value="other"/>
                        <label for="comp">Mark as complete</label>
                      </div>
                    </div>
                        </Card.Text>                 
                    </Card.Body>
                </Card>
                <Card style={{ width: '14rem' }}>   
                    <Card.Body>
                        <Card.Title>
                        <div class="headcard2">
                          <h4>Field 2</h4>
                          <h4>Gross Michel Banana</h4>
                        </div>
                        </Card.Title>                
                        <Card.Text>                  
                        <div class="cadbody">
                        <p><b>Size</b>: 1.5acres</p>
                        <p> <b>Current stage</b>:Lorem ipsum, or lipsum as it is sometimes known, is dummy text used</p>
                        <p><b>Estimated yield</b>:80,00bags</p>
                    </div>
                    <div className="card mb-2 ">
                      <div className="smallcard">
                        <p>Plant Seed</p>
                        <span>Due 1st jan</span><br></br>
                        <input type="radio" id="other" name="complte" value="other"/>
                        <label for="comp">Mark as complete</label>
                      </div>
                    </div>
                        </Card.Text>                 
                    </Card.Body>
                </Card>
                <Card style={{ width: '14rem' }}>   
                    <Card.Body>
                        <Card.Title>
                        <div class="headcard3">
                            <h4>Field 3</h4>
                            <h4>KAT/B-9 Bean</h4>
                            </div>
                        </Card.Title>                
                        <Card.Text>                  
                        <div class="cadbody">
                              <p><b>Size</b>: 1.5acres</p>
                              <p> <b>Current stage</b>:Lorem ipsum, or lipsum as it is sometimes known, is dummy text used</p>
                              <p><b>Estimated yield</b>:80,00bags</p>
                          </div>
                          <div className="card mb-2 ">
                      <div className="smallcard">
                        <p>Plant Seed</p>
                        <span>Due 1st jan</span><br></br>
                        <input type="radio" id="other" name="complte" value="other"/>
                        <label for="comp">Mark as complete</label>
                      </div>
                    </div>
                        </Card.Text>                 
                    </Card.Body>
                </Card>
            </div>
            <div>
            <p>Farm perfomance</p>
        <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
        />
      </div>
    </div>
        
</div>

<div id='right' className={rightOpen} >
    <h5>Calender</h5>
    
    <form className="form-inline">
    <input class="form-control form-control-sm ml-3 w-75" type="text" placeholder="Search..." aria-label="Search"/>
    <i class="far fa-search"></i>
    </form><br></br>
    <div className="card">
    <div className="text">
        <p1>Nursery Sowing</p1>
        <p>1st December 2020 (1 month away)</p>
    </div>
    <div className="text">
        <p1>120g of seed per acre</p1>
        <p>1st january 2020 (2 month away)</p>
    </div>
    <div className="text">
        <p1>Control of Damping off Diseases</p1>
        <p>1st December 2020 (1 month away)</p>
    </div>
</div>
<div className="location">
    <b>Farm Details</b>
    <b>Size:</b><p>1 acre</p>
    <b>Date created:</b><p>1/11/2020</p>
    <button type="button" class="btn btn-outline-success">Edit Nanaimo farms</button>
</div>
</div>
</div>     
          </div>
        )
    }
}

export default Home
