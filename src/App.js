import React, { Component } from 'react';

import MyPost from './containers/MyPost/MyPost';
import {BrowserRouter} from 'react-router-dom'
class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">
        <MyPost />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;