import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import App from './component/App'
// redux
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'  // Provider把store传递给react
// thunk异步
import reducer from './reducer'
import thunk from 'redux-thunk'
// saga异步
import watchIncrementAsync from './saga'
import createSagaMiddleware from 'redux-saga'


const sagaMiddleware = createSagaMiddleware()   // saga中间件

const store = createStore(reducer, applyMiddleware(thunk, sagaMiddleware))

sagaMiddleware.run(watchIncrementAsync) // 开启saga的全局监听

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'))
