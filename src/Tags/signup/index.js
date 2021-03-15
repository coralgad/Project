import React from 'react';
import {Row,Col,Card,Form,Button} from 'react-bootstrap';
import './style.css';
import { useForm } from "react-hook-form";


function SignUp(){
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
    console.log(watch("example"));

    return <div id="signUp" >
               <Row>
            <Col xs={3}></Col>

            <Col xs={6}>  
        <Card>
        <Card.Header as="h5">יצירת משתמש חדש</Card.Header>
        <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
        
        <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>שם פרטי-</Form.Label>
            <Form.Control type="text" name="firstName" ref={register({ required: true })} />
            {errors.firstName && <span>שדה זה הוא חובה</span>}
            </Form.Group>
        </Form.Row>

        <Form.Row>
        <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>שם משפחה-</Form.Label>
            <Form.Control type="text" name="lastName" ref={register({ required: true })}/>
            {errors.lastName && <span>שדה זה הוא חובה</span>}
            </Form.Group>
        </Form.Row>  

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

        <Form.Row>
        <Form.Group controlId="formBasicPassword">
            <Form.Label>אימות סיסמה</Form.Label>
            <Form.Control type="password" name="password1" placeholder="הקלד סיסמה" ref={register({ required: true })}/>
            {errors.password1 && <span>שדה זה הוא חובה</span>}
        </Form.Group>
        </Form.Row>
    
        <Button variant="primary" type="submit">
            הרשמה
        </Button>        
        </Form>
        </Card.Body>
        </Card>
        </Col>
        <Col xs={3}></Col>
        </Row>  
        </div>
}
export default SignUp;