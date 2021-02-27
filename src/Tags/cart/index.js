import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import SingleCartCard from './singleCardCart.js';
import './style.css';

function Cart(props) {

    let [prods, updateProds] = useState(props.products);
    let initialPrice =0;
    for (let prod of prods){
        initialPrice+= parseInt(prod.price);
    }
    let [sum, updateSum] = useState(initialPrice);

    const RemoveItem = (id) =>{
        updateProds(prods.filter(product => product.id !== id));
        for (let prod of prods){
            if (prod.id === id){
                updateSum(initialPrice-prod.price);
            }
        }
    };
    
    return <div id="cartDiv">
        <Container style={{marginTop:"15px"}}>
            <Row>
                <h1>עגלת קניות</h1>
            </Row>
            <Row>
                <Col xs="4">
                    <div id="cartDetails">
                    <h1>סיכום הזמנה</h1>
                    <h4>מספר פריטים: {prods.length}</h4>    
                    <h4>הכמות הכוללת: {sum}₪</h4>  
                    <Button variant="outline-secondary" id="checkoutBtn" href="./checkout">המשך ברכישה</Button>
                    <div>
                    <p className="text-right">
                     <a href="/store">חזרה אל דף המוצרים</a></p>
                    </div>
                     <div>
                     <p className="text-right">
                     <a href="/color">חזרה אל דף בחירת צבע בהתאמה אישית</a></p>
                     </div>
                    </div>
                    </Col>

                    <Col xs="8" style={{width:"30px"}}>
                    {prods.map((element, index) => {
                        return <SingleCartCard product={element} key={index} index={index} onRemoveItem={RemoveItem} />
                    })}
                </Col>
            </Row>
        </Container>
    </div>
}


export default Cart;