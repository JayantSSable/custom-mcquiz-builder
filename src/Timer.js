import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
require('antd/dist/antd.css');
class ShowTimer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            elapsed: 0
        }
    }
    componentDidMount() {
        this.timer = setInterval(this.tick, 50);
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick = () => {
        this.setState({ elapsed: new Date() - this.props.start });
    }
    render() {
        var elapsed = Math.round(this.state.elapsed / 100);
        var seconds = (elapsed / 10).toFixed(1);
        return <p><b><div id="timerPara">{seconds} </div> seconds</b></p>;
    }
}

export default ShowTimer;