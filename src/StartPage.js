import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Form, Row, Col, Button, Icon, Radio, Input } from 'antd';
const FormItem = Form.Item;
require('antd/dist/antd.css');


class StartPage extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push('/quiz');
  }
  render() {
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem>
          {<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Your Name" />}
        </FormItem>
        <FormItem>
          {<Input prefix={<Icon type="name" style={{ fontSize: 13 }} />} type="user" placeholder="SAP ID" />}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
          >
            Proceed to Quiz
          </Button>
        </FormItem>
      </Form>
    );
  }
}
 export default StartPage;