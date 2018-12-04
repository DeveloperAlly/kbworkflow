import React, { Component } from "react";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import { ArcherContainer } from "react-archer";
import Graph from "./Graph";
import GraphMini from "./GraphMini";
import GraphElements from "./GraphElements";

const styles = {
  container: {
    width: "100%",
    height: "100%"
  },
  right_container: {
    flex: 1
  },
  graph_header: {
    padding: "10px",
    borderBottom: "2px solid grey"
  },
  graph: {
    borderRight: "2px solid grey",
    height: "1000px"
  },
  graph_elements: {
    overflow: "auto",
    height: "600px"
  },
  graph_mini: {
    flex: 1,
    borderBottom: "2px solid grey",
    height: "400px"
  }
};

const Header = styled.div`
  background: #f6f6f6;
  padding: 10px;
  border-bottom: 1px solid black;
`;
const HeaderText = styled.h3`
  text-align: left;
  margin: 0;
  color: rgba(0, 0, 0, 0.7);
  padding-left: 20px;
  ${props => props.center&&`
    text-align: center;
    padding-left: 0;
  `}
`;

const Elements = styled.div`
  overflow: auto;
  height: 600px;
`;

class GraphView extends Component {
  render() {
    return (
      <div style={styles.container}>
        <Header>
          <HeaderText>{this.props.graphHeaderText}</HeaderText>
        </Header>
        <Grid container>
          <Grid item xs={9}>
            <ArcherContainer strokeColor="#6ebdc2">
              <div style={styles.graph}>
                <Graph />
              </div>
            </ArcherContainer>
          </Grid>
          <Grid item xs={3}>
            <Grid container direction="column" style={styles.right_container}>
              <div style={styles.graph_mini}>
                <GraphMini />
              </div>
              <Elements>
                <Header>
                  <HeaderText center>Elements</HeaderText>
                </Header>
                <GraphElements />
              </Elements>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default GraphView;
