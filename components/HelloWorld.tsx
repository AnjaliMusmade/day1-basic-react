import React from 'react';

export default function HelloWorld(){
  return(
  <div style={{backgroundColor:"green", padding:50}}>
  <div><h2>Hello World</h2></div>
  <button>Click ME</button>
  </div>
  )
};

function Handle(){
  alert("First button clicked event fired!!!!!!!!!");
}
export function HelloWorld1(){
  return(
  <div>
  <div><h2>Hello World 1</h2></div>
  <button onCLick={Handle}>Click ME1</button>
  </div>
  )
};



