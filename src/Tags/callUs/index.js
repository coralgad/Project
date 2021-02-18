import React from 'react';
import {Card,Row,Col,Form,Button} from 'react-bootstrap';
import './style.css';

function CallUs(){
    return <div id="callUsDiv">
        <Row>
            <Col xs={3}></Col>

            <Col xs={6}>  
        <Card>
        <Card.Header as="h5">צור קשר</Card.Header>
        <Card.Body>
        <Form>
        <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>שם פרטי-</Form.Label>
            <Form.Control type="text" />
            </Form.Group>
        </Form.Row>

        <Form.Row>
        <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>שם משפחה-</Form.Label>
            <Form.Control type="text"/>
            </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridAddress1">
            <Form.Label>מספר טלפון-</Form.Label>
            <Form.Control type="phone" placeholder="05X-XXXXXXX" />
              <Form.Label></Form.Label> 
        </Form.Group>

        <Form.Group controlId="formGridAddress2">
            <Form.Label>כתובת-</Form.Label>
            <Form.Control type="text" />
        </Form.Group>

        <Form.Row>
            <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>עיר-</Form.Label>
            <Form.Control  type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
            <Form.Label>מדינה-</Form.Label>
            <Form.Control  type="text" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>מיקוד-</Form.Label>
            <Form.Control type="number" />
            </Form.Group>

        </Form.Row>

        <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>במה אפשר לעזור?</Form.Label>
              <Form.Control as="textarea" rows={3} />
            </Form.Group>

        <Button variant="primary" type="submit">
            שלח
        </Button>
        </Form>
        </Card.Body>
        </Card>
        </Col>
        <Col xs={3}></Col>
        </Row>   
        </div>
}
export default CallUs;