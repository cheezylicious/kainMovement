import React, { Component } from "react";
import { NavigationBar } from "./components/NavigationBar";
import { Home } from "./Home";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NoMatch } from "./NoMatch";
import { Mission } from "./Mission";
import { Shop } from "./Shop";
import { Story } from "./Story";
import { Services } from "./Services";
import { Footer } from "./components/Footer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <React.Fragment>
        <NavigationBar />

        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/mission" component={Mission} />
            <Route path="/shop" component={Shop} />
            <Route path="/story" component={Story} />
            <Route path="/services" component={Services} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
