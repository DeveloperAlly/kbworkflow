import React, { Component } from "react";
import { DragSource } from "react-dnd";

const ItemTypes = {
  PIECE: "piece",
  KNIGHT: "knight"
};

const knightSource = {
  beginDrag(props) {
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

class Knight extends Component {
  render() {
    return this.props.connectDragSource(
      <div
        id="knight"
        style={{ ...styles.piece, opacity: this.props.isDragging ? 0.5 : 1 }}
      >
        ♘
      </div>
    );
  }
}

export default DragSource(ItemTypes.KNIGHT, knightSource, collect)(Knight);
