import React, { Component } from 'react';

import { Row, Col, Button } from 'antd';

var buttons = [
  ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5', 'Button 6', 'Button 7', 'Button 8' ],
  ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5', 'Button 6', 'Button 7', 'Button 8' ],
  ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5', 'Button 6', 'Button 7', 'Button 8' ],
  ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5', 'Button 6', 'Button 7', 'Button 8' ],
  ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5', 'Button 6', 'Button 7', 'Button 8' ],
  ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5', 'Button 6', 'Button 7', 'Button 8' ],
  ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5', 'Button 6', 'Button 7', 'Button 8' ],
  ['Button 1', 'Button 2', 'Button 3', 'Button 4', 'Button 5', 'Button 6', 'Button 7', 'Button 8' ]
];

class RandomAccessPanel extends Component {
  render() {
    return (
      <div>
        {buttons.map((row, ir) => {
          return (
            <Row key={ir}>
              {row.map((label, ic) => {
              return (
                <Col key={(ir*8)+ic} span={2}>
                  <Button block style={{height: 100, whiteSpace: 'normal'}}>Button {(ir*8)+ic+1}</Button>
                </Col>
              )
            })}
            </Row>
          )
        })}
      </div>
    );
  }
}

export default RandomAccessPanel;
