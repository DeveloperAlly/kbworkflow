import React from 'react';
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
  ${props => props.active&&`
    background: white;
  `}
`;

const NodeCircle = ({className, active}) => (
  <ConnectCircle className={className} active={active}/>
);

export default NodeCircle;