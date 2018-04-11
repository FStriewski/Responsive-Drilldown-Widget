import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Drilldown from './filter/drilldown'
import ControlledExpansionPanels from './filter/panel'
import $ from 'jquery';
import 'foundation-sites';
import './styles/App.css';

class App extends Component {

  componentDidMount() {

    $(document).foundation();

  }
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" render={() => <Redirect to="/drilldown" />} />
          <Route exact path="/drilldown" component={Drilldown} />

          <Route exact path="/panel" component={ControlledExpansionPanels} /> 
        </div>
      </Router>
    );
  }
}

export default App;

