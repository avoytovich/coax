import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import './App.css';
import ChooseOne from './../ChooseOne/ChooseOne';

export class App extends React.Component {
  render() {
    return (
      <Grid>
        <Row>
          <Col xs={12} sm={12} md={12}>
            <ChooseOne />
          </Col>
        </Row>
      </Grid>
    )
  }
}
