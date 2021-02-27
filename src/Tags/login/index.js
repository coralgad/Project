import React from 'react';
import {Card,Row,Col,Form,Button} from 'react-bootstrap';
import './style.css';

function Login(){
    return <div id="loginDiv">
        <Row>
            <Col xs={3}></Col>

            <Col xs={6}>  
        <Card>
        <Card.Header as="h5">כניסה לחשבון קיים</Card.Header>
        <Card.Body>
        <Form>
        <Form.Row>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>דואר אלקטרוני</Form.Label>
            <Form.Control type="email" placeholder="הקלד מייל" />
            <Form.Text className="text-muted">
            לעולם לא נשתף את הדוא"ל שלך עם אף אחד אחר.
            </Form.Text>
        </Form.Group>
        </Form.Row>

        <Form.Row>
            
        </Form.Row>
       
        <Form.Row>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>סיסמה</Form.Label>
            <Form.Control type="password" placeholder="הקלד סיסמה" />
        </Form.Group>
        </Form.Row>

        <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="זכור אותי" />
        </Form.Group>
    
        <Button variant="primary" type="submit">
            כניסה
        </Button>
        <p className="forgot-password text-right">
         <a href="#">שכחת סיסמה?</a>
         <span className="forgot-password text-left">
             <a href="#">הרשמה</a></span>
        </p>
        
        </Form>
        </Card.Body>
        </Card>
        </Col>
        <Col xs={3}></Col>
        </Row>   
        </div>
}
export default Login;