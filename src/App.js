import React, { Component } from 'react';
import { Tabs } from 'antd';
import RandomAccessPanel from './RandomAccess'
import GridPanel from './GridPanel'
import './App.css';

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

class App extends Component {
  render() {
    return (
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Tab 1" key="1">
          <RandomAccessPanel/>
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          <GridPanel/>
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    );
  }
}

export default App;
