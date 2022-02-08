import React, { useState, useReducer } from 'react';

type Action = { type: 'increase' } | { type: 'decrease' }; // 액션에 대한 타입을 하나의 타입에 정의

function reducer(state: number, action: Action): number {
    switch(action.type) {
        case 'increase':
            return state + 1;
        case 'decrease':
            return state - 1;
        default:
            throw new Error('Unhandled action type')
    }
}

function Counter() {
    // const [count, setCount] = useState<number>(0);
    // const onIncrease = (): void => setCount(count + 1);
    // const onDecrease = (): void => setCount(count - 1);
    const [count, dispatch] = useReducer(reducer, 0);
    const onIncrease = () => dispatch({ type: 'increase' });
    const onDecrease = () => dispatch({ type: 'decrease' });

    return (
        <div>
            <h1>{count}</h1>
            <div>
                <button onClick={onIncrease}>+1</button>
                <button onClick={onDecrease}>-1</button>
            </div>
        </div>
    )
}
// const Counter = () => {

// }

export default Counter;