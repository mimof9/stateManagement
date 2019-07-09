import { combineReducers } from 'redux'

// reducer纯函数
// 拆分reducer x由counterX管理
function counter(state = 0, action) {
    switch(action.type) {
        case 'INCREAMENT':
            return state + 1
        case 'DECREAMENT':
            return state - 1
        default:
            return state
    }
}

function asyncMsg(state = '异步请求完成', action) {
    switch(action.type) {
        case 'ASYNCING':
            return '正在异步请求'
        case 'ASYNCEND':
            return '异步请求完成'
        default:
            return state
    }
}
// 合并reducer
const reducer = combineReducers({
    x: counter,
    asyncMsg
})

export default reducer
