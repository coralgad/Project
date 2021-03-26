import React from 'react';
import './style.css';
import {Container,Row} from 'react-bootstrap';
import { useState,useEffect } from 'react';
import axios from 'axios';




function BlogPage(props){
    let [blog, setBlog] = useState("");

    useEffect(()=>{
        const getData = async()=> {
                const res = await axios(`http://localhost:3001/blog/${props.blog}`);
                console.log(res.data);
                setBlog(res.data[0]);
            }
        getData();
    },[])

    const url = 'http://localhost:3001/images/'
    return <div> 
        <Container>
    <Row >
        <h2>{blog.headline} </h2> 
    </Row>  
    <Row>
        <h5>{blog.preview}</h5>
        </Row>
    <Row>
        <h5>{blog.content}</h5>
        </Row>   

    <Row> <img
                alt={"logo"}
                src={`${url}${blog.img}`}
                width= "350px"
            /></Row>
        </Container>
        </div>;
        }

export default BlogPage;