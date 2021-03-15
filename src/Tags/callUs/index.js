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



    return <div id="callUsDiv">
        <Row>
            <Col xs={3}></Col>

            <Col xs={6}>  
        <Card id="callUsCard">
        <Card.Header as="h5">צור קשר</Card.Header>
        <Card.Body>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>שם פרטי-</Form.Label>
            <Form.Control type="text" name="firstName" ref={register({ required: true })} />
            {errors.firstName && <span>This field is required</span>}
            </Form.Group>
        </Form.Row>

        <Form.Row>
        <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>שם משפחה-</Form.Label>
            <Form.Control type="text" name="lastName" ref={register({ required: true })}/>
            {errors.lastName && <span>This field is required</span>}
            </Form.Group>
        </Form.Row>

        <Form.Group controlId="formGridphon">
            <Form.Label>מספר טלפון-</Form.Label>
            <Form.Control type="phone" placeholder="05X-XXXXXXX" name="phone" ref={register({ required: true })}/>
            {errors.phone && <span>This field is required</span>}
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
            <Form.Label>דואר אלקטרוני</Form.Label>
            <Form.Control type="email" placeholder="הקלד מייל" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })}/>
            {errors.email && <span>שדה זה הוא חובה</span>}
            <Form.Text className="text-muted">
            לעולם לא נשתף את הדוא"ל שלך עם אף אחד אחר.
            </Form.Text>
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>במה אפשר לעזור?</Form.Label>
              <Form.Control as="textarea" rows={3} name="help" ref={register({ required: true })} />
              {errors.help && <span>This field is required</span>}
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