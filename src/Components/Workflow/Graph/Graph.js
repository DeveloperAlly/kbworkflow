import React, { Component } from "react";
import { ArcherContainer } from "react-archer";
import Board from "./dndTute/Board";

const styles = {
  container: {
    padding: "10px",
    backgroundColor: "lightpink",
    height: "98%"
  },
  arrowBox: {
    backgroundColor: "lightpink",
    height: "100%",
    display: "flex",
    flexWrap: "wrap"
  }
};

class Graph extends Component {
  state = {
    nodes: [
      {
        id: "chatbot0",
        type: "chatbot",
        position: [3, 0],
        relations: []
      },
      {
        id: "ticketType0",
        type: "ticketType",
        position: [2, 2],
        relations: []
      },
      {
        id: "notification0",
        type: "notification",
        position: [4, 2],
        relations: []
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
    console.log("move node & get position on screen");
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

  addRelation = id => {
    console.log("addRelation");
  };

  renderArrows = () => {
    return <div>hello</div>;
  };

  render() {
    console.log("GRAPH", this.state.nodes);
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
