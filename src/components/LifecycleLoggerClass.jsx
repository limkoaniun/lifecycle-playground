import {Component} from 'react';

/*constructor()
render()
componentDidMount()

// state update
render()
componentDidUpdate()

// another update
render()
componentDidUpdate()

// when leaving page
componentWillUnmount()*/
class LifecycleLoggerClass extends Component {
    constructor(props) {
        super(props); // we need to call super() in order to use the props in the constructor
        // and this super() is from the Component class we are inheriting from
        console.log("Component initialized!");
        this.state = {
            count: 0
        } // this equivalent to const [count, setCount] = useState(0);
    }

    componentDidMount() {
        // we do API calls in this lifecycle method AKA step 1 Mounting
        console.log("Component mounted!");
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count) {
            console.log("Component updated!", this.state.count);
        }
    }

    componentWillUnmount() {
        // we do cleanup in this lifecycle method AKA step 4 Unmounting
        console.log("Component unmounted!");
    }

    // why we need to use arrow function here?
    // => An arrow function keeps the surrounding this, while a normal function does not.
    // => Arrow functions capture this from where they are created, which is the component instance.
    // Arrow functions do not create their own this
    // They inherit this from the class instance
    // That keeps this valid inside event handlers
    // Regular method: needs manual binding in constructor
    incrementCount = () => {
        this.setState(prevState => ({count: prevState.count + 1}));
    }

    render() {
        return (
            <div className="logger-container">
                <h2>LifecycleLogger (Class Component)</h2>
                <p>{this.props.message}</p>
                <p>Count: {this.state.count}</p>
                <button onClick={this.incrementCount} className="secondary-btn">
                    Increment
                </button>
            </div>
        )
    }
}

export default LifecycleLoggerClass;