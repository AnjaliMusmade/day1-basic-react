import React, { Component } from "react";

export default function loggerHoc(InputComponent) {
  class LoggerComponent extends Component {
    componentDidMount() {
      console.log("componentt has mounted");
    }
    render() {
      return (
        <div style={{ backgroundColor: "orange", padding: 30 ,border:" solid "}}>
          <InputComponent {...this.props} />
        </div>
      );
    }
  }

  return LoggerComponent;
}
