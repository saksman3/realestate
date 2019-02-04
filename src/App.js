import React, { Component } from 'react';
import Header from './components/Header';
import Dashboard from './components/dashboard';
class App extends Component {
  render() {
    
    return (
     <React.Fragment>
      <Header/>
       <Dashboard/>
     </React.Fragment>
    );
  }
}

export default App;
