import React, { Component } from "react";
import GraphNode from "./GraphNode";

const styles = {
  container: {
    padding: "10px",
    overflow: "auto"
  }
};

const tt_options = [
  "Ticket Type",
  "New",
  "Open",
  "In Progress",
  "Resolved",
  "Closed",
  "Blocked"
];

const aj_options = [
  "Automation Job",
  "New",
  "Open",
  "In Progress",
  "Resolved",
  "Closed",
  "Blocked"
];

const cb_options = [
  "Chatbot",
  "New",
  "Open",
  "In Progress",
  "Resolved",
  "Closed",
  "Blocked"
];

const eh_options = [
  "Error Handler",
  "New",
  "Open",
  "In Progress",
  "Resolved",
  "Closed",
  "Blocked"
];

const n_options = [
  "Notification",
  "New",
  "Open",
  "In Progress",
  "Resolved",
  "Closed",
  "Blocked"
];

const js_options = [
  "Job Status",
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
        <GraphNode
          color="green"
          text={tt_options}
          type="ticketType"
          graphKey="node1"
          id=""
        />
        <GraphNode
          color="purple"
          text={aj_options}
          type="automationJob"
          graphKey="node2"
          id=""
        />
        <GraphNode
          color="grey"
          text={cb_options}
          type="chatbot"
          graphKey="node3"
          id=""
        />
        <GraphNode
          color="yellow"
          text={eh_options}
          type="errorHandler"
          graphKey="node4"
          id=""
        />
        <GraphNode
          color="blue"
          text={n_options}
          type="notification"
          graphKey="node5"
          id=""
        />
        <GraphNode
          color="orange"
          text={js_options}
          type="jobStatus"
          graphKey="node6"
          id=""
        />
      </div>
    );
  }
}

export default GraphElements;
