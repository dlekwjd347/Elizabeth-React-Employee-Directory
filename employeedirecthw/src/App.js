import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import Navbar from './components/Navbar';
import API from './utils/API';
class App extends Component {
state = {
  fakePeople:[{}]
}

componentDidMount(){
  API.getUsers().then(result => {
    this.setState({
      fakePeople: result.data.results
    });
  });
}
render (){
  return (
  <Wrapper>
    <Navbar />
    {/* add other components here */}
  </Wrapper>
  );
}
}

export default App;