import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ArrowDropDown from "@material-ui/icons/ArrowDropDown";

/*
Component Requirements...
-> Drag and Drop
    - paper elevation changes
    - component becomes movable

*/

const styles = {
  container: {
    marginBottom: "10px",
    borderRadius: "5px"
  },
  paper: {
    backgroundColor: "lightgrey",
    padding: "10px 5px"
    // maxWidth: "350px",
    // maxHeight: "50px"
  },
  button: {
    width: "100%"
  }
};

const ITEM_HEIGHT = 48;

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
    return (
      <div
        draggable
        onDragStart={e => {
          this.handleOnDragStart(e, this.props.graphKey);
        }}
        key={this.props.graphKey}
        style={styles.container}
      >
        <Paper
          elevation={0}
          style={{
            ...styles.paper,
            borderLeft: `8px solid ${this.props.color}`
          }}
        >
          <div
            style={styles.button}
            // onClick={e => this.handleSelect(e)}
          >
            {this.state.selectedItem}
            <IconButton
              aria-label="dropdown"
              aria-owns={open ? "menu": undefined}
              aria-haspopup="true"
              onClick={e => this.handleClick(e)}
              onChange={e => this.handleClose(e)}
            >
              <ArrowDropDown/>
            </IconButton>
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
          </div>
        </Paper>
      </div>
    );
  }
}

export default GraphNode;
