import React, { Component } from "react";

const styles = {
  container: {
    width: "100%",
    height: "100%"
  }
};

class Square extends Component {
  render() {
    console.log("square", this.props);
    const fill = this.props.black ? "black" : "white";
    const stroke = this.props.black ? "white" : "black";
    return (
      <div
        style={{ ...styles.container, backgroundColor: fill, color: stroke }}
      >
        {this.props.children}
      </div>
    );
  }
}

export default Square;
