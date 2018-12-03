import React, { Component } from "react";
import LineTo from "react-lineto";
import VXDendo from "../VXDendo";

const styles = {
  container: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%"
    // backgroundColor: "pink"
  },
  A: {
    backgroundColor: "red"
  },
  B: {
    backgroundColor: "blue"
  }
};

class GraphMini extends Component {
  render() {
    return (
      <div style={styles.container}>
{/*        <div className="A" fromAnchor="bottom" style={styles.A}>Element A</div>
        <div className="B" style={styles.B}>Element B</div>
        <LineTo from="A" to="B" /> */}
      </div>
    );
  }
}

export default GraphMini;
