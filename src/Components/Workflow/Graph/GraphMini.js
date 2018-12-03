import React, { Component } from "react";
import Castle from "./dndTute/Castle";
import Knight from "./dndTute/Knight";
import Pawn from "./dndTute/Pawn";

const styles = {
  container: {
    padding: "10px"
  }
};

class GraphMini extends Component {
  render() {
    return (
      <div style={styles.container}>
        GraphMini
        <Pawn id="" type="pawn" />
        <Knight id="" type="knight"/>
        <Castle id="" type="castle"/>
      </div>
    );
  }
}

export default GraphMini;
