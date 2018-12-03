import React, { Component } from "react";
import ReactDOM from "react-dom";
import { DropTarget } from "react-dnd";
import { ArcherContainer, ArcherElement } from "react-archer";
import GraphNode from "./GraphNode";
import BoxDemo from "./dndTute/BoxDemo";

const styles = {
  container: {
    height: "100%",
    backgroundColor: "lightpink"
  },
  archerBox: {
    height: "100%",
    backgroundColor: "green"
  },
  rootStyle: {
    display: "flex",
    justifyContent: "center"
  },
  rowStyle: {
    margin: "200px 0",
    display: "flex",
    justifyContent: "space-between"
  },
  boxStyle: {
    padding: "10px",
    border: "1px solid black"
  }
};

const ItemTypes = {
  NODE: "node"
};

const nodeTarget = {
  // canDrop(props) {
  // //CANNOT drop outside of the target area!
  //   console.log("canDrop", props);
  // },
  drop(props, monitor, component) {
    const item = monitor.getItem();
    console.log("TRYING TO DROP THIS", item, props);
    let dropBoundingBox = ReactDOM.findDOMNode(
      component
    ).getBoundingClientRect();
    console.log("BOUNDS ON DROP", dropBoundingBox);
    const delta = monitor.getDifferenceFromInitialOffset();
    let left;
    let top;
    console.log("GRAPH DROP", item, delta);
    if (item.props.id) {
      left = Math.round(item.props.left + delta.x);
      top = Math.round(item.props.top + delta.y);
      console.log("new PROPS existing", left, top, item.props);
      props.moveNode(left, top, item.props.id);
    } else {
      console.log("TRYING TO DROP THIS", item.props, delta);
      left = Math.round(dropBoundingBox.left + 40);
      top = Math.round(dropBoundingBox.top + 200);
      console.log("new PROPS add", left, top, item.props);
      props.addNode(left, top, item.props);
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

const relationsA = [
  {
    from: { anchor: "bottom" },
    to: { anchor: "top", id: "b" }
  }
];

const relationTest = [
  {
    from: { anchor: "bottom" },
    to: { anchor: "top", id: "element2" }
  },
  {
    from: { anchor: "bottom" },
    to: { anchor: "top", id: "element3" }
  },
  {
    from: { anchor: "bottom" },
    to: { anchor: "top", id: "element4" }
  }
];

class GraphDrop extends Component {
  componentDidMount() {
    //TODO: potentially pass as props so I can figure out where elements are
    let dropBoundingBox = ReactDOM.findDOMNode(this).getBoundingClientRect();
    console.log("BOUNDS", dropBoundingBox);
  }

  renderArchers = () => {
    return (
      <ArcherContainer strokeColor="#6ebdc2">
        <div style={styles.rootStyle}>
          <ArcherElement id="root" relations={relationTest}>
            <BoxDemo
              id="archer"
              left={this.state.boxes.archer.left}
              top={this.state.boxes.archer.top}
            >
              Root
            </BoxDemo>
          </ArcherElement>
        </div>

        <div style={styles.rowStyle}>
          <ArcherElement
            id="element2"
            strokeColor="ff1111"
            relations={[
              {
                from: { anchor: "right" },
                to: { anchor: "left", id: "element3" }
                // label: <div style={{ marginTop: "-20px" }}>Arrow 2</div>
              }
            ]}
          >
            <div style={styles.boxStyle}>Element 2</div>
          </ArcherElement>

          <ArcherElement id="element3">
            <div style={styles.boxStyle}>Element 3</div>
          </ArcherElement>

          <ArcherElement id="element4" relations={[]}>
            <div style={styles.boxStyle}>Element 4</div>
          </ArcherElement>
        </div>
      </ArcherContainer>
    );
  };

  renderNodes = () => {
    console.log("renderNode", this.props.nodes);
    const nodeStyle = { width: "12.5%", position: "absolute" };
    let nodes = this.props.nodes.map((node, index) => {
      console.log("NODE", node, index);
      switch (node.type) {
        case "ticketType":
          const mynode = (
            <GraphNode
              type="ticketType"
              nodeStyle={nodeStyle}
              left={node.position.left}
              top={node.position.top}
              id={node.id}
              relations={node.relations}
            />
          );
          // if (index === -10) {
          //   return (
          //     <div style={styles.archerBox}>
          //       <ArcherContainer strokeColor="#6ebdc2">
          //         <ArcherElement
          //           id="root"
          //           relations={[
          //             {
          //               from: { anchor: "bottom" },
          //               to: { anchor: "top", id: "element1" }
          //             }
          //           ]}
          //         >
          //           {mynode}
          //         </ArcherElement>
          //       </ArcherContainer>
          //     </div>
          //   );
          // }
          return mynode;
        case "automationJob":
          return (
            <GraphNode
              type="automationJob"
              nodeStyle={nodeStyle}
              left={node.position.left}
              top={node.position.top}
              id={node.id}
              relations={node.relations}
            />
          );
        case "chatbot":
          return (
            <GraphNode
              type="chatbot"
              nodeStyle={nodeStyle}
              left={node.position.left}
              top={node.position.top}
              id={node.id}
              relations={node.relations}
            />
          );
        case "errorHandler":
          return (
            <GraphNode
              type="errorHandler"
              nodeStyle={nodeStyle}
              left={node.position.left}
              top={node.position.top}
              id={node.id}
              relations={node.relations}
            />
          );
        case "notification":
          return (
            <GraphNode
              type="notification"
              nodeStyle={nodeStyle}
              left={node.position.left}
              top={node.position.top}
              id={node.id}
              relations={node.relations}
            />
          );
        case "jobStatus":
          return (
            <GraphNode
              type="jobStatus"
              nodeStyle={nodeStyle}
              left={node.position.left}
              top={node.position.top}
              id={node.id}
              relations={node.relations}
            />
          );
        default:
          return null;
      }
    });
    return nodes;
  };

  render() {
    return this.props.connectDropTarget (
      <div style={styles.container}>
          {this.renderNodes()}
      </div>
    );
  }
}

export default DropTarget(ItemTypes.NODE, nodeTarget, collect)(GraphDrop);
