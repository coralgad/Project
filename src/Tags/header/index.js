import React from 'react';
import {Navbar,Nav,Form,FormControl,NavDropdown,Button} from 'react-bootstrap';
import ImgSrc from './logo.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './style.css';

function Header(){
    return <>
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="/homePage"> <img
                alt={"logo"}
                src={ImgSrc}
                width={"200"}
                height={"85"}
                className={"d-inline-block align-top"}
            /></Navbar.Brand>
        <Nav>
      <Nav.Link href="/about" >קצת עלינו</Nav.Link>
        <Nav.Link href="/color" >צבע בהתאמה אישית</Nav.Link>
        <Nav.Link href="/store">מוצרים נלווים</Nav.Link>
        <Nav.Link href="/blog"> טיפים והשראה</Nav.Link>
      <Form id="formID" inline className="mr-auto" dir="ltr" >
      <Nav.Link href="/cart" >
         <FontAwesomeIcon style={{ color: "black" }} icon={faShoppingCart} />
      </Nav.Link>
      <NavDropdown title="קטגוריות" id="collasible-nav-dropdown">
      <NavDropdown.Item href="/signin">כניסה</NavDropdown.Item>
        <NavDropdown.Item href="/personalArea">אזור אישי</NavDropdown.Item>
        <NavDropdown.Item href="/callUs">צור קשר</NavDropdown.Item>
      </NavDropdown>
        <Button variant="light" id="searchBtn" >חפש</Button>{' '}
        <FormControl type="text" placeholder="חיפוש" className="mr-sm-2" dir="rtl"/>
      </Form>
      </Nav>
    </Navbar>
  </>;
}
export default Header;