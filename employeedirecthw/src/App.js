import React from 'react';
import Main from "./components/Main/main";
import Wrapper from "./components/Wrapper/wrapper";
import Header from "./components/Header/header";
import "./App.css";

function App() {
  return (
    <div className="App">
   <Wrapper>
     <Header />
     <Main />
   </Wrapper>
    </div>
  );
}

export default App;