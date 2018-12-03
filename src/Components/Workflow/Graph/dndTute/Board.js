import React, { Component } from "react";
import BoardSquare from "./BoardSquare";
import Knight from "./Knight";
import Castle from "./Castle";
import Pawn from "./Pawn";

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
  renderSquare = (i, pieces) => {
    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
      <div key={i} style={styles.square}>
        <BoardSquare
          x={x}
          y={y}
          movePiece={this.props.movePiece}
          addPiece={this.props.addPiece}
          pieces={this.props.pieces}
        >
          {this.renderPiece(x, y, this.props.pieces)}
        </BoardSquare>
      </div>
    );
  };

  renderPiece = (x, y, pieces) => {
    //pieces is an array of objects
    let chessPiece = pieces.map(piece => {
      if (x === piece.position[0] && y === piece.position[1]) {
        console.log("RENDERME", piece);
        switch (piece.type) {
          case "knight":
            console.log("RENDERKNIGHT");
            return <Knight id={piece.id} />;
          case "castle":
            return <Castle id={piece.id} />;
          case "pawn":
            return <Pawn id={piece.id} />;
          default:
            return null;
        }
      }
    });
    return chessPiece;
  };

  render() {
    const squares = [];
    for (let i = 0; i < 64; i++) {
      // squares.push(this.renderSquare(i, this.props.piecePositions));
      squares.push(this.renderSquare(i, this.props.pieces));
    }
    return <div style={styles.container}>{squares}</div>;
  }
}

export default Board;
