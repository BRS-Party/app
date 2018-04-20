import React from 'react';
import {Row, Col, Preloader} from 'react-materialize'

export default () => (
  <Row>
    <Col s={4}>
      <Preloader size='big'/>
    </Col>
    <Col s={4}>
      <Preloader flashing/>
    </Col>
    <Col s={4}>
      <Preloader size='small'/>
    </Col>
  </Row>
)
