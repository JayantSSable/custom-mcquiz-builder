import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import StartPage from "./StartPage";
import QuizeDashboard from "./QuizDashboard";
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Quiz Competition</h1>
        </header>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={StartPage} />
            <Route path="/quiz" exact component={QuizeDashboard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
