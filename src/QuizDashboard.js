import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Form, Button, Icon, Radio } from 'antd';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'antd';
import ShowTimer from './Timer';
const FormItem = Form.Item;
require('antd/dist/antd.css');

var quizData = require('./data.json'); // forward slashes will depend on the file location
console.log(quizData);

const RadioGroup = Radio.Group;

class SingleButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const radioStyle = {
            display: 'block',
            height: '30px',
            lineHeight: '30px',
        };
        return (
            <Radio style={radioStyle} value={this.props.idx} name={this.props.value}>{this.props.value}</Radio>
        );
    }
}

class GroupOfRadio extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            optionSelected: Array(10).fill(null),
        };
    }

    onChange = (e) => {
        console.log('radio checked', e.target.value, this.props.index);
        this.state.optionSelected[this.props.index] = e.target.value;
    }

    renderRadio(idx, item) {
        return <SingleButton idx={idx} value={item} />;
    }

    render() {
        return (
            <RadioGroup class="GroupRadio" onChange={this.onChange} index={this.props.index}>
                {
                    this.props.groupItems.map((item, index) => (
                        this.renderRadio(index, item)
                    ))}
            </RadioGroup>
        );
    }
}

class QuizDashBoard extends React.Component {
    renderGroup(groupObj, idx) {
        var options = [];
        for (var key in groupObj.options) {
            options.push(groupObj.options[key]);
        }
        return <GroupOfRadio groupItems={options} index={idx} />
    }

    render() {
        return (
            <Form>
                <div class="quiz-dashboard" style={{ background: '#ECECEC', padding: '30px' }}>
                    {
                        quizData.map((item, index) => (
                            <Row>
                                <Card title={item.que}>
                                    {this.renderGroup(item, index)}
                                </Card>
                                <div class="separator" style={{ background: '#ECECEC', padding: '15px' }} />
                            </Row>
                        ))
                    }
                </div>
                <div>
                    <Row>
                        <Col>
                            <Link to="/leaderBoard">LeaderBoard</Link>
                        </Col>
                        <span className="ant-divider" />
                        <Col>
                            <ShowTimer start={Date.now()} />
                        </Col>
                    </Row>
                </div>
            </Form>
        );
    }
}

export default QuizDashBoard;
