import React, { Component } from "react";
import styled from "styled-components";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";
import { DragSource } from "react-dnd";
import { ArcherContainer, ArcherElement } from "react-archer";
import NodeCircle from "./NodeCircle";

const styles = {
  container: {
    marginBottom: "15px",
    borderRadius: "5px"
  }
};

const tt_options = [
  "Ticket Type",
  "Standalone",
  "Incident",
  "ATR Problem",
  "Task Template",
  "SNOW"
];

const aj_options = [
  "Automation Job",
  "Automation1",
  "Open",
  "In Progress",
  "Resolved",
  "Closed",
  "Blocked"
];

const cb_options = [
  "Chatbot",
  "Am chatting",
  "Disabled",
  "Hello",
  "Help",
  "Busy today"
];

const eh_options = [
  "Error Handler",
  "Server Error",
  "ML error",
  "Warning",
  "Ticket error",
  "Unknown error",
  "Pipeline error"
];

const n_options = [
  "Notification",
  "New chat",
  "New ticket",
  "Warning",
  "Message"
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

const options = {
  ticketType: { color: "#34a95f", options: tt_options },
  automationJob: { color: "#6938a4", options: aj_options },
  chatbot: { color: "#ffee84", options: cb_options },
  errorHandler: { color: "red", options: eh_options },
  notification: { color: "orange", options: n_options },
  jobStatus: { color: "#5567e7", options: js_options }
};

const ITEM_HEIGHT = 48;

const Types = {
  NODE: "node"
};

const nodeSource = {
  beginDrag(props) {
    console.log("BEGIN DRAG", props);
    return { props };
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

// Props: text: string or Array of strings, color: string
class GraphNode extends Component {
  state = {
    anchorEl: null,
    selectedIndex: 0,
    activeTop: false,
    activeBottom: false
  };

  renderDropdown = () => {
    //move stuff here
  };

  handleOpenMenu = event => {
    console.log("clicked me", event.currentTarget);
    this.setState({ anchorEl: event.currentTarget });
  };

  handleCloseMenu = event => {
    console.log("close event", event.target);
    this.setState({ anchorEl: null });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null });
  };

  handleNodeClick = position => {
    if (position === "top") {
      this.setState({ activeTop: !this.state.activeTop });
    } else if (position === "bottom") {
      this.setState({ activeBottom: !this.state.activeBottom });
    }
  };

  render() {
    console.log("graphNode", this.props);
    const open = Boolean(this.state.anchorEl);
    return this.props.connectDragSource(
      <div key={this.props.id} style={styles.container}>
        <ArcherElement id={this.props.id} relations={this.props.relations}>
          <Node color={options[this.props.type].color}>
            <StyledCircle
              top
              active={this.state.activeTop}
              onClick={() => {
                this.handleNodeClick("top");
              }}
            />
            <StyledCircle
              id={`${this.props.id}nodeBot`}
              active={this.state.activeBottom}
              onClick={() => {
                this.handleNodeClick("bottom");
              }}
            />
            <Label>
              {options[this.props.type].options[this.state.selectedIndex]}
            </Label>
            <IconWrapper>
              <IconButton
                aria-label="dropdown"
                aria-owns={open ? "menu": undefined}
                aria-haspopup="true"
                onClick={e => this.handleOpenMenu(e)}
                onChange={e => this.handleCloseMenu(e)}
              >
                <ArrowDropDown/>
              </IconButton>
            </IconWrapper>
            <Menu
              id="menu"
              anchorEl={this.state.anchorEl}
              open={open}
              onClick={event => this.handleCloseMenu(event)}
              PaperProps={{
                style: {
                  maxHeight: ITEM_HEIGHT * 4.5,
                  width: 200
                }
              }}
            >
              {options[this.props.type].options.map((option,i) => (
                <MenuItem
                  key={option}
                  value={option}
                  onClick={e => this.handleMenuItemClick(e, i)}
                  selected={i === this.state.selectedIndex}
                  divider={true}
                >
                  {option}
                </MenuItem>
              ))}
            </Menu>
          </Node>
        </ArcherElement>
      </div>
    );
  }
}

export default DragSource(Types.NODE, nodeSource, collect)(GraphNode);

const Node = styled(Paper)`
  border-radius: 3px;
  border-left: 6px solid ${props => (props.color ? props.color : "grey")};
  display: flex;
  position: relative;
  height: 95%;
  z-index: 9;
`;
const StyledCircle = styled(NodeCircle)`
  && {
    position: absolute;
    left: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    bottom: 0;
    margin-bottom: -10px;
    ${({ top }) =>
      top &&
      `
      top: 0;
      bottom: auto;
      margin-bottom: auto;
      margin-top: -10px;
    `}
  }
`;
const IconWrapper = styled.div`
  width: auto;
`;

const Label = styled.p`
  flex: 1;
`;
