import React, { Component } from "react";
import styled from 'styled-components';

const ConnectCircle = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  background: grey;
  opacity: 0;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  ${props => props.active &&
    `
    background: white;
    opacity: 1;
    border: 1px solid black;
  `}
`;

class NodeCircle extends Component {
  render() {
    console.log("CIRCLE PROPS", this.props);
    return (
      <ConnectCircle
        className={this.props.className}
        active={this.props.active}
        onClick={() => {this.props.onClick()}}
      />
    );
  }
}

export default NodeCircle;
