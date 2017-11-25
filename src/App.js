import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from "react-router-dom";
import StartPage from "./StartPage";
import QuizeDashboard from "./QuizDashboard";
import LeaderBoard from "./LeaderBoard";
class App extends Component {
  render() {
    return (
      <div className="App">
        <div>
          <h1>Quiz Competition</h1>
        </div>
        <BrowserRouter>
          <div>
            <Route path="/" exact component={StartPage} />
            <Route path="/quiz" exact component={QuizeDashboard} />
            <Route path="/leaderBoard" exact component={LeaderBoard} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
