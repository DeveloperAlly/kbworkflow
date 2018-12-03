import React, { Component } from "react";
import BoardSquare from "./BoardSquare";
import GraphNode from "../GraphNode";
// import Knight from "./Knight";
// import Castle from "./Castle";
// import Pawn from "./Pawn";

const styles = {
  container: {
    backgroundColor: "paleblue",
    height: "100%",
    width: "100%",
    display: "flex",
    flexWrap: "wrap"
  },
  square: {
    width: "12.5%",
    height: "5%"
  }
};

const tt_options = [
  "Ticket Type",
  "New",
  "Open",
  "In Progress",
  "Resolved",
  "Closed",
  "Blocked"
];

class Board extends Component {
  renderSquare = (i, nodes) => {
    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
      <div key={i} style={styles.square}>
        <BoardSquare
          x={x}
          y={y}
          moveNode={this.props.moveNode}
          addNode={this.props.addNode}
          nodes={this.props.nodes}
        >
          {this.renderNode(x, y, this.props.nodes)}
        </BoardSquare>
      </div>
    );
  };

  renderNode = (x, y) => {
    let nodes = this.props.nodes.map(node => {
      if (x === node.position[0] && y === node.position[1]) {
        console.log(node.id);
        return (
          <GraphNode
            color="green"
            text={tt_options}
            type="ticketType"
            id={node.id}
          />
        );
      }
    });
    return nodes;
  };

  renderPiece = (x, y, pieces) => {
    //pieces is an array of objects
    // let chessPiece = pieces.map(piece => {
    //   if (x === piece.position[0] && y === piece.position[1]) {
    //     switch (piece.type) {
    //       case "knight":
    //         return <Knight id={piece.id} />;
    //       case "castle":
    //         return <Castle id={piece.id} />;
    //       case "pawn":
    //         return <Pawn id={piece.id} />;
    //       default:
    //         return null;
    //     }
    //   }
    // });
    // return chessPiece;
  };

  render() {
    const nodes = [];
    for (let i = 0; i < 160; i++) {
      nodes.push(this.renderSquare(i, this.props.nodes));
    }
    return <div style={styles.container}>{nodes}</div>;
  }
}

export default Board;
