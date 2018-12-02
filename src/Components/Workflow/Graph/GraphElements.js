import React, { Component } from "react";
import GraphNode from "./GraphNode";

const styles = {
  container: {
    padding: "10px",
    overflow: "auto"
  }
};

const options = [
  "Ticket Type",
  "New",
  "Open",
  "In Progress",
  "Resolved",
  "Closed",
  "Blocked"
];

//must br scrollable
class GraphElements extends Component {
  render() {
    return (
      <div style={styles.container}>
        <GraphNode color="red" text={options} graphKey="node1" />
        <GraphNode color="blue" text={["Automation Job"]} graphKey="node2" />
        <GraphNode color="green" text={["Chatbot"]} graphKey="node3" />
        <GraphNode color="blue" text={["Automation Job"]} graphKey="node4" />
        <GraphNode color="green" text={["Chatbot"]} graphKey="node5" />
        <GraphNode color="blue" text={["Automation Job"]} graphKey="node6" />
        <GraphNode color="green" text={["Chatbot"]} graphKey="node7" />
      </div>
    );
  }
}

export default GraphElements;
