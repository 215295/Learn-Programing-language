import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, useLocation, useNavigate } from 'react-router-dom';


import ButtonGroup from 'react-bootstrap/ButtonGroup';
import { AuthContext } from '../../router/AuthProvider/AuthProvider';
import toast from 'react-hot-toast';


const Login = () => {

       const {handlarSogin,googleSigin,gitHubSigin} = useContext(AuthContext)
        
              const navigate = useNavigate();
              const location = useLocation();
              const from = location.state?.from?.pathname || "/";

          const haddlarSummit = (event)=>{
    
            event.preventDefault()
            const form = event.target;
            const email = form.email.value;
            const password = form.password.value;
             
            handlarSogin(email,password)
            .then((result)=>{
                const user = result.user;
                console.log(user)
                navigate(from, { replace: true });
            })

             .catch((error)=>{

                   console.error(error)
                   toast.error(error.message)
             })

          }


         const handlarGoogle = ()=>{

          googleSigin()
          .then((result)=>{
            const user = result.user;
            console.log(user)
          })
          .catch((error)=>{

              console.error(error)
          })
            
         }


         const handlarGithub = ()=>{
    
          gitHubSigin()
          .then((result)=>{
            const user = result.user;
            console.log(user)
          })
          .catch((error)=>{

              console.error(error)
          })

         }

    return (
        <Container fluid className='mt-5 text-justify ml-5 rounded'> 
        <Row >

          <Col lg="8" sm="12 "  className='ms-5 w-50 rounded' style={{height:'500px', backgroundColor:'#ffd699 '}} > 
          
          <Form  onSubmit={haddlarSummit} className='w-50 ms-5 mt-5'>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
          
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" />
        </Form.Group>
        
        
        <p>  <Link  to='/register' className='text-direction-none'> Create a New Account </Link> </p>
          
        <Button variant="primary" type="submit">
        Login
        </Button>
             
             <br/>
        <ButtonGroup className='mt-3' vertical>
                <Button onClick={handlarGoogle }  className='mb-2' variant="outline-primary">   Google with login </Button>
                <Button onClick={ handlarGithub} variant="outline-dark">  Github with login</Button>
            </ButtonGroup>
      </Form>
      
      </Col>
           
           <Col lg="4" sm="12 mt-3">

                <img className='w-50 h-75 ms-5 rounded'  src='https://t4.ftcdn.net/jpg/01/19/11/55/360_F_119115529_mEnw3lGpLdlDkfLgRcVSbFRuVl6sMDty.jpg' alt=''/> 
          </Col>
          
        </Row>
     
       
        </Container>
    );
};

export default Login;