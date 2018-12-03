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

/*
Piece object {
  id: unique
  type: string
  position: [0,0]
  connections: [] //array of unique ids of other pieces this one is connected to
}
*/
class Graph extends Component {
  state = {
    pieces: [
      { id: "castle0", type: "castle", position: [1, 1], connections: [] },
      { id: "knight0", type: "knight", position: [1, 1], connections: [] },
      { id: "pawn0", type: "pawn", position: [1, 1], connections: [] }
    ],
    piecePositions: {
      castle: [1, 1],
      knight: [2, 0],
      pawn: [[0, 0], [7, 0]]
    }
    // nodeConnectors: { [{from: [0,0], to: [1, 1]}, {} ]}  //for graphing tbcompleted
  };

  moveKnight = (toX, toY) => {
    console.log("moveKnight");
    this.setState({ knightPosition: [toX, toY] });
  };

  movePiece = (toX, toY, id) => {
    console.log("movepiece", id, toX, toY);
    let piecePositions = this.state.piecePositions;
    piecePositions[id] = [toX, toY];
    console.log("piecePositions", piecePositions);
    this.setState({ piecePositions });
  };

  render() {
    return (
      <div style={styles.container}>
        <Board
          movePiece={this.movePiece}
          piecePositions={this.state.piecePositions}
        />
      </div>
    );
  }
}

export default Graph;
