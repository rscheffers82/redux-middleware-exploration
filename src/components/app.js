import React, { Component } from 'react';
import UserList from './user_list';

export default class App extends Component {
  render() {
    return (
      <div className="main-app">
        <h2>Contacts</h2>
        <div className="user-list-area">
          <UserList />
        </div>
      </div>
    );
  }
}
