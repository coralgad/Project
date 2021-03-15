import React, { useState } from 'react';
import { SwatchesPicker } from 'react-color';
import {Row,Button} from 'react-bootstrap'
import './style.css';
import SingleCanCard from './singleCanCard.js'

function Color(props){
  let [cansize, setCansize] = useState(props.cansize);
  console.log(props.cansize);
  const [selectedColor, setSelectedColor] = useState('')
  return (
    <div className='app' id="colorDiv">
      <h1>בחירת צבע</h1>
      <p>
        שלב 1- בוחרים את הצבע הרצוי
      </p>
      <div id="picColor">
        <SwatchesPicker 
          color={selectedColor}
          onChangeComplete={color => setSelectedColor(color.hex)}
        />
        </div>
        <br/>
              <div id="cardsDiv">
              <p>שלב 2-בוחרים את גודל הפחית הרצויה</p>
                <Row>
                    {cansize.map((element, index) => {
                        return <SingleCanCard cansize={element} key={index} index={index}/>
                    })}
                </Row>
                <div><Button variant="secondary" className="quanSelectors">הוסף לעגלה</Button></div>
          </div>
    </div>
      )
}
export default Color;