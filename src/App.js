import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Tags/header';
import Footer from './Tags/footer';
import AllProducts from './Tags/allProducts';
import ProductPage from './Tags/Product-Page';
// import pic from './Tags/Product-Page/1.png';
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



function App() {

// const products =[
//   {   
//   name:"מברשת צביעה",
//   description:"מברשת צביעה לקיר דגם נועם",
//   price:20,
//   picture:pic,
//   },
  
//   {
//       name:"גלגלת צביעה",
//       description:"גלגלת צביעה לקיר ",
//       price:7,
//       picture:pic,
//   },

//   {
//       name:"גלגלת צביעה",
//       description:"גלגלת צביעה לקיר ",
//       price:30,
//       picture:pic,
//   },

//   {
//       name:"גלגלת צביעה",
//       description:"גלגלת צביעה לקיר ",
//       price:5,
//       picture:pic,
//   },
//   {
//       name:"גלגלת צביעה",
//       description:"גלגלת צביעה לקיר ",
//       price:100,
//       picture:pic,
//   }
// ];

  return (
    <>
    <div dir="rtl" className="App">
      <Header/>
      {/* <ProductPage product={product}/> */}
      {/* <AllProducts /> */}
      {/* <About/> */}
      {/* <router/> */}
      <Router>
      <Route exact path="/homePage" component={HomePage} />
      <Route exact path="/about" component={About} />

      <Route exact path="/store" component={AllProducts}/>
      {/* <Route exact path="/store" component={() => <AllProducts products={products} />} /> */}
      <Route exact path="/product" component={ProductPage}/>
      <Route exact path="/blog" component={Blog}/>
      <Route exact path="/color" component={Color}/>
      <Route exact path="/cart" component={Cart}/>
      <Route exact path="/personalArea" component={PersonalArea}/>
      <Route exact path="/signin" component={Login} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/callUs" component={CallUs} />
  </Router>
    </div>
    <Footer/>
          
</>
  );
}

export default App;
