import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import About from "./About";
import Shop from "./Shop";
import ItemDetail from "./Itemdetail";
import Nav from './Nav';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <p>React Router introduction, following {' '}
            <a
              className="App-link"
              href="https://www.youtube.com/watch?v=Law7wfdg_ls"
              target="_blank"
              rel="noopener noreferrer"
            >
              Dev Ed's tutorial
            </a>
          </p>
        </header>

        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/about" component={About} />
            <Route path="/shop" exact component={Shop} />
            <Route path="/shop/:id" component={ItemDetail} />
          </Switch>
        </div>
      </div>
    </Router>
  );
}

const Home: React.FC = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
