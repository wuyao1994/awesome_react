import React from 'react';
import './index.html'
import 'babel-polyfill'
import dva from 'dva'
import createLoading from 'dva-loading'
import {browserHistory} from 'dva/router'
import {message} from 'antd'

//1.init app
const app = dva({
  ...createLoading({
    effect: true,
  }),
  history: browserHistory,
  onError(error) {
    message.error(error.message)
  },
});


app.model(require('./models/app'));

app.router(require('./router'));

app.start('#root')

