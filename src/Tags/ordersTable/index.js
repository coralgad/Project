import { React, useState} from "react";
import './style.css';
import {Table, Col} from "react-bootstrap";
 
function OrdersTable(props){
    const [invoices] = useState(props.order);
    return (
      <div>
        <Col md={{ span: 6, offset: 3 }}>
        <Table striped bordered hover size>
          <thead >
            <tr>
              <th>מספר הזמנה</th>
              <th>מספר מוצרים</th>
              <th>מוצרים</th>
              <th>כמות</th>
              <th>מחיר</th>
              <th>מספר מזמין</th>
              <th>תאריך ההזמנה</th>
            </tr>
          </thead>
          {invoices.map((element, index) => {
            return (
              <tr>
                <td> {element.orderId}</td>
                <td> {element.ProductsID}</td>
                <td> {element.productsNames}</td>
                <td> {element.numOfProducts}</td>
                <td> {element.price}</td>
                <td> {element.customerId}</td>
                <td> {element.orderDate.toUTCString()}</td>

              </tr>
            );
          })}
        </Table>
        </Col>
        </div>
 )}
export default OrdersTable;