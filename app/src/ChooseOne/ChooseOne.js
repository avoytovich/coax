import React from 'react';
import { Grid, Row, Col, FormGroup } from 'react-bootstrap';
import './ChooseOne.css';
import { Checkbox } from './Checkbox';
import { connect } from 'react-redux';
import { ChooseOneSuccess } from './ChooseOneActions';
import { bindActionCreators } from 'redux';
import { dummyDate } from './../../assets/dummyDate';

const items = [
  'notebooks',
  'tablets',
  'mobile'
];

export class ChooseOne extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isChecked: []
    }
  }

  componentDidMount = () => {
    this.selectedCheckboxes = new Set();
  }

  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    };
    this.props.ChooseOneSuccess(this.selectedCheckboxes);
  }

  createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  );

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  );

  info = checked => {
    if(checked in dummyDate) {
      return (
        dummyDate[checked].map(each => { 
          return (
            <tbody key={each.id}>
              <tr>
                <td>{each.id}</td>
                <td>{each.name}</td>
                <td>{each.rating}</td>
                <td>{each.price}</td>
              </tr>
            </tbody>
          )
        })
      )
    }
  }

  render() {
    const { isChecked } = this.props.choose;
    return (
      <Grid>
        <Row>
          <Col xs={2} sm={2} md={2}>
            <FormGroup>
              {this.createCheckboxes()}
            </FormGroup>
          </Col>
          <Col xs={10} sm={10} md={10}>
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th>Product Name</th>
                  <th>Rating</th>
                  <th>Price</th>
                </tr>
              </thead>
              {isChecked && isChecked.map(checked => this.info(checked))}
            </table>
          </Col>
        </Row>
      </Grid>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ChooseOneSuccess}, dispatch);
}

function mapStateToProps(state) {
  return {
    choose: state
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChooseOne);
