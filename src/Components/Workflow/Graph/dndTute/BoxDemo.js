import React, { Component } from "react";
import { DragSource } from "react-dnd";
import { ArcherElement } from "react-archer";
import ReactDOM from "react-dom";

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
    left: "",
    top: ""
  };

  componentDidMount() {
    let dropBoundingBox = ReactDOM.findDOMNode(this).getBoundingClientRect();
    console.log("BOUNDS BOX", dropBoundingBox, this.props);
    // this.setState({});
  }

  render() {
    let { left, top } = this.props;
    // if(!left)
    //   left=1693.455;
    // if(!top)
    //   top=0;
    console.log("BOXDEMO", this.props, left, top);
    return this.props.connectDragSource(
      <div style={{...styles.box, left, top}}>
        {this.props.children}
      </div>
    );
  }
}

export default DragSource(ItemTypes.NODE, boxSource, collect)(BoxDemo);
/*
<ArcherElement
  id={this.props.id}
  relations={this.props.relations}
>
  {this.props.children}
</ArcherElement>
*/
