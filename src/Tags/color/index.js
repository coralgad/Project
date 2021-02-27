
import React, { useState } from 'react'
import { BlockPicker } from 'react-color'
import Tippy from '@tippyjs/react'



function Color(){
  const [selectedColor, setSelectedColor] = useState('#ccc')
  return (
    <div className='app'>
      <h1>בחר/י צבע</h1>
      <p>
        שלב 1- בוחרים את הצבע הרצוי
      </p>
      <div className='area' style={{ backgroundColor: selectedColor }}>
      </div>
      <Tippy interactive={true} placement={'bottom'} content={
        <BlockPicker
          color={selectedColor}
          onChangeComplete={color => setSelectedColor(color.hex)}
        />
      }>
        <button className='ref-button'>Change box color</button>
      </Tippy>
      <div>בוחרים את גודל הפחית הרצויה</div>
      <div> אייקונים של פחיות+ גודל+ בחירה של כמות</div>
    </div>
      )
}
export default Color;