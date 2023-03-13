import React from 'react'
import { connect } from 'react-redux'
import { increment, decrement} from "../action/action";

const Counter = (props) => {
    const { count, increment, decrement } = props

    return (
        <div>
            <h1>Счетчик: {count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        count: state.count
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => {
            dispatch(increment())
        },
        decrement: () => {
            dispatch(decrement())
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter)
