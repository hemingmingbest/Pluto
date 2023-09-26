import React from 'react';
import './App.css';
import ComSending from "./component/demo/ComSending/ComSending";
import ButtonColorChange from "./component/demo/ButtonColorChange/ButtonColorChange";
import StateNotSync from "./component/demo/StateNotSync";

function App() {
    return (
        <div className="App">
            {/*<header className="App-header">*/}
            {/*  <img src={logo} className="App-logo" alt="logo" />*/}
            {/*  <p>*/}
            {/*    Edit <code>src/App.tsx</code> and save to reload.*/}
            {/*  </p>*/}
            {/*  <a*/}
            {/*    className="App-link"*/}
            {/*    href="https://reactjs.org"*/}
            {/*    target="_blank"*/}
            {/*    rel="noopener noreferrer"*/}
            {/*  >*/}
            {/*    Learn React*/}
            {/*  </a>*/}
            {/*</header>*/}
            <ComSending/>
            <hr/>
            <ButtonColorChange/>
            <hr/>
            <StateNotSync/>
        </div>
    );
}

export default App;
