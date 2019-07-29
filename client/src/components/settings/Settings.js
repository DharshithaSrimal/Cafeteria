import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col, Form, Button, Table } from 'react-bootstrap';
import './Settings.css';
import { connect } from 'react-redux';
import { setMealOrder } from '../../store/actions/SettingsActions';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mealOrders: [],
      mealName: '',
      description: '',
      mealType: '',
      errors: {}
    };
  }

  componentDidMount() {
    fetch('/mealorders')
      .then(res => res.json())
      .then(mealOrders =>
        this.setState({ mealOrders }, 
          // () =>
          // console.log('mealOrders fetched...', mealOrders)
        )
      );
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onMealTypeSelect = e => {
    this.setState({
      mealType: e.target.value
    });
  };

  handleOnSubmit = e => {
    e.preventDefault();
    const { mealName, description, mealType } = this.state;

    const newMealOrder = {
      mealName,
      description,
      mealType
    };
    const { setMealOrder } = this.props;
    setMealOrder(newMealOrder);
  };

  handleOnEdit = () => {};

  handleOnDelete = () => {};

  renderAddMeal = () => (
    <React.Fragment>
      <h5>Add a meal</h5>
      <Form>
        <Form.Group controlId="formMealName">
          <Form.Label>Meal Name</Form.Label>
          <Form.Control
            name="mealName"
            type="text"
            placeholder="Meal Name"
            onChange={this.onChange}
          />
        </Form.Group>

        <Form.Group controlId="formMealDes">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="textarea"
            rows="4"
            name="description"
            onChange={this.onChange}
          />
          <Form.Text className="text-muted">Enter the curries.</Form.Text>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Select Type</Form.Label>
          <Form.Control as="select" onChange={this.onMealTypeSelect}>
            <option>Lunch</option>
            <option>Diner</option>
          </Form.Control>
        </Form.Group>
        <Button
          size="sm"
          variant="success"
          type="submit"
          onClick={this.handleOnSubmit}
        >
          Submit
        </Button>
      </Form>
    </React.Fragment>
  );

  renderMealOrders = () => {
    const { mealOrders } = this.state;
    const mealOrderView = [];

    mealOrders.map((data, index) => {
      mealOrderView.push(
        <tr key={index}>
          <td>{data.id}</td>
          <td>{data.meal_name}</td>
          <td>{data.description}</td>
          <td>{data.meal_type}</td>
          <td>
            <Button size="sm" variant="warning" onClick={this.handleOnEdit}>
              Edit
            </Button>
          </td>
          <td>
            <Button size="sm" variant="danger" onClick={this.handleOnDelete}>
              Delete
            </Button>
          </td>
        </tr>
      );
    });

    return mealOrderView;
  };

  render() {
    const addMeal = this.renderAddMeal();
    const mealOrders = this.renderMealOrders();

    return (
      <div>
        <div className="content border border-dark">
          <h4>Meal Order Settings</h4>
          <Row>
            <Col md={3}>{addMeal}</Col>
            <Col md={6}>
              <h5>Today's meal sets</h5>
              <Table responsive size="sm">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Meal Name</th>
                    <th>Description</th>
                    <th>Type</th>
                    <th colSpan="2">Action</th>
                  </tr>
                </thead>
                <tbody>{mealOrders}</tbody>
              </Table>
              ;
            </Col>
            <Col md={3}>
              <h5>Set closing time for meal orders</h5>
              <Table responsive size="sm">
                <thead>
                  <tr>
                    <th>Meal Type</th>
                    <th>Closing time</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Lunch</td>
                    <td>
                      <Form.Control type="Time" />
                    </td>
                    <td>
                      <Button size="sm" variant="warning">
                        Update
                      </Button>
                    </td>
                  </tr>
                  <tr>
                    <td>Dinner</td>
                    <td>
                      <Form.Control type="Time" />
                    </td>
                    <td>
                      <Button size="sm" variant="warning">
                        Update
                      </Button>
                    </td>
                  </tr>
                </tbody>
              </Table>
              ;
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  { setMealOrder }
)(withRouter(Settings));
