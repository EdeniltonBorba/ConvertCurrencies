import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Board from './pages/board/index.js';
import History from './pages/history/index.js';

export default function App() {
  return (
    <Router>
      <React.Fragment>
        <div>
          <Switch>
            <Route exact path="/"><Board /></Route>
            <Route exact path="/history"><History /></Route>
          </Switch>
        </div>
      </React.Fragment>
    </Router>
  );
}

