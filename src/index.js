import * as React from "react";
import * as ReactDOM from "react";

class HelloMessage extends React.Component {
  render() {
    return <div>Hola {this.props.name}</div>;
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById("hello-example")
);
