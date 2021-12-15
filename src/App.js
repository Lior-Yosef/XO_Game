import logo from './logo.svg';
import './App.css';
import React from 'react';
import Headline from './component/headline';
import Main from "./component/main";


class App extends React.Component {

  render() {
    return (
      <div className="App">
        < Headline />
        < Main />
        
      </div>
    );
};
}
export default App;