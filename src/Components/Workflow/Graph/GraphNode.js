import React, { Component } from "react";
import styled from 'styled-components';
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import { DragSource, connectDragSource } from "react-dnd";

/*
Component Requirements...
-> Drag and Drop
    - paper elevation changes
    - component becomes movable

*/

const styles = {
  container: {
    marginBottom: "15px",
    borderRadius: "5px"
  },
};

const ITEM_HEIGHT = 48;

const Types = {
  NODE: "node"
};

const nodeSource = {
  beginDrag(props) {
    return {
      color: props.color
    };
  }
};



// Props: text: string or Array of strings, color: string
class GraphNode extends Component {
  state = {
    anchorEl: null,
    selectedItem: this.props.text[0]
  };

  renderDropdown = () => {
    //move stuff here
  };

  handleOnDragStart = (e, id) => {
    console.log("dragstart", id);
    e.dataTransfer.setData("id", id);
  };

  handleOnDrop = e => {
    console.log("drop", e);
    let id = e.dataTransfer.getData("id");
  };

  handleClick = event => {
    console.log("clicked me", event.currentTarget);
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = event => {
    console.log("close event", event.target);
    this.setState({ anchorEl: null });
  };

  handleChange = event => {
    console.log("change", event.target.value);
  };

  handleSelect = e => {
    console.log("selected me", e.target);
  };

  render() {
    const open = Boolean(this.state.anchorEl);
    return this.props.connectDragSource(
      <div key={this.props.graphKey} style={styles.container}>
        <Node color={this.props.color}>
            <ConnectCircle className={"connect-circle"}/>
            <ConnectCircle top className={"connect-circle"}/>
            <Label>{this.state.selectedItem}</Label>
            <IconWrapper>
              <IconButton
                aria-label="dropdown"
                aria-owns={open ? "menu": undefined}
                aria-haspopup="true"
                onClick={e => this.handleClick(e)}
                onChange={e => this.handleClose(e)}
              >
                <ArrowDropDown/>
              </IconButton>
            </IconWrapper>
            <Menu
              id="menu"
              anchorEl={this.state.anchorEl}
              open={open}
              onClick={event => this.handleClose(event)}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: 200
                }
              }}
            >
              {this.props.text.map(option => (
                <MenuItem
                  key={option}
                  value={option}
                  selected={option === this.state.selectedItem}
                  divider={true}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
        </Node>
      </div>
    );
  }
}

export default DragSource(Types.NODE, nodeSource, connect => ({
  connectDragSource: connect.dragSource()
}))(GraphNode);

const Node = styled(Paper)`
  border-radius: 3px;
  border-left: 6px solid ${props => props.color ? props.color : 'grey'};
  display: flex;
  position: relative;
`;
const ConnectCircle = styled.div`
  border-radius: 50%;
  width: 20px;
  height: 20px;
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: auto;
  right: 0;
  margin-right: auto;
  margin-bottom: -10px;
  background: grey;
  opacity: 0;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  ${props => props.active&&`
    background: white;
  `}
  ${props => props.top&&`
    top: 0;
    bottom: auto;
    margin-bottom: auto;
    margin-top: -10px;
  `}
`;

const IconWrapper = styled.div`
  width: auto;
`;

const Label = styled.p`
  flex: 1;
`
