import { React, useState } from "react";
import { Card, Container, Col, Row} from "react-bootstrap";
import "./style.css";


function Blog(props) {
  async function getPosts() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/");
    const data = await response.json();
    return data;
  }

  const [blogsArray, setBlog] = useState("הפוסטים בטעינה...");

  getPosts().then((data) => {
    console.log(data);
    const blogsHtml = data.map((blog, index) => {
      return (
        <div key={index}>
          <Row>
            <Col xs={8}>
              <Card
                border="secondary"
                style={{width:'15rem', position:'relative', display:'inline-block'}}>
                <Card.Body>
                  <Card.Title>{blog.title}</Card.Title>
                  <Card.Text>{blog.body}</Card.Text>
                </Card.Body>
                <Card.Footer>
                  {blog.userId}
                  {blog.id}
                </Card.Footer>
              </Card>
            </Col>
          </Row>
        </div>
      );
    });
    // console.log(blogsHtml);
    setBlog(blogsHtml);
  });

  return (
    <Container>
      <p>
        <h1 id="allBlogsH1">טיפים והשראה</h1>
      </p>
      <p>
        <h3>לחדש רהיטים, ליצור פינות קסומות וייחודיות בבית או להכניס שקט או שמחה למרחב – יש לנו המון רעיונות בשבילכם, והמון טיפים מצוינים. הכינו את המברשות!</h3>
      </p>
      <Row>
      
        <Col className="flex">
          {blogsArray}
        </Col>
        
      </Row>
      {/* <Row id="rowSortBlog">
        <Button id="nextBlogButt">הבא</Button>
        <Button id="prevBlogButt">הקודם</Button>
      </Row> */}
    </Container>
  );
}
export default Blog;