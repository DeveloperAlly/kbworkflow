import React, { Component } from "react";
import SearchBar from "./Templates/SearchBar";

class WorkflowHeader extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "lightblue", minHeight: "60px" }}>
        <div> This is the Header with searchbar </div>
      </div>
    );
  }
}

export default WorkflowHeader;
