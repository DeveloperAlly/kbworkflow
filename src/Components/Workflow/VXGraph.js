import React from "react";
import { Graph, DefaultLink, DefaultNode } from "@vx/network";
import { LinkVertical } from "@vx/shape";

const nodes = [
  { x: 50, y: 20 },
  { x: 200, y: 300 },
  { x: 300, y: 40 },
  { x: 400, y: 100 }
];
const links = [
  { source: nodes[0], target: nodes[1] },
  { source: nodes[1], target: nodes[2] },
  { source: nodes[2], target: nodes[0] },
  { source: nodes[3], target: nodes[0] },
  { source: nodes[3], target: nodes[1] }
];

const dataSample = {
  nodes,
  links
};

export default ({ width, height }) => {
  return (
    <svg width={width} height={height}>
      <rect width={width} height={height} rx={14} fill="#272b4d" />
      <Graph
        graph={dataSample}
        linkComponent={({ link }) => (
          <LinkVertical
            data={link}
            fill="none"
            stroke="white"
            strokeWidth="2"
          />
        )}
        nodeComponent={DefaultNode}
      />
    </svg>
  );
};
