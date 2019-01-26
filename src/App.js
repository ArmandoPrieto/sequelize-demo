import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  init(){
    fetch('http://localhost:3000/api/users')
      .then(function(response) {
        return response.json();
      })
      .then(function(myJson) {
        console.log(myJson);
      });
      let data = {name: 'Ruben Dario'};
      fetch('http://localhost:3000/api/users', {
            method: 'POST', // or 'PUT'
            body: JSON.stringify(data), // data can be `string` or {object}!
            headers:{
              'Content-Type': 'application/json'
            }
        })
          .then(response => {
            if (response.status === 200) {
              return response.json();
            } else {
              throw new Error('Something went wrong on api server!');
            }
          })
          .then(response => {
            console.debug(response);
            // ...
          }).catch(error => {
            console.error(error);
          });
  }
  render() {
    this.init();
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
