import React, { Component } from "react";
import { connect } from "react-redux";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { ArcherContainer } from "react-archer";
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
    const headerText = this.props.list.listItems[this.props.list.selectedListIndex].label;
    return (
      <div style={styles.page}>
        <Grid container spacing={16} justify="space-around">
          <Paper elevation={3} style={styles.column_left}>
            <ListView />
          </Paper>
          <Paper elevation={3} style={styles.column_center}>
            <GraphView graphHeaderText={headerText}/>
          </Paper>
        </Grid>
      </div>
    );
  }
}

const MapStateToProps = (state) => ({
  list: state.list,
});

export default connect(MapStateToProps)(GraphContainer);
