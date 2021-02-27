import React,{ useState }  from 'react';
import { Button,Image} from 'react-bootstrap';
import img from './1.png';
import './style.css';


function SingleCartCard(props){
  let [counter, setCount] = useState(1);

  function add() {
    setCount(counter + 1);
  }
  function remove() {
    setCount(counter - 1);
  }

    return(<>
    <div>
    <div className="card mb-3" style={{width: '450px', textAlign:"left"}}>
      <div className="row no-gutters">
        <div className="col-md-4">
        <Image  id="prodImg" src={props.product.picture} hoverSrc={img} style={{height: '220px'}}/>
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h2 className="card-title">{props.product.name}</h2>
            <p className="card-text">
            </p>
            <p className="card-text">
              <small className="text-muted">{props.product.price}₪</small>
              <div className="card-text">
              
                <Button variant="outline-secondary" onClick={add} className="quanSelectors">+1</Button>
                <Button variant="secondary" disabled className="quanSelectors">{counter}</Button>
                <Button variant="outline-secondary" onClick={remove} className="quanSelectors">-1</Button>
               
              
            </div>
              <Button variant="outline-secondary" style={{float:"left"}} onClick={ () => 
                props.onRemoveItem(props.index)}>מחק פריט</Button>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
    </>)   
}

export default SingleCartCard;