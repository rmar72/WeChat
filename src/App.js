import React, { Component } from 'react';
import './App.css';

import MessageList from './components/MessageList'
import SendMessageForm from './components/SendMessageForm'
import RoomList from './components/RoomList'
import NewRoomForm from './components/NewRoomForm'

class App extends Component {
  render() {
    return (
      <div>
        <h1> Hello Mundo </h1>
      </div>
    );
  }
}

export default App;
