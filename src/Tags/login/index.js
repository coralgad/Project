import React from 'react';
import { useForm } from "react-hook-form";
import {Card,Row,Col,Form,Button} from 'react-bootstrap';
import './style.css';

function Login(){
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);
  console.log(watch("example"));

    return <div id="loginDiv">
        <Row>
            <Col xs={3}></Col>

            <Col xs={6}>  
        <Card>
        <Card.Header as="h5">כניסה לחשבון קיים</Card.Header>
        <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row>
        <Form.Group controlId="formBasicEmail">
            <Form.Label>דואר אלקטרוני</Form.Label>
            <Form.Control type="email" placeholder="הקלד מייל" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })}/>
            {errors.email && <span>שדה זה הוא חובה</span>}
            <Form.Text className="text-muted">
            לעולם לא נשתף את הדוא"ל שלך עם אף אחד אחר.
            </Form.Text>
        </Form.Group>
        </Form.Row>

        <Form.Row>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>סיסמה</Form.Label>
            <Form.Control type="password" name="password" placeholder="הקלד סיסמה" ref={register({ required: true })}/>
            {errors.password && <span>שדה זה הוא חובה</span>}
        </Form.Group>
        </Form.Row>

        <Form.Group controlId="formBasicCheckbox">
            <Form.Check id="checkbox" type="checkbox" label="זכור אותי" name="rememberMe" ref={register}/>
        </Form.Group>
    
        <Button variant="primary" type="submit">
            כניסה
        </Button>
        <br/>
        <p className="forgot-password text-right">
         <a href="#">שכחת סיסמה?</a>
         <span className="forgot-password text-left">
             <a href="/signup">הרשמה</a></span>
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