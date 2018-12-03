import React, { Component } from "react";
import Board from "./dndTute/Board";
import GraphDrop from "./GraphDrop";

const styles = {
  container: {
    padding: "10px",
    backgroundColor: "lightblue",
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
    nodes: [
      {
        id: "ticketType0",
        type: "ticketType",
        position: { left: 200, top: 50 },
        relations: relationTest
      },
      {
        id: "chatbot0",
        type: "chatbot",
        position: { left: 550, top: 550 },
        relations: relationTest
      },
      {
        id: "notification0",
        type: "notification",
        position: { left: 700, top: 650 },
        relations: relationTest
      }
    ]
  };

  makeUniqueId = type => {
    let count = this.state.nodes.filter(obj => obj.type === type).length;
    return `${type}${count}`;
  };

  moveNode = (left, top, id) => {
    console.log("move node");
    let nodes = this.state.nodes;
    let indexId = nodes
      .map(x => {
        return x.id;
      })
      .indexOf(id);
    console.log("indexId to change", indexId);
    nodes[indexId].position = { left, top };
    console.log("new nodeposition", nodes);
    this.setState({ nodes });
  };

  addNode = (left, top, nodeProps) => {
    console.log("ADD MA NODE DAYUM", left, top, nodeProps);
    let id = this.makeUniqueId(nodeProps.type);
    let node = Object.assign({}, nodeProps);
    let newNode = Object.assign(node, {
      id,
      position: { left, top }
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
        <GraphDrop
          moveNode={this.moveNode}
          addNode={this.addNode}
          nodes={this.state.nodes}
        />
      </div>
    );
  }
}

export default Graph;
