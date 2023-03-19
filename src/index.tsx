import React from "react";
import ReactDOM from "react-dom";

class HelloMessage extends React.Component<any> {
  render() {
    return <div>Hola {this.props.name}</div>;
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById("hello-example")
);
