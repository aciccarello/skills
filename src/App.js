import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SkillsList from './SkillsList';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Anthony's Web Skills</h1>
        </header>
        <p className="App-intro">This application is under development</p>
        <SkillsList />
      </div>
    );
  }
}
