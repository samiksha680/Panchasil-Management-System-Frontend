import React, {Component} from 'react'; 
import '../../App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
class AdminNav extends Component{


render(){

return(
        <><div className="container">
        <Navbar  className="school" bg="light dark">
        <Navbar.Brand href="/admin"><label className="school" >Panchashil School</label></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                            <NavDropdown className="admin" title="News"  id="collasible-nav-dropdown">
                                <NavDropdown.Item href="/news/add"><i className="fa fa-plus" aria-hidden="true"></i><label className="admin">Add News</label>  </NavDropdown.Item>
                                <NavDropdown.Item href="/news/view"><i className="fa fa-book" aria-hidden="true"></i>  <label className="admin">View News</label></NavDropdown.Item>
                            </NavDropdown>
                            <NavDropdown className="admin" title="Notice"  id="collasible-nav-dropdown1">
                                <NavDropdown.Item href="/notice/add"><i className="fa fa-plus" aria-hidden="true"></i><label className="admin">Add Notice</label>  </NavDropdown.Item>
                                <NavDropdown.Item href="/notice/view"><i className="fa fa-book" aria-hidden="true"></i>  <label className="admin">View Notice</label></NavDropdown.Item>
                            </NavDropdown>
                            </Nav>
                            <Nav>
                            <Nav.Link href="#deets"><i className="fa fa-user" aria-hidden="true"></i> <label className="admin">Profile</label> </Nav.Link>
                            <Nav.Link eventKey={2} href="#memes">
                            <button className="btn btn-primary" onClick={this.handleLogout}><i  className="fa fa-sign-out" aria-hidden="true"></i>Logout</button>
                            </Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
    </Navbar>
    </div>
    </>
)}
    

}
export default AdminNav;