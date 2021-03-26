import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Card, Container, Col, Row} from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import "./style.css";


function Blog(props) {
  let [blogArrayState, updateBlog] = useState([]);
  useEffect(()=>{
      const getData = async()=> {
              const res = await axios('http://localhost:3001/blog');
              console.log(res.data);
              updateBlog(res.data);
          }
      getData();
  },[])

    const url = 'http://localhost:3001/images/'
    const blogsHtml = blogArrayState.map((blog, index) => {
      return (
        <div>
          <Row>
            <Col xs={8}>
              <Card
                border="secondary"
                style={{width:'15rem', position:'relative', display:'inline-block'}}>
                <Card.Body>
                <LinkContainer to={"/singleBlog"}>
                <Card.Img onClick={()=>props.functionId(blog.id)} id="blogImg" variant="top" src={`${url}${blog.pic}`}/>
                </LinkContainer>
                  <Card.Title>{blog.headline}</Card.Title>
                </Card.Body>
                <Card.Footer>
                  {blog.id}
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </div>
      );
    });

  return (
    <div id="blogDiv">
    <Container>
      <p>
        <h1 id="allBlogsH1">טיפים והשראה</h1>
      </p>
      <p>
        <h3>לחדש רהיטים, ליצור פינות קסומות וייחודיות בבית או להכניס שקט או שמחה למרחב – יש לנו המון רעיונות בשבילכם, והמון טיפים מצוינים. הכינו את המברשות!</h3>
      </p>
      <Row>
      
        <Col className="flex">
          {blogsHtml}
        </Col>
        
      </Row>
    </Container>
    </div>
  );
}
export default Blog;