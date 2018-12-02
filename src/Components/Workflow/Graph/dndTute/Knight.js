import React, { Component } from "react";
import { DragSource } from "react-dnd";

const ItemTypes = {
  KNIGHT: "knight"
};

const knightSource = {
  beginDrag(props) {
    return { pieceId: props.id };
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

class Knight extends Component {
  render() {
    console.log(this.props);
    return this.props.connectDragSource(
      <div
        style={{ ...styles.piece, opacity: this.props.isDragging ? 0.5 : 1 }}
      >
        ♘
      </div>
    );
  }
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
