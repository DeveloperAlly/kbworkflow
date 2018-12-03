import React, { Component } from "react";
import GraphNode from "./GraphNode";

const styles = {
  container: {
    padding: "10px",
    overflow: "auto"
  }
};

//must br scrollable
class GraphElements extends Component {
  render() {
    return (
      <div style={styles.container}>
        <GraphNode type="ticketType" id="" relations={[]} />
        <GraphNode type="automationJob" id="" relations={[]} />
        <GraphNode type="chatbot" id="" relations={[]} />
        <GraphNode type="errorHandler" id="" relations={[]} />
        <GraphNode type="notification" id="" relations={[]} />
        <GraphNode type="jobStatus" id="" relations={[]} />
      </div>
    );
  }
}

export default GraphElements;
