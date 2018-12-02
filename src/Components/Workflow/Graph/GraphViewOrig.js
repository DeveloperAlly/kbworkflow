import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
// import { DragDropContext } from "react-dnd";
// import HTML5Backend from "react-dnd-html5-backend";
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

// export function observe(receive) {
//   setInterval(
//     () =>
//       receive([Math.floor(Math.random() * 8), Math.floor(Math.random() * 8)]),
//     500
//   );
// }

class GraphView extends Component {
  render() {
    return (
      <div style={styles.container}>
        <div style={styles.graph_header}>
          <div>{this.props.graphHeaderText}</div>
        </div>
        <Grid container>
          <Grid item xs={9}>
            <div style={styles.graph}>
              <Graph children="this is the graph"/>
            </div>
          </Grid>
          <Grid item xs={3}>
            <Grid container direction="column" style={styles.right_container}>
              <div style={styles.graph_mini}>
                <GraphMini/>
              </div>
              <div style={styles.graph_elements}>
                <GraphElements/>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default GraphView;
