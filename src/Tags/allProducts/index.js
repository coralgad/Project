import React, { useState } from 'react';
import {Card,CardDeck,Button,Form,Row,Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
// import picture from './1.png';
import './style.css';

function AllProducts(props) {
    let [productsArrayState, updateproducts] = useState(props.products);
    let [currentFilter,setCurrenrFilter] = useState("initial");

    function priceAsc(){
        const productsByPriceAsc = productsArrayState.sort((a,b)=>a.price -b.price);
        updateproducts([...productsByPriceAsc]);
    }

    function priceDesc(){
        const productsByPriceDesc = productsArrayState.sort((a,b)=>b.price -a.price);
        updateproducts([...productsByPriceDesc]);
    }
    const handleChanges = (SelectedItem)=>{
        setCurrenrFilter(SelectedItem.target.value);
        // eslint-disable-next-line default-case
        switch (SelectedItem.target.value) {
            case ("price low to high"):
                priceAsc();
                break;
            
            case ("price high to low"):
                priceDesc();
                break;
    }
}


    const productItem = productsArrayState.map((product,index)=>
    <div id="card" key={index}>
       <Row>
        <Col id="cardCol">
       <Card style={{width:'15rem', position:'relative', display:'inline-block'}}>
       <LinkContainer to={"/product"}>
       <Card.Img variant="top" src={product.picture}/>
       </LinkContainer>
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
        <>
        <div>
            <Form.Control value={currentFilter} onChange={handleChanges} as="select" custom>
            <option value="initial">מיין לפי</option>
            <option value="price low to high">מחיר מהנמוך לגבוה</option>
            <option value="price high to low">מחיר מהגבוה לנמוך</option>
            </Form.Control>
        </div>
       <CardDeck>
           {productItem}
       </CardDeck>
       </>
   )
}
export default AllProducts;
