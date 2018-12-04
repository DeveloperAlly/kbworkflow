import React, {Component} from 'react';
import { ArcherElement } from "react-archer";
import GraphNode from "./GraphNode";


class NodeWrapper extends Component {
  render() {
    return (
      <ArcherElement>
        <GraphNode />
      </ArcherElement>
    );
  }
}

export default NodeWrapper;
