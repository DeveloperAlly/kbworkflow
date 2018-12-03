import React, { Component } from "react";
import Board from "./dndTute/Board";

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

const relationTest = [
  {
    from: { anchor: "bottom" },
    to: { anchor: "top", id: "ticketType0" }
  }
  // {
  //   from: {anchor: "bottom" },
  //   to: { anchor: "top", id: "notification0"}
  // }
];

class Graph extends Component {
  state = {
    pieces: [
      { id: "castle0", type: "castle", position: [0, 0], connections: [] },
      { id: "knight0", type: "knight", position: [1, 1], connections: [] },
      { id: "pawn0", type: "pawn", position: [1, 0], connections: [] },
      { id: "pawn1", type: "pawn", position: [2, 0], connections: [] }
    ],
    nodes: [
      {
        id: "chatbot0",
        type: "chatbot",
        position: [3, 0],
        relations: relationTest
      },
      {
        id: "ticketType0",
        type: "ticketType",
        position: [2, 2],
        relations: relationTest
      },
      {
        id: "notification0",
        type: "notification",
        position: [4, 2],
        relations: relationTest
      }
    ]
  };

  makeUniqueId = type => {
    let count = this.state.nodes.filter(obj => obj.type === type).length;
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
    let id = this.makeUniqueId(nodeProps.type);
    let node = Object.assign({}, nodeProps);
    let newNode = Object.assign(node, {
      id,
      position: [toX, toY]
    });
    let nodes = this.state.nodes;
    nodes.push(newNode);
    this.setState({ nodes });
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
