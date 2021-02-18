import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import ImgSrc from './174855.svg';
import './style.css';



function Footer() {
    return (
        <footer>
        <Navbar bg="light" variant="light" className="footer" style={{justifyContent: "flex-end"}}>
            <div style={{textAlign: "center", width: "50%"}}></div>
            <div style={{ display: "flex"}}>
                <Nav.Link href="#" style={{ fontSize: "30px" }} target="_blank">
                    <FontAwesomeIcon style={{ color: "blue" }} icon={faFacebook} />
                </Nav.Link>
                <Nav.Link href="#" id="instaLogo" target="_blank">
                    <img 
                        alt={"logo"}
                        src={ImgSrc}
                        width={"30"}
                        height={"30"}
                        className={"d-inline-block align-top"}
                    />
                </Nav.Link>
            </div>
        </Navbar>
    </footer>
    )
}


export default Footer;