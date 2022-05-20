import React, { useContext, useEffect, useState } from "react";
import Tree from "./Tree";
import logo from "./logo.svg";
import treeData from './tree-data'
import "./App.css";


function App() {
  const [treeList, setTreeList] = useState<any>([])

  useEffect(()=> {
    setTimeout(() => {
      setTreeList(treeData)
    });
  },[])

  return (
    <div className="App">
      <Tree data={treeList}/>
    </div>
  );
}

export default App;
