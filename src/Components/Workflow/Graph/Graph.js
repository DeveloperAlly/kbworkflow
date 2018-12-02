import React, { Component } from "react";
import Board from "./dndTute/Board";
import Square from "./dndTute/Square";
import Knight from "../Graph/dndTute/Knight";

const styles = {
  container: {
    padding: "10px",
    backgroundColor: "lightpink",
    height: "98%" //what ??
  }
};

class Graph extends Component {
  state = {
    knightPosition: [0,0]
  };

  moveKnight = (toX, toY) => {
    console.log("moveKnight");
    this.setState({ knightPosition: [toX, toY] });
  };

  render() {
    return (
      <div style={styles.container}>
        <Board
          knightPosition={this.state.knightPosition}
          moveKnight={this.moveKnight}
        />
      </div>
    );
  }
}

export default Graph;
