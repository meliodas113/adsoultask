import React from "react";
import Home from "./screens/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Statistics from "./screens/Statistics/Statistics";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/statistics" component={Statistics} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
