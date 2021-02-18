import React from 'react';
import {Card,CardDeck,Button,Form,Row,Col} from 'react-bootstrap';
import picture from './1.png';
import './style.css';

function AllProducts() {
    const products =[
            {   
            name:"מברשת צביעה",
            description:"מברשת צביעה לקיר דגם נועם",
            price:20,
            picture:picture,
            },

            {
                name:"גלגלת צביעה",
                description:"גלגלת צביעה לקיר ",
                price:50,
                picture:picture,
            },

            {
                name:"גלגלת צביעה",
                description:"גלגלת צביעה לקיר ",
                price:50,
                picture:picture,
            },

            {
                name:"גלגלת צביעה",
                description:"גלגלת צביעה לקיר ",
                price:50,
                picture:picture,
            },
            {
                name:"גלגלת צביעה",
                description:"גלגלת צביעה לקיר ",
                price:50,
                picture:picture,
            }
    ];


    

    const productItem = products.map((product,index)=>
    <div id="card" key={index}>
       <Row>
        <Col id="cardCol">
       <Card style={{width:'15rem', position:'relative', display:'inline-block'}}>
       <Card.Img variant="top" src={product.picture}/>
       <Card.Body>
       <Card.Title>{product.name}</Card.Title> 
       <Card.Text>{product.price}₪</Card.Text> 
       <Form.Label>בחירת כמות:</Form.Label>
       <Form.Control id="SBtn" as="select" custom>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                </Form.Control>
       <Button variant="dark">הוסף לעגלה</Button>
       </Card.Body>
       </Card>
       </Col>
       </Row>
       </div>
    );
   
    return(
        /*כאן יופיע הסלקטטטטטטטט*/
       <CardDeck>
           {productItem}
       </CardDeck>
   )
}
export default AllProducts;



