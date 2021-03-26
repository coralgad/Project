import React from 'react';
import {Card,Row,Col,Form,Button} from 'react-bootstrap';
import './style.css';
import { useForm } from "react-hook-form";

function CallUs(){
    const { register, handleSubmit, watch, errors } = useForm();
    console.log(watch("example"));

    const onSubmit = (data, r) => {
        alert(`תודה על פנייתך ל ${data.email}`);
        const templateId = 'template_5g9rnht';
        const serviceID = 'service_Gmail';
        sendFeedback(serviceID, templateId, { from_name: data.name, message_html: data.comment, reply_to: data.email })
        r.target.reset();
    }

    const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs.send(
            serviceID, templateId,
            variables
        ).then(res => {
            console.log('אימייל נשלח בהצלחה')
        })
            .catch(err => console.error('הייתה טעות-שגיאה התרחשה:', err))
    }



   
    return (
        <div className="ContactForm">
            <div id="callUsDiv">
            <Row>
            <Col xs={3}></Col>
            <Col xs={6}>  
               <Card.Header as="h5">צור קשר</Card.Header>
        <Card.Body>
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Row>
            <Form.Label>שם מלא</Form.Label>
            <Form.Control type="text"
                    name="name" 
                    ref={
                        register({ 
                            required: "Please enter your name", 
                            maxLength: {
                                value: 20,
                                message: "Please enter a name with fewer than 20 characters"
                            } 
                        })
                    } 
                /><br />
                {errors.name && errors.name.message}<br />
                </Form.Row>



                <Form.Row>
                <Form.Label>דוא"ל לפנייה</Form.Label>
                <Form.Control type="text"
                    name="email"
                    placeholder="projectmailnegev@gmail.com"
                    ref={
                        register({
                            required: "Please enter an email",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        })
                    }
                /><br/>
                {errors.email && errors.email.message}<br />
                </Form.Row>

                <Form.Row>
                <Form.Label>במה אפשר לעזור?</Form.Label>
                <Form.Control type="text"
                    name="comment" 
                    as="textarea"
                    rows={4}
                    ref={
                        register({
                            required: true
                        })
                    } 
                /><br/>
                {errors.comment && "oops, you forgot your message!"}<br />
                </Form.Row>


                <Button variant="primary" type="submit">שליחה</Button>
            </Form>
            </Card.Body>
            </Col>
            <Col xs={3}></Col>
            </Row>
            </div>
        </div>
    );
}


export default CallUs;