import React, { Component } from "react";
import WorkflowNavbar from "./WorkflowNavbar";
import WorkflowHeader from "./WorkflowHeader";
import GraphContainer from "./GraphContainer";

class WorkflowPage extends Component {
  render() {
    return (
      <div>
        <WorkflowNavbar />
        <WorkflowHeader />
        <GraphContainer />
      </div>
    );
  }
}

export default WorkflowPage;
