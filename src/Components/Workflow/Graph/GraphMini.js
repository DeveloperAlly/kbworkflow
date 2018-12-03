import React, { Component } from "react";
import { ArcherContainer, ArcherElement } from "react-archer";
import VXDendo from "../VXDendo";

const styles = {
  container: {
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%"
    // backgroundColor: "pink"
  },
  rootStyle: {
    display: "flex",
    justifyContent: "center"
  },
  rowStyle: {
    margin: "200px 0",
    display: "flex",
    justifyContent: "space-between"
  },
  boxStyle: {
    padding: "10px",
    border: "1px solid black"
  }
};

const relationTest = [
  {
    from: { anchor: "bottom" },
    to: { anchor: "top", id: "element2" }
  },
  {
    from: {anchor: "bottom" },
    to: { anchor: "top", id: "element3"}
  },
  {
    from: {anchor: "bottom" },
    to: { anchor: "top", id: "element4"}
  }
];

class GraphMini extends Component {
  render() {
    return (
      <div style={styles.container}>
        <ArcherContainer strokeColor="#6ebdc2">
          <div style={styles.rootStyle}>
            <ArcherElement id="root" relations={relationTest}>
              <div style={styles.boxStyle}>Root</div>
            </ArcherElement>
          </div>

          <div style={styles.rowStyle}>
            <ArcherElement
              id="element2"
              strokeColor="ff1111"
              relations={[{
                  from: { anchor: "right" },
                  to: { anchor: "left", id: "element3" },
                  // label: <div style={{ marginTop: "-20px" }}>Arrow 2</div>
                }
              ]}
            >
              <div style={styles.boxStyle}>Element 2</div>
            </ArcherElement>

            <ArcherElement id="element3">
              <div style={styles.boxStyle}>Element 3</div>
            </ArcherElement>

            <ArcherElement
              id="element4"
              relations={[
                // {
                  // from: { anchor: "left" },
                  // to: { anchor: "right", id: "root" },
                  // label: "Arrow 3"
                // }
                ]
              }
            >
              <div style={styles.boxStyle}>Element 4</div>
            </ArcherElement>
          </div>
        </ArcherContainer>
      </div>
    );
  }
}

export default GraphMini;
