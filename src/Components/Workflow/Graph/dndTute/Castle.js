import React, { Component } from "react";
import { DragSource } from "react-dnd";

const ItemTypes = {
  PIECE: "piece",
  CASTLE: "castle"
};

const castleSource = {
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

class Castle extends Component {
  render() {
    console.log(this.props);
    return this.props.connectDragSource(
      <div
        id="castle"
        style={{ ...styles.piece, opacity: this.props.isDragging ? 0.5 : 1 }}
      >
        ♖
      </div>
    );
  }
}

export default DragSource(ItemTypes.CASTLE, castleSource, collect)(Castle);
