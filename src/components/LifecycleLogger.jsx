import {useEffect, useState} from "react";

const LifecycleLogger = () => {
    const [count, setCount] = useState(0);

    // ComponentDidMount
    useEffect(() => {
        console.log("Component mounted!");

        // ComponentWillUnmount
        return () => {
            console.log("Component unmounted!");
        }
    }, [])

    // ComponentDidUpdate
    useEffect(() => {
        if (count > 0) {
            console.log("Component updated!", count);
        }
    }, [count])

    const incrementCount = () => {
        // we don't do this setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        // setCount(count + 1)
        // this got a delay effect mechanism, so we use the prevCount for the latest value
        setCount((prevCount) => (prevCount + 1));
    }
    return (
        <div className="logger-container">
            <h2>LifecycleLogger (Function Component)</h2>
            <p>
                Count: {count}
            </p>
            {/*The function you give is a callback
            Because you gave it to onClick
            And they call it back later when the event happens*/}
            {/*<button onClick={() => {
                setCount(count + 1)
            }} className="secondary-btn">
                Update
            </button>*/}
            <button onClick={incrementCount} className="secondary-btn">
                Update
            </button>
        </div>
    );
}

export default LifecycleLogger;