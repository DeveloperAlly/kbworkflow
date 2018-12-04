import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import Square from "./Square";

const ItemTypes = {
  NODE: "node"
};

const squareTarget = {
  hover(props, monitor) {
    // console.log("hoveringg");
  },
  canDrop(props, monitor) {
    // check if theres already a piece here or not
    let candrop = true;
    props.nodes.map(node => {
      if (props.x === node.position[0] && props.y === node.position[1]) {
        return (candrop = false);
      }
    });
    return candrop;
  },
  drop(props, monitor, component) {
    const item = monitor.getItem();
    console.log("DROPPING", props, item);
    if (item.props.id) {
      // props.movePiece(props.x, props.y, item.props.id);
      props.moveNode(props.x, props.y, item.props.id);
    } else {
      // props.addPiece(props.x, props.y, item.props);
      props.addNode(props.x, props.y, item.props);
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

const styles = {
  container: {
    position: "relative",
    width: "100%",
    height: "100%"
  }
};

class BoardSquare extends Component {
  render() {
    const black = (this.props.x + this.props.y) % 2 === 1;
    return this.props.connectDropTarget(
      <div style={styles.container}>
        <Square black={black}>{this.props.children}</Square>
        {this.props.isOver &&
          <div style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: "100%",
              zIndex: 1,
              opacity: 0.5,
              backgroundColor: "grey"
            }}
          />
        }
      </div>
    );
  }
}

export default DropTarget(ItemTypes.NODE, squareTarget, collect)(BoardSquare);