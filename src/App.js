import React, { Component } from "react";
import { DragDropContextProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import WorkflowPage from "./Components/Workflow/WorkflowPage";
import "./App.css";

class App extends Component {
  render() {
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className="App">
          <WorkflowPage />
        </div>
      </DragDropContextProvider>
    );
  }
}

export default App;

// import React, { Component } from 'react';
// import WorkflowSelector from "./components/WorkflowSelector";
// import VXComponent from "./components/VXComponent";
// import MyDiagram from "./Components/MyDiagram";
//
// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div>lets try styled components</div>
//         <WorkflowSelector />
//         <div style={{ width: "100%", height: "100%", minHeight: "500px", backgroundColor: "lightblue" }}>
//           <MyDiagram />
//         </div>
//       </div>
//     );
//   }
// }
//
// export default App;
// <header className="App-header">
//   <img src={logo} className="App-logo" alt="logo" />
//   <h1 className="App-title">Make a tree</h1>
// </header>
// <div style={{ minHeight: "500px", minWidth: "500px" }}>
//   <VXDendo width="500px" height="500px" />
// </div>
