import React from 'react'
import PropTypes from 'react-types'
import { Router } from 'dva/router'
import App from './routes/app'

const registerModel = (app, model) => {
  if (!(app._models.filter(m => m.namespace === model.namespace).length === 1)) {
    app.model(model)
  }
};
const Routers = function ({ history, app }) {
  const routes = [
    {
      path: '/',
      component: App,
      getIndexRoute (nextState, cb) {
        require.ensure([], require => {
          registerModel(app, require('./models/dashboard'))
          cb(null, {component: require('./routes/dashboard/')})
        }, 'dashboard')
      },
    }]
};

Routers.propTypes = {
  history: PropTypes.object,
  app: PropTypes.app
};

export default Routers
