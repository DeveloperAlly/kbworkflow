import React, { Component } from "react";
import Board from "./dndTute/Board";
import Square from "./dndTute/Square";
import Knight from "../Graph/dndTute/Knight";

const styles = {
  container: {
    padding: "10px",
    // backgroundColor: "lightpink",
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
    ],
    nodes: [
      { id: "chatbot0", type: "chatbot", position: [3,0], connections: [] },
      { id: "chatbot1", type: "chatbot", position: [2,2], connections: [] },
      { id: "chatbot2", type: "chatbot", position: [4,2], connections: [] }
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
    let newPieces = pieces.splice(indexId, 1);
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

  moveNode = (toX, toY, id) => {
    console.log("move node");
    let nodes = this.state.nodes;
    let indexId = nodes
      .map(x => {
        return x.id;
      })
      .indexOf(id);
    nodes[indexId].position = [toX, toY];
    this.setState({ nodes });
  };

  addNode = (toX, toY, nodeProps) => {
    console.log("addnode");
  };

  deleteNode = id => {
    console.log("deleteNode");
  };

  render() {
    return (
      <div style={styles.container}>
        <Board
          moveNode={this.moveNode}
          addNode={this.addNode}
          nodes={this.state.nodes}
        />
      </div>
    );
  }
}

export default Graph;
