import React, {useState} from 'react';
import {Navbar,Nav,Form,FormControl,NavDropdown,Button} from 'react-bootstrap';
import ImgSrc from './logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import {LinkContainer} from 'react-router-bootstrap';
import {Link,BrowserRouter as Router, useHistory } from 'react-router-dom';


function Header(props){
    let [search, updatesearch] = useState([]);
    let history = useHistory();

    const navigateToCart = () => {
    history.push('/cart');
      history.go('/cart')
    }
    return <>
    <Navbar bg="light" variant="light">
    <Navbar.Brand href="/homePage"> <img
                alt={"logo"}
                src={ImgSrc}
                width={"250"}
                height={"85"}
                className={"d-inline-block align-top"}
            /></Navbar.Brand>
        <Nav>
      <Nav.Link href="/about" >קצת עלינו</Nav.Link>
        <Nav.Link href="/color" >צבע בהתאמה אישית</Nav.Link>
        <Nav.Link href="/store">מוצרים נלווים</Nav.Link>
        <Nav.Link href="/blog"> טיפים והשראה</Nav.Link>
      <Form id="formID" inline className="mr-auto" dir="ltr" >
      <Router>
      <LinkContainer to="/cart">
      <Link onClick={navigateToCart} to="/cart"> 
         <FontAwesomeIcon style={{ color: "black" }} icon={faShoppingCart} />
      </Link>
      </LinkContainer>
      </Router>
      <NavDropdown title="עוד" id="collasible-nav-dropdown">
      <NavDropdown.Item href="/signin">כניסה</NavDropdown.Item>
        <NavDropdown.Item href="/personalArea">אזור אישי</NavDropdown.Item>
        <NavDropdown.Item href="/callUs">צור קשר</NavDropdown.Item>
      </NavDropdown>
        <Button variant="light" id="searchBtn" onClick={()=>{props.searchFunction(search)}}>
          חפש</Button>
        <FormControl type="text" placeholder="חיפוש" className="mr-sm-2" dir="rtl" onChange={(e)=>{updatesearch(e.target.value)}} />
      </Form>
      </Nav>
    </Navbar>
  </>;
}
export default Header;