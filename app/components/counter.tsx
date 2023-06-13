import { useState } from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
        setCount(count + 1);
    }

    const decrementCounter = () => {
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return (
        <div>
            <h1 className="componentHeading">Counter</h1>
            <p className={`${count >= 7 && "greater-than-seven"} ${count >= 10 && "greater-than-ten"} ${count < 0 && "less-than-zero"}`}>Count: {count}</p>
            <button className="fancyButton" onClick={() => incrementCounter()}>Increment</button>
            <button className="fancyButton" onClick={() => decrementCounter()}>Decrement</button>
            <button className="fancyButton" onClick={() => reset()}>Reset</button>
        </div>
    )
}

export default Counter;
