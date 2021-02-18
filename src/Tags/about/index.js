import React from 'react';
import {Container,Row,Col,Card,Jumbotron} from 'react-bootstrap';
import './style.css';

 
function About(){
    return(
        <div id="aboutDiv">
           <Container id="aboutContainer">
               <Row>
                   <Col  xs={9}>
                   <Jumbotron fluid>
                    <Container>
                        <h1>אודותינו</h1>
                        <p>
                        האתר נוצר בהשראה חברתי לקורס מאיה,הוגת הרעיון על טמבוריית בוטיק אשר תיתן יחס פרטני ומיוחד לכל לקוח ותתאים לו את הצבע הרצוי.
                        </p>
                        <p>
                        באתרינו תוכלו למצוא מגוון רחב של מוצרים.
                        </p>
                        <p>
                        אנו שמים דגש על איכות המוצרים,כל מוצר באתר הינו ברמת האיכות נטובה ביותר
                        </p>
                        <p>
                        האתר הוקם על מנת לתת לכם חווית קניה נעימה ומהנה, קלה ופשוטה בכל שעות היממה.
                        כמובן שאני כאן לשירותכם תמיד!
                        </p>
                        <p>קורל-<a href="tel:0528216708">0528216708</a></p>
                       
                    </Container>
                    </Jumbotron>
                   </Col>

                   <Col  xs={3}>
                   <Card className="text-center">
                    <Card.Header>לשירותכם תמיד</Card.Header>
                    <Card.Body>
                        <Card.Title></Card.Title>
                        <Card.Text>
                        מוקד מכירות-
                        <a href="tel:0526855478">0526855478</a>
                        </Card.Text>
                        <Card.Text>
                        מוקד תמיכה -
                        <a href="tel:0526855478">0505555478</a>
                        </Card.Text>
                        <Card.Text>
                        מייל-
                        <a href="mailto:coralgad@gmail.com">coralgad@gmail.com</a>
                        </Card.Text>
                    </Card.Body>
                    </Card>
                   </Col>
               </Row>
            </Container> 
        </div>
)



}
export default About;

