import { put, take, takeEvery } from 'redux-saga/effects'

const delay = (ms) => new Promise(res => setTimeout(res, ms))

function* incrementAsync() {
    yield put({ type: 'ASYNCING' })
    yield delay(1000)
    yield put({ type: 'DECREAMENT' })
    yield put({ type: 'ASYNCEND' })
}

export default function* watchIncrementAsync() {
    // yield takeEvery('DECREMENT_ASYNC', incrementAsync)
    while (true) {
        const action = yield take('DECREMENT_ASYNC')
        yield put({ type: 'ASYNCING' })
        yield delay(1000)
        yield put({ type: 'DECREAMENT' })
        yield put({ type: 'ASYNCEND' })
    }
}
