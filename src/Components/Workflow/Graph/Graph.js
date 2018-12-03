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
  existing: boolean // flag to tell if this is a new piece or already on the board?
}
*/
class Graph extends Component {
  state = {
    pieces: [
      { id: "castle0", type: "castle", position: [0, 0], connections: [] },
      { id: "knight0", type: "knight", position: [1, 1], connections: [] },
      { id: "pawn0", type: "pawn", position: [1, 0], connections: [] },
      { id: "pawn1", type: "pawn", position: [2, 0], connections: [] }
    ]
  };

  makeUniqueId = type => {
    let count = this.state.pieces.filter(obj => obj.type === type).length;
    return `${type}${count}`;
  };

  addPiece = (toX, toY, pieceProps) => {
    let id = this.makeUniqueId(pieceProps.type);
    let piece = Object.assign({}, pieceProps);
    let newPiece = Object.assign(piece, {
      id,
      position: [toX, toY],
      connections: []
    });
    let pieces = this.state.pieces;
    pieces.push(newPiece);
    this.setState({ pieces });
  };

  deletePiece = pieceId => {
    let pieces = this.state.pieces;
    let indexId = pieces
      .map(x => {
        return x.id;
      })
      .indexOf(pieceId);
    console.log("delete");
    let newPieces = pieces.splice(indexId, 1);
    console.log("new pieces", newPieces);
    this.setState({ pieces: newPieces });
  };

  movePiece = (toX, toY, pieceId) => {
    //1. moves the piece
    //2. moves/redraws the connected lines
    let pieces = this.state.pieces;
    let indexId = pieces
      .map(x => {
        return x.id;
      })
      .indexOf(pieceId);
    pieces[indexId].position = [toX, toY];
    this.setState({ pieces });
  };

  render() {
    return (
      <div style={styles.container}>
        <Board
          movePiece={this.movePiece}
          addPiece={this.addPiece}
          pieces={this.state.pieces}
        />
      </div>
    );
  }
}

export default Graph;
