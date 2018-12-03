import React, { Component } from "react";
import {
  DropTarget,
  connectDropTarget,
  DropTargetMonitor,
  XYCoord
} from "react-dnd";
import GraphNode from "./GraphNode";
import BoxDemo from "./dndTute/BoxDemo";

const styles = {
  container: {
    height: "100%",
    backgroundColor: "lightpink"
  }
};

const ItemTypes = {
  NODE: "node"
};

const nodeTarget = {
  canDrop(props) {
    console.log("canDrop", props);
  },
  drop(props, monitor, component) {
    console.log("drop", props, monitor.getItem(), component);
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class GraphDrop extends Component {
  state = {
    boxes: {
      a: { id: "A", top: 20, left: 80, title: "Drag me around" },
      b: { id: "B", top: 180, left: 20, title: "Drag me too" }
    }
  };
  render() {
    return this.props.connectDropTarget (
      <div style={styles.container}>
        hello graph drop
        {Object.keys(this.state.boxes).map(key => {
          const { left, top, title, id } = this.state.boxes[key]
          return (
            <BoxDemo
              key={key}
              id={id}
              left={left}
              top={top}
            >
              {title}
            </BoxDemo>
          )
        })}
      </div>
    );
  }
}

export default DropTarget(ItemTypes.NODE, nodeTarget, collect)(GraphDrop);
