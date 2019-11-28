import React, { Component as C }  from 'react'

export class InputBoxFocusClass extends C{
  constructor(props)
  {
    super(props);
    this.state={
      
    };  
  }

  render(){
    return(
      <div>
      <div>{this.state.FirstName}</div>
      <div>{this.state.LastName}</div>
      <div>{this.state.Salary}</div>
      </div>
    )
  }
}