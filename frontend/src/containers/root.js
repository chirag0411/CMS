import invariant from 'invariant';
import React from 'react';
import { Provider } from 'react-redux';
import { Router } from "react-router-dom";
import routes from '../routes/index';

export default class Root extends React.Component {
  renderRouter() {
    invariant(
      this.props.routingContext || this.props.routerHistory,
      '<Root /> needs either a routingContext or routerHistory to render.'
    );
    return (
      <Router onUpdate={() => window.scrollTo(0, 0)} history={this.props.routerHistory}>
        {routes}
      </Router>
    );
  }

  render() {
    return (
      <div>
        <Provider store={this.props.store}>
          {this.renderRouter()}
        </Provider>
      </div>
    );
  }
}