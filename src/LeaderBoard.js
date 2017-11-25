import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Row, Col } from 'antd';
require('antd/dist/antd.css');

class ContestantRow extends React.Component {
    render() {
        return (
            <div>
                <Row>
                    <Col span="6">
                        {this.props.name}
                    </Col>  
                    <Col span="6">
                        {this.props.id}
                    </Col>
                    <Col span="6">
                        {this.props.points}
                    </Col>
                    <Col span="6">
                        {this.props.time}
                    </Col>
                </Row>
            </div>
        );
    }
}

class LeaderBoard extends React.Component {
    createSingleRow(name, id, points, time) {
        return <ContestantRow name={name} id={id} points={points} time={time} />;
    }
    render() {
        return (
            this.createSingleRow("jay", "i325091", 10, 120)
        )
    }
}

export default LeaderBoard;