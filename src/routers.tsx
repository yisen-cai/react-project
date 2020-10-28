import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hello from "./views/HelloView/HelloView";
import Header from "./components/HeaderCom";

const reactRouter = (
  <Router>
    <div>
      <Header
        logo="logo"
        title="GlanceBar"
        userDetails="user"
        isSideOpen={true}
      />
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/hello">
          <Hello message="hello" />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  </Router>
);

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default reactRouter;
