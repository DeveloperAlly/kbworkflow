import React, { Component } from "react";
import { DragSource } from "react-dnd";

const ItemTypes = {
  PAWN: "pawn"
};

const pawnSource = {
  beginDrag(props) {
    console.log("begindrag", props);
    return { props };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const styles = {
  piece: {
    fontSize: 70,
    fontWeight: "bold",
    cursor: "move"
  }
};

class Pawn extends Component {
  render() {
    console.log(this.props);
    return this.props.connectDragSource(
      <div
        id="pawn"
        style={{ ...styles.piece, opacity: this.props.isDragging ? 0.5 : 1 }}
      >
        ♙
      </div>
    );
  }
}

export default DragSource(ItemTypes.PAWN, pawnSource, collect)(Pawn);
