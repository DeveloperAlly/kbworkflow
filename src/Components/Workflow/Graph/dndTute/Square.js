import React, { Component } from "react";

const styles = {
  container: {
    width: "100%",
    height: "100%"
  }
};

class Square extends Component {
  render() {
    const fill = this.props.black ? "white" : "white";
    const stroke = this.props.black ? "black" : "black";
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
