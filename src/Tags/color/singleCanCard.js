import React, { useState } from 'react';
import {Col,Button,Card} from 'react-bootstrap'
import './style.css';

function SingleCanCard(props){
    let [counter, setCount] = useState(0);

    function add() {
      setCount(counter + 1);
    }
    function remove() {
      setCount(counter - 1);
    }
    
    return (
                <div>
                <Col xs={3}> 
                  <Card border="light" style={{ width: '18rem' }}>
                    <Card.Header>{props.cansize.name}</Card.Header>
                    <Card.Body>
                      {props.cansize.price}₪
                      <Card.Text>
                      <div>
                      <Button variant="secondary" onClick={add} className="quanSelectors">1+</Button>
                      <Button variant="secondary" disabled className="quanSelectors">{counter}</Button>
                      <Button variant="secondary" onClick={remove} className="quanSelectors">1-</Button>
                      </div>
                      <div><Button variant="outline-secondary" className="quanSelectors">הוסף לעגלה</Button></div>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                 </Col>
                </div>
    )
}
export default SingleCanCard;