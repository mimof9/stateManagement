import React, { Component } from "react"
import { connect } from 'react-redux'

// ownProps为容器组件的props对象
const mapStateToProps = (state, ownProps) => {
    return {
        x: state.x,
        asyncMsg: state.asyncMsg
    }
}

function AsyncMethod(dispatch, getState) {
    dispatch({ type: 'ASYNCING' })
    return new Promise((resolve, reject) => {
        setTimeout(function() {
            resolve('success')
        }, 1000)
    }).then((msg) => {
        dispatch({ type: 'ASYNCEND' })
        dispatch({ type: 'INCREAMENT' })
    }, (err) => {
        dispatch({ type: 'ASYNCEND' })
    })
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        increment: () => {
            dispatch({ type: 'INCREAMENT' })
        },
        decrement: () => {
            dispatch({ type: 'DECREAMENT' })
        },
        incrementAsync: () => {
            dispatch(AsyncMethod)
        },
        decrementAsync: () => {
            dispatch({ type: 'DECREMENT_ASYNC' })
        }
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <p>
                    计数：<span>{this.props.x}</span>
                    <button onClick={() => {this.props.increment()}}>x+</button>
                    <button onClick={() => {this.props.decrement()}}>x-</button>
                    <button onClick={() => {this.props.incrementAsync()}}>异步x+</button>
                    <button onClick={() => {this.props.decrementAsync()}}>异步x-</button>
                    <span>{this.props.asyncMsg}</span>
                </p>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
