import React from 'react';
import './style.css';
import {Container,Row,Col,Form,Button} from 'react-bootstrap';
import { useState,useEffect } from 'react';
import axios from 'axios';




function ProductPage(props){
    let [product, setProduct] = useState("");

    useEffect(()=>{
        const getData = async()=> {
                const res = await axios(`http://localhost:3001/products/${props.products}`);
                console.log(res.data);
                setProduct(res.data[0]);
            }
        getData();
    },[])

    const url = 'http://localhost:3001/images/'
    return <div><Container id="productPage">
    <Row id="SingleProduct">
        <h5>{product.name} </h5>
    </Row>
    <Row>
      <Col><img
                alt={"logo"}
                src={`${url}${product.pic}`}
                width= "200px"
                style={{marginBottom: "10px"}}

            />
            
            <img
                alt={"logo"}
                src={`${url}${product.pic1}`}
                width= "200px"
                style={{marginBottom: "10px"}}

            />
            <img
                alt={"logo"}
                src={`${url}${product.pic2}`}
                width= "200px"
                style={{marginBottom: "10px"}}

            /></Col>
            
      <Col xs={6}>
      <img
                alt={"logo"}
                src={`${url}${product.pic}`}
                width= "450px"
            /> </Col>
      <Col id="details">
      <p id="prodName">{product.name}</p>
      <p id="prodName">{product.price}₪</p>
      <p id="prodDescription">{product.description}</p>
    <div>
    <Form id="form">
            <Form.Group controlId="exampleForm.SelectCustom">
                <Form.Label>בחירת כמות</Form.Label>
                <Form.Control id="SelectBtn" as="select" custom>
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
                <div id="BtnDiv" >
                <Button id="AddToCart" variant="outline-dark" onClick={()=>props.functionAddProduct(product)}>הוסף לעגלה</Button>
                </div>
            </Form.Group>
            </Form>
            </div>
            </Col>
            </Row>
        </Container>
        </div>;
        }

export default ProductPage;
