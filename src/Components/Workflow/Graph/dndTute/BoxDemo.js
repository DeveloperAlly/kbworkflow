import React, { Component } from "react";
import { DragSource } from "react-dnd";

const styles = {
  box: {
    position: "absolute",
    border: "1px dashed gray",
    backgroundColor: "white",
    padding: "0.5rem 1rem",
    cursor: "move"
  }
};

const ItemTypes = {
  NODE: "node"
};

const boxSource = {
  beginDrag(props) {
    console.log("BOX beginDrag", props);
    return { props };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

class BoxDemo extends Component {
  state = {
    id: "",
    left: "",
    top: ""
  };

  render() {
    console.log(this.props);
    return this.props.connectDragSource(
      <div
        style={styles.box}
        id={this.props.id}
        left={this.props.left}
        top={this.props.top}
      >
        {this.props.children}
      </div>
    );
  }
}

export default DragSource(ItemTypes.NODE, boxSource, collect)(BoxDemo);
