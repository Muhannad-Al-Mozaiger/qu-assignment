import { Button, Container, Navbar } from 'react-bootstrap';
// import './navBar.css';
import Nav from 'react-bootstrap/Nav';
const NavBar = ({ saveFile, closeExam, examName }) => {
    return (
        // <nav>
        //    <a href="#" onClick={saveFile}>Save File</a>
        //    <h3>{examName}</h3>
        //    <a href="#" onClick={closeExam}>Close Exam</a>
        // </nav>
        <Navbar expand="lg" className="bg-body-tertiary" bg='dark' fixed='top'>
        <Container>
          <Navbar.Brand href="#home">{examName}</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto gap-2">
              <Button variant="success" onClick={saveFile}>حفظ التعديلات</Button>
              <Button variant="secondary" onClick={closeExam}>رجوع</Button>
              {/* <Nav.Link onClick={saveFile}>Save File</Nav.Link> */}
              {/* <Nav.Link onClick={closeExam}>Close Exam</Nav.Link> */}
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>  
    );
    
};

export default NavBar;