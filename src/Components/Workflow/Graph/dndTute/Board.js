import React, { Component } from "react";
import BoardSquare from "./BoardSquare";
import Knight from "./Knight";

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
  // renderSquare = (i, [knightX, knightY]) => {
  //   const x = i % 8;
  //   const y = Math.floor(i / 8);
  //   const isKnightHere = x === knightX && y === knightY;
  //   const black = (x + y) % 2 === 1;
  //   const piece = isKnightHere ? <Knight /> : null;
  //
  //   return (
  //     <div
  //       onClick={() => this.props.moveKnight(x, y)}
  //       key={i}
  //       style={styles.square}
  //     >
  //       <Square black={black}>{piece}</Square>
  //     </div>
  //   );
  // };
  //
  // state = {
  //   knightPosition: [0,0]
  // };
  //
  // moveKnight = (toX, toY) => {
  //   console.log("moveKnight");
  //   this.setState({ knightPosition: [toX, toY] });
  // };
  componentDidUpdate() {
    console.log(this.props);
  }

  renderSquare = (i, knightPosition) => {
    const x = i % 8;
    const y = Math.floor(i / 8);

    return (
      <div
        // onClick={() => this.props.moveKnight(x, y)}
        key={i}
        style={styles.square}
      >
        <BoardSquare x={x} y={y} moveKnight={this.props.moveKnight}>
          {this.renderPiece(x, y, this.props.knightPosition)}
        </BoardSquare>
      </div>
    );
  };

  renderPiece = (x, y, [knightX, knightY]) => {
    if (x === knightX && y === knightY) {
      return <Knight />;
    }
  };

  render() {
    console.log(this.props);
    const squares = [];
    for (let i = 0; i < 64; i++) {
      squares.push(this.renderSquare(i, this.props.knightPosition));
    }
    return (
      <div style={styles.container}>{squares}</div>
    );
  }
}

export default Board;
