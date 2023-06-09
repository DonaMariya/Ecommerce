import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Button } from 'react-bootstrap';


function BasicExample({onAdd}) {
  // const onClick = ()=>{
  //   console.log("Add Clicked");
  // }
  return (
    
    <Navbar bg="dark" variant='dark'expand="lg">
      <Container>
        <Navbar.Brand href="#home"  >BOOKLELO</Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" >products</Nav.Link>
            
            <NavDropdown title="More" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1"><Button  style={{background: 'purple', color: 'black', cursor:'pointer'}} onClick={onAdd}>Add Product</Button></NavDropdown.Item>
      
              <NavDropdown.Item href="#action/3.3"><Button style={{background: 'purple', color: 'black', cursor:'pointer'}}>View Cart</Button></NavDropdown.Item>
              
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
    
  );
}

export default BasicExample;