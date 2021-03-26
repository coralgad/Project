import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {Card,CardDeck,Button,Form,Row,Col} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import './style.css';

function AllProducts(props) {
    let [productsArrayState, updateproducts] = useState([]);
    let [currentFilter,setCurrenrFilter] = useState("initial");

    // let [products,setProducts]=useState([]);
        console.log(props.products);
        useEffect(()=>{if(!props.products){
        const getProd = async()=> {
        const prod = await axios('http://localhost:3001/products');
        updateproducts(prod.data);}
        getProd();
        }
            else{
                const getProdu = async()=> {
                    const prod = await axios('http://localhost:3001/products');
                    updateproducts([...prod.data].filter(search));
                    console.log(prod.data.filter(search));
                }
                    getProdu();
                   
                    }
            }
         ,[]   
       )



    function search(item){
        return(
            item.name.includes(props.products)||
            item.description.includes(props.products)
        )
    }


    useEffect(()=>{
        const getData = async()=> {
                const res = await axios('http://localhost:3001/products');
                console.log(res.data);
                updateproducts(res.data);
            }
        getData();
    },[])


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
        console.log(SelectedItem.target.value);
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
    
    const url = 'http://localhost:3001/images/'
    const productItem = productsArrayState.map((product,index)=>
    <div id="card" key={index}>
       <Row id="cardRow">
        <Col id="cardCol">
       <Card style={{width:'15rem', position:'relative', display:'inline-block'}}>
       <LinkContainer to="/product">
       <Card.Img onClick={()=>props.functionId(product.id)} id="cardImg" variant="top" src={`${url}${product.pic}`}/>
       </LinkContainer>
       <Card.Body id="cardBodyProduct">
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
       <Button variant="dark" onClick={()=>props.functionAddProduct(product)}>הוסף לעגלה</Button>
       </Card.Body>
       </Card>
       </Col>
       </Row>
       </div>
    );

    return(
        <>
        <div id="cardDiv">
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
