import React, { Component } from "react";
import SearchBar from "./Templates/SearchBar";
import styled from 'styled-components'

import TextField from '../../StyledComponents/TextField'

import InputAdornment from '@material-ui/core/InputAdornment'
import Search from '@material-ui/icons/Search'
import Button from '@material-ui/core/Button'

const Wrapper = styled.div`
  display: flex;
  padding: 20px;
`

const Title = styled.h2`
  text-align: left;
  margin: 0 20px 0 0;
  
`
const StyledTextField = styled(TextField)`
  && {
    max-width: 600px;
    margin-right: 20px;
  }
`

const Add = styled(Button)`
  &&& {
    padding: 10px 30px;
    max-height: 20px;
    background: #4EA0F5;
    color: white;
    font-weight: bold;
    margin-left: auto;
  }
`

class WorkflowHeader extends Component {
  render() {
    return (
      <Wrapper>
        <Title>AQE Editor</Title>
        <StyledTextField fullWidth
                   InputProps={{startAdornment: <InputAdornment position="start"><Search /></InputAdornment>}}
        />
        <Add variant={'extendedFab'}>+ ADD AQE</Add>
      </Wrapper>
    );
  }
}

export default WorkflowHeader;
