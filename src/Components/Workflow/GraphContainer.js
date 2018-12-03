import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import VXDendo from "./VXDendo";
import VXGraph from "./VXGraph";
import ListView from "./List/ListView";
import GraphView from "./Graph/GraphViewOrig";

const styles = {
  page: {
    // backgroundColor: "lightpink",
    minHeight: "1000px",
    padding: "30px 10px"
  },
  row: {
    flexDirection: "row",
    display: "flex"
  },
  column_left: {
    width: "20%",
    borderRadius: "5px"
  },
  column_center: {
    width: "75%",
    flexDirection: "row",
    display: "flex"
  },
  graphContainer: {
    flexDirection: "row",
    display: "flex",
    width: "100%"
  },
  graph: {
    width: "20%"
  },
  graphElementsContainer: {
    width: "80%",
    backgroundColor: "lightgrey"
  }
};

class GraphContainer extends Component {
  render() {
    return (
      <div style={styles.page}>
        <Grid container spacing={16} justify="space-around">
          <Paper elevation={3} style={styles.column_left}>
            <ListView />
          </Paper>
          <Paper elevation={3} style={styles.column_center}>
            <GraphView graphHeaderText={'Holder'}/>
          </Paper>
        </Grid>
      </div>
    );
  }
}

export default GraphContainer;
