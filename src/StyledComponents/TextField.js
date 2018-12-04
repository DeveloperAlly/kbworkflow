import styled from "styled-components";
import { TextField as MuiTextField } from "@material-ui/core";

const StyledTextField = styled(MuiTextField)`
  &&&&& {
    background: ${props => props.backgroundColor || "#f6f6f6"};
    border-radius: 500px;
    padding: ${props => props.padding || "7px 15px"};
    > div {
      &::before, &::after, &:hover {
        border: 0;
      }
      > input {
        padding: 0;
      }
    }
  }
`;

export default StyledTextField
