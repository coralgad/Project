import React from 'react';
import {Row,Button,Jumbotron,Col,Card,Container} from 'react-bootstrap';
import './style.css';
import pic from './EEH7YG.jpg';
import Gallery from '../gallery/index';






function HomePage(){
    return <div id="homePageDiv">
      <Container>
        <Row>
        <Jumbotron id="jumbo">
        <h1>ברוכים הבאים לטמבוריה!</h1>
        <p>
        באתר זה תוכלו לקחת חלק גדול בעיצוב הבית שלכם! מבחירת הצבע בהתאמה אישית ועד רכישה של מוצרים שיהפכו את חווית הצביעה לכיפית והמספקת ביותר
        </p>
        <p>
          <p>
            גלישה מהנה!!!
          </p>
        </p>
      </Jumbotron> 
      </Row>

      <Row>

      <Col xs={6}>
        <Gallery />
        </Col> 

        {/* <Col xs={3}>
        <Card style={{ width:'18rem'}}>
          <Card.Body>
            <Card.Title>היחודיות שלנו
            </Card.Title>
            <Card.Text>
            בטבוריית הבוטיק הלקוח בוחר בעצמו את ההצבע מתוך מגוון אפשרויות עצומות,בוחר את גודל פחית הצבע הרצויה ואת המוצרים הנלווים.
            </Card.Text>
          </Card.Body>
        </Card>
        </Col> */}

       <Col xs={3}>
        <Card style={{ width: '18rem' }}>
        <Card.Img
                alt={"logo"}
                src={pic}
                width={"200"}
                height={"150"}
                className={"d-inline-block align-top"}
            />
        <Card.Body id="cardBody">
          <Card.Title> הסטודיו שלנו</Card.Title>
          <Card.Text>
           בסטודיו שלנו נמצאים חומרי הגלם האיכותיים ביותר ואנשי המקצוע הטובים ביותר המחכים לתת לכם את השירות הכי מקצועי שיש
          </Card.Text>
          <Card.Text>
            
          </Card.Text>
          <Button variant="outline-dark" href="/callUs">ליצירת קשר</Button>
        </Card.Body>
        </Card>
        </Col>
      </Row>
      </Container>
      </div>
      

}
export default HomePage;




