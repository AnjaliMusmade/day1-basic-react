import React from 'react'

export default function InputBoxFocus(){
  let inputHandle=React.createRef();

  function OnClick(){
    inputHandle.current.focus();
  }
  return(
 <div>
 <input type="text" ref={inputHandle}/>
 <input type="button" value="Click Me To Focus" onClick={OnClick}/>
 </div>
  )
};