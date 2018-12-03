import React, { Component } from "react";
import { ArcherContainer } from "react-archer";
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
        switch (node.type) {
          case "ticketType":
            return <GraphNode type="ticketType" id={node.id} relations={node.relations}/>;
          case "automationJob":
            return <GraphNode type="automationJob" id={node.id} relations={node.relations}/>;
          case "chatbot":
            return <GraphNode type="chatbot" id={node.id} relations={node.relations}/>;
          case "errorHandler":
            return <GraphNode type="errorHandler" id={node.id} relations={node.relations}/>;
          case "notification":
            return <GraphNode type="notification" id={node.id} relations={node.relations}/>;
          case "jobStatus":
            return <GraphNode type="jobStatus" id={node.id} relations={node.relations}/>;
          default:
            return null;
        }
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
    return (
      // <ArcherContainer strokeColor="#6ebdc2">
      <div style={styles.container}>{nodes}</div>
      // </ArcherContainer>
    );
  }
}

export default Board;
