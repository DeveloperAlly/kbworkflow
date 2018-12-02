import React, { Component } from "react";
import BoardSquare from "./BoardSquare";
import Knight from "./Knight";
import Castle from "./Castle";

const styles = {
  container: {
    backgroundColor: "paleblue",
    height: "100%",
    width: "100%",
    display: "flex",
    flexWrap: "wrap"
  },
  square: {
    width: "12.5%",
    height: "12.5%"
  }
};

class Board extends Component {
  renderSquare = (i, piecePositions) => {
    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
      <div key={i} style={styles.square}>
        <BoardSquare
          x={x}
          y={y}
          movePiece={this.props.movePiece}
          piecePositions={this.props.piecePositions}
        >
          {this.renderPiece(x, y, this.props.piecePositions)}
        </BoardSquare>
      </div>
    );
  };

  renderPiece = (x, y, piecePositions) => {
    console.log("renderboardposition");
    if (piecePositions.knight) {
      // console.log("piecePositions.castle", piecePositions.castle[0]);
      if (x === piecePositions.knight[0] && y === piecePositions.knight[1]) {
        console.log("render knight position", x, y);
        return <Knight id="knight" />;
      }
    }
    if (piecePositions.castle) {
      // console.log("piecePositions.castle", piecePositions.castle[0]);
      if (x === piecePositions.castle[0] && y === piecePositions.castle[1]) {
        console.log("render castle");
        return <Castle id="castle" />;
      }
    }
    return null;
  };

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i, this.props.piecePositions));
    }
    return <div style={styles.container}>{squares}</div>;
  }
}

export default Board;
