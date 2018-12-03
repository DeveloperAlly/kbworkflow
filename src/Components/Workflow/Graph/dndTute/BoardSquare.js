import React, { Component } from "react";
import { DropTarget } from "react-dnd";
import Square from "./Square";

const ItemTypes = {
  PAWN: "pawn",
  CASTLE: "castle",
  KNIGHT: "knight"
};

const squareTarget = {
  hover(props, monitor) {
    // console.log("hoveringg");
  },
  // canDrop(props) {
  //   // check if theres already a piece here or not
  //   console.log("candrop", props);
  //   return true;
  // },
  drop(props, monitor, component) {
    const item = monitor.getItem();
    console.log("DROP ITEM", item);
    if (item.props.id) {
      console.log("MOVE ME", props);
      props.movePiece(props.x, props.y, item.props.id);
    } else {
      console.log("ADD ME");
      props.addPiece(props.x, props.y, item.props);
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
    console.log("BoardSquare", this.props);
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

export default DropTarget(
  [ItemTypes.KNIGHT, ItemTypes.CASTLE, ItemTypes.PAWN],
  squareTarget,
  collect
)(BoardSquare);
