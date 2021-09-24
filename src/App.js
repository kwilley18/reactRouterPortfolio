import React from "react"; 
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Home from './components/pages/Home'; 
import Contact from './components/pages/Contact'
import Header from './components/Header'; 
import Project from './components/pages/Project'; 
import ProjectGallery from './components/pages/ProjectGallery'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function App() {
  //const element = <FontAwesomeIcon icon = {fa-github} /> 

  return (
/*<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#link">Link</Nav.Link>
        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>*/ 
<body>

    <Router>
      <Header />

        <Route exact path="/" component={Home} />
        <Route exact path="/project" component={Project}/>
        <Route exact path="/projectgallery" component={ProjectGallery} />
        <Route exact path="/contact" component={Contact} />
    </Router>
    </body>


  );
}

export default App;
