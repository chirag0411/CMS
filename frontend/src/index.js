import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import routes from './routes/index';
import store, { history } from './store/store';

const target = document.querySelector('#root')

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        {routes}
      </div>
    </ConnectedRouter>
  </Provider>,
  target
)
