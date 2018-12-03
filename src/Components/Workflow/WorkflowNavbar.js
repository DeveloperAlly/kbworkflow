import React, { Component } from "react";
import styled from 'styled-components';

const Header = styled.div`
  height: 50px;
  background: #6294c3; /* Old browsers */
  background: -moz-linear-gradient(left, #6294c3 0%, #637eb8 100%); /* FF3.6-15 */
  background: -webkit-linear-gradient(left, #6294c3 0%,#637eb8 100%); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(to right, #6294c3 0%,#637eb8 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#6294c3', endColorstr='#637eb8',GradientType=1 ); /* IE6-9 */
  text-align: left;
  padding: 0 20px;
`;

const Logo = styled.img`
  max-height: 100%;
  max-width: 100%;
`;

class WorkflowNavbar extends Component {
  render() {

    return (
      <Header>
        <Logo src={require('../../images/myWizard_knowledgeb_WHT.png')} alt=""/>
      </Header>
    );
  }
}

export default WorkflowNavbar;
