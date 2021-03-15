import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Tags/header';
import Footer from './Tags/footer';
import AllProducts from './Tags/allProducts';
import ProductPage from './Tags/Product-Page';
import pic from './Tags/Product-Page/1.png';
import About from './Tags/about/index';
import HomePage from './Tags/homePage/index';
import {Route, BrowserRouter as Router } from 'react-router-dom';
import Blog from './Tags/blog/index';
import Color from './Tags/color/index';
import Cart from './Tags/cart/index';
import PersonalArea from './Tags/personalArea/index';
import Login from './Tags/login/index';
import SignUp from './Tags/signup/index.js';
import CallUs from './Tags/callUs/index.js';
import OrdersTable from './Tags/ordersTable/index.js';
import SingleCanCard from './Tags/color/singleCanCard.js';



function App() {

  const cansize=[
    {
      id:1,
      name:"בינוני"
    },
    {
      id:2,
      name:"גדול"
    },
    {
      id:3,
      name:"ענק"
    }
  ]

  const order =[
    {   
    orderId:1,
    numOfProducts:3,
    productsID:215,
    productsNames:["גלגלת צביעה","מברשת צביעה נועם","בלה בלה"],
    customerId:[250033214],
    orderDate:new Date(),
    price:100,
    },
    {   
      orderId:1,
      numOfProducts:1,
      productsID:515,
      productsNames:["גלגלת צביעה"],
      customerId:[33222145],
      orderDate:new Date(),
      price:100,
      }]  
    


const products =[
  { 
  id:1 ,
  name:"מברשת צביעה",
  description:"מברשת צביעה לקיר דגם נועם",
  price:20,
  picture:pic,
  },
  
  {
    id:2,
      name:"גלגלת צביעה",
      description:"גלגלת צביעה לקיר ",
      price:7,
      picture:pic,
  },

  {
    id:3,
      name:"גלגלת צביעה",
      description:"גלגלת צביעה לקיר ",
      price:30,
      picture:pic,
  },

  {
    id:4,
      name:"גלגלת צביעה",
      description:"גלגלת צביעה לקיר ",
      price:5,
      picture:pic,
  },
  {
    id:5,
      name:"גלגלת צביעה",
      description:"גלגלת צביעה לקיר ",
      price:100,
      picture:pic,
  }
];


  return (
    <>
    <div dir="rtl" className="App">
      <Header/>
      <Router>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/homePage" component={HomePage} />
      <Route exact path="/about" component={About} />
      <Route exact path="/store" component={() => <AllProducts products={products} />} />
      <Route exact path="/product" component={() => <ProductPage products={products} />} />
      <Route exact path="/blog" component={Blog}/>
      <Route exact path="/color" component={() => <Color cansize={cansize}/>}/>
      <Route exact path="/cart" component={() => <Cart products={products} />} />
      <Route exact path="/personalArea" component={PersonalArea}/>
      <Route exact path="/signin" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/callUs" component={CallUs} />
      <Route exact path="/ordersTable" component={() => <OrdersTable order={order}/>} />
      <Route exact path="/cansize" component={() => <SingleCanCard cansize={cansize}/>}/>
  </Router>
    </div>
    <Footer/>
          
</>
  );
}

export default App;
