import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from '../src/components/website/home';
import People from '../src/components/website/people';
import Research from '../src/components/website/research';
import Facilities from '../src/components/website/facilities';
import AppMenu from '../src/components/website/menu';
import AboutMe from '../src/components/website/aboutme';
import Publications from "../src/components/website/publications";
import ReactGA from 'react-ga';

class App extends React.Component {

  initializeReactGA() {
    ReactGA.initialize('UA-151336697-1', {
      debug: true,
      titleCase: false,
      gaOptions: {
        siteSpeedSampleRate: 100
      }
    });
    ReactGA.pageview(window.location.pathname);
  }

  render() {

    return (
      <>
        <Router>
          <div>
            <AppMenu />
            {this.initializeReactGA()}
            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              <Route path="/" exact={true}>
                <Home />
              </Route>
              <Route path="/aboutme">
                <AboutMe />
              </Route>
              <Route path="/people">
                <People />
              </Route>
              <Route path="/research">
                <Research />
              </Route>
              <Route path="/facilities">
                <Facilities />
              </Route>
              <Route path="/publications">
                <Publications />
              </Route>
            </Switch>
          </div>
        </Router>
      </>
    )
  }
}


export default App;
