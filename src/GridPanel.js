import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';

var colHeads = ["1", "2", "3", "4", "5", "6", "7", "8"];

var buttons = [
  ['(S) AP Grand', '(S) LL Rhodes', '(S) SonicC Clav', '(S) K Classic B3', '(S) Rock Organ', '(S) Softstring', '(S) Music Box', '(S) Vintage Vince' ],
  ['(S) K Concert Piano', '(S) LL Wurli', '(S) Super Clav', '(S) K Perfect Str Org', '(S) Gimme Some', '(S) K Solo Strings', '(S) SuperSynth', '(S) Hollow Pad' ],
  ['(S) AK Piano','(S) LL Mark 5','(S) AutoWah Clav','(S) K Soul Perc Org','(S) Extremist','(S) K String Ens','(S) Jump VH','(S) PulseZync'],
  ['(S) Memory Motel EP','(S) K Stevie\'s Rhodes','(S) AutoWah Clav 2','(S) Amazing Day','(S) Vibrato Time','(S) New Strings','(S) Voice Choir','(S) PCM Synth'],
  ['(S) Morphine','(S) K Austin Wurli','(S) K Crisp Clav', null,'(S) Jazzmaster','(S) The Strings',null,'(S) ADSRSync'],
  [null,'(S) RMI','(S) K Joe\'s Clav',null,'(S) Deep Rock','(S) String Pad', null,'(S) SuperPulse'],
  [null, null,'(S) K Heartbreaker',null,'(S) 880000088','(S) String Pad Faster',null,'(S) Brain Salad Lead'],
  [null,null,null,null,'(S) Vox Cont','(S) K Adagio Strings',null,'(S) Soft Mini Sweep']
];

class GridPanel extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col className="random-access-edge-cell" span={1}>col-1</Col>
          <Col span={22}>
            <Row>
            {colHeads.map((label, iCol) => {
            return (
              <Col className="random-access-button-cell" key={iCol} span={3}>
                <Button block className="random-access-button-heading">{colHeads[iCol]}</Button>
              </Col>
            )})}
            </Row>
            {buttons.map((row, iRow) => {
              return (
                <Row key={iRow}>
                  {row.map((label, iCol) => {
                  return (
                    <Col className="random-access-button-cell" key={(iRow*8)+iCol} span={3}>
                      { label != null && <Button block className="random-access-button">{label}</Button> }
                    </Col>
                  )})}
                </Row>
              )
            })}
          </Col>
          <Col className="random-access-edge-cell" span={1}><Button block className="random-access-button-heading">&lt;&lt;</Button></Col>
        </Row>
      </div>
    );
  }
}

export default GridPanel;
