import React, { Component } from "react";
import { ArcherElement } from "react-archer";
import BoardSquare from "./BoardSquare";
import GraphNode from "./GraphNode";

const styles = {
  container: {
    // backgroundColor: "lightblue",
    height: "100%",
    width: "100%",
    display: "flex",
    flexWrap: "wrap"
  },
  square: {
    width: "12.5%",
    height: "5%",
    backgroundColor: "transparent"
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
        switch (node.type) {
          case "ticketType":
            return (
              <GraphNode
                key={node.id}
                type="ticketType"
                id={node.id}
                relations={node.relations}
              />
            );
          case "automationJob":
            return (
              <GraphNode
                key={node.id}
                type="automationJob"
                id={node.id}
                relations={node.relations}
              />
            );
          case "chatbot":
            return (
              <GraphNode
                key={node.id}
                type="chatbot"
                id={node.id}
                relations={node.relations}
              />
            );
          case "errorHandler":
            return (
              <GraphNode
                key={node.id}
                type="errorHandler"
                id={node.id}
                relations={node.relations}
              />
            );
          case "notification":
            return (
              <GraphNode
                key={node.id}
                type="notification"
                id={node.id}
                relations={node.relations}
              />
            );
          case "jobStatus":
            return (
              <GraphNode
                key={node.id}
                type="jobStatus"
                id={node.id}
                relations={node.relations}
              />
            );
          default:
            return null;
        }
      }
    });
    return nodes;
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
