import React, { Component } from "react";
import { connect } from "react-redux";
import SearchBar from "./Templates/SearchBar";
import styled from "styled-components";

import TextField from "../../StyledComponents/TextField";

import InputAdornment from "@material-ui/core/InputAdornment";
import Dialog from "@material-ui/core/Dialog";
import Search from "@material-ui/icons/Search";
import Button from "@material-ui/core/Button";

import { addItem } from "../../redux/reducers/ListReducer";

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
  * {
    box-sizing: border-box;
  }
`;

const Title = styled.h2`
  text-align: left;
  margin: 0 20px 0 0;
`;
const StyledTextField = styled(TextField)`
  && {
    max-width: 600px;
    margin-right: 20px;
  }
`;

const Add = styled(Button)`
  &&& {
    padding: 10px 30px;
    max-height: 20px;
    background: #4ea0f5;
    color: white;
    font-weight: bold;
    margin-left: auto;
  }
`;
const AddItem = styled(Add)`
  &&& {
    margin: 15px auto auto auto;
  }
`;

const DialogInner = styled.div`
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-sizing: border-box;
  * {
    box-sizing: border-box;
  }
`;

class WorkflowHeader extends Component {
  state = {
    dialogOpen: false,
    itemText: ""
  };

  openDialog = () => {
    this.setState({
      dialogOpen: true
    });
  };
  closeDialog = () => {
    this.setState({
      dialogOpen: false
    });
  };
  addItem = (e, text) => {
    this.props.addItem(text);
    this.setState({
      dialogOpen: false
    })
  };

  handleChange = (e) => {
    this.setState({
      itemText: e.target.value
    })
  };

  render() {
    return (
      <Wrapper>
        <Title>AQE Editor</Title>
        <StyledTextField
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            )
          }}
        />
        <Add variant={"extendedFab"} onClick={this.openDialog}>
          + ADD AQE
        </Add>
        <Dialog open={this.state.dialogOpen} onClose={this.closeDialog}>
          <DialogInner>
            <StyledTextField
              fullWidth
              placeholder={"New list item..."}
              value={this.state.itemText}
              onChange={(e) => this.handleChange(e)}
            />
            <AddItem
              variant={"extendedFab"}
              onClick={e => this.addItem(e, this.state.itemText)}
            >
              ADD ITEM
            </AddItem>
          </DialogInner>
        </Dialog>
      </Wrapper>
    );
  }
}

export default connect(
  null,
  { addItem }
)(WorkflowHeader);
