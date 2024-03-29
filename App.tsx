import React from 'react';

import HelloWorld,{HelloWorld1}  from './components/HelloWorld';
import {HelloWorld2} from './components/HelloWorld2';
import HelloWorldProps from './components/HelloWorldProps';
import HelloWorldPropsClass from './components/HelloWorldPropsClass';
import HelloWorldPureComponent from './components/HelloWorldPureComponent';
import HelloWorlddestructuring from './components/HelloWorlddestructuring';
import DestructuringInArgumets from './components/DestructuringInArgumets';
import InputBoxFocus from './components/InputBoxFocus';
import InputBoxFocusCallBackRef from './components/InputBoxFocusCallBackRef';
import InputBoxFocusClass from './components/InputBoxFocusClass';
import BorderComponent from './components/BorderComponent';
import BorderComponentHoc from './components/BorderComponentHoc';


function ClickHandler(e)
{
  return(
    alert(e)
  )

}
export default function App(){
  return(
  <div>
  <HelloWorld/><br/><hr/>
  <HelloWorld1/><br/><hr/>
  <HelloWorld2/><br/><hr/>
  <HelloWorlddestructuring name="A" proj="B"/><hr/>
  <DestructuringInArgumets name="ABC" proj="BCD"/><hr/>
   <HelloWorldProps name="Anjali" MyHandler={ClickHandler}/><hr/><hr/>
   <HelloWorldPropsClass FirstName="Anjali" LastName="Musmade" Salary="1000" /><hr/><hr/>
   <HelloWorldPureComponent FirstName="AB45" LastName="XYZ" 
   Salary="1002"/><hr/>
   <InputBoxFocus/><hr/>
   <InputBoxFocusCallBackRef/><hr/>
   <InputBoxFocusClass/><hr/>
   <BorderComponent>
   <div>
  to use the nested components cutomized as we need.<br/><br/>

   <button>Button in nested compo</button>
   </div>
   </BorderComponent>
<hr/>
 <BorderComponentHoc name="Anjali">
   <div>
  to use HOC to cover any our component with additional fature which can be used frequently.
  Here the original component kept as it is and new one created using old.<br/><br/>

   <button>Button in nested compo</button>
   </div>
   </BorderComponentHoc>

  </div>
  )
}