import React, { Component } from 'react';
import './App.css'; // Optional: if you want to include custom styles

class DigitalClock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            time: new Date()
        });
    }

    render() {
        const { time } = this.state;
        const dateString = time.toLocaleDateString();
        const timeString = time.toLocaleTimeString();
        return (
            <div className="clock">
                <p>{dateString}</p>
                <p>{timeString}</p>
            </div>
        );
    }
}

function App() {
    return (
        <div className="App">
            <DigitalClock />
        </div>
    );
}

export default App;
