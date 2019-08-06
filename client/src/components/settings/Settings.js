import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { Row, Col, Form, Button, Table, Modal } from 'react-bootstrap';
import './Settings.css';
// import { connect } from 'react-redux';
import { setMealOrder,deleteMealOrder,updateMealOrder } from '../../store/actions/SettingsActions';
import axios from 'axios';

class Settings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mealOrders: [],
      mealId: '',
      mealName: '',
      description: '',
      mealType: '',
      errors: {},
      showModal: false
    };
  }

  getData = () => {
    axios.get('/mealorders')
    .then(res => 
      this.setState({ mealOrders: res.data }, 
        
      )

    );
  }

  componentDidMount() {
    this.getData();
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
    // const { setMealOrder } = this.props;
    setMealOrder(newMealOrder);
    this.getData();
  };

  handleOnEdit = (dat) => {
    console.log('0000',dat)
    this.setState({
      mealId: dat.order_id,
      mealName: dat.meal_name,
      description: dat.description,
      mealType: dat.meal_type,
      showModal: true
    });
  };

  handleOnDelete = (id) => {
    // const { deleteMealOrder } = this.props;
    deleteMealOrder(id);
    this.getData();
  };

  handleOnClose = () => {
    this.setState({
      
      showModal: false
    });
  }

  handleOnSaveChanges = (e) => {
    e.preventDefault();
    const { mealId,mealName, description, mealType } = this.state;

    const newMealOrder = {
      mealId,
      mealName,
      description,
      mealType
    };

    updateMealOrder(newMealOrder);
    this.setState({
      showModal: false
    });
    this.getData();
  }

  renderModal = () => {
    const editMeal = this.renderEditMeal();

    return(
      <Modal show={this.state.showModal} onHide={this.handleOnClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editMeal}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.handleOnClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleOnSaveChanges}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }

  renderEditMeal = () => {
    return(
<React.Fragment>
      <Form>
        <Form.Group controlId="formMealName">
          <Form.Label>Meal Name</Form.Label>
          <Form.Control
            name="mealName"
            type="text"
            placeholder="Meal Name"
            onChange={this.onChange}
            value={this.state.mealName}
          />
        </Form.Group>

        <Form.Group controlId="formMealDes">
          <Form.Label>Description</Form.Label>
          <Form.Control
            type="textarea"
            rows="4"
            name="description"
            onChange={this.onChange}
            value={this.state.description}
          />
          <Form.Text className="text-muted">Enter the curries.</Form.Text>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Select Type</Form.Label>
          <Form.Control as="select" onChange={this.onMealTypeSelect} defaultValue={this.state.mealType}>
            <option>Lunch</option>
            <option>Diner</option>
          </Form.Control>
        </Form.Group>
      </Form>
    </React.Fragment>
    );
  }

  renderAddMeal = () => {
  return(
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
    
  };

  renderMealOrders = () => {
    const { mealOrders } = this.state;
    const mealOrderView = [];

    mealOrders.map((dat, indx) => {
      mealOrderView.push(
        <tr key={indx}>
        <td>{indx + 1}</td>
        <td>{dat.meal_name}</td>
        <td>{dat.description}</td>
        <td>{dat.meal_type}</td>
        <td>
          <Button size="sm" variant="warning" onClick={() => this.handleOnEdit(dat)}>
            Edit
          </Button>
        </td>
        <td>
          <Button size="sm" variant="danger" onClick={() => this.handleOnDelete(dat.order_id)}>
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
    const modal = this.renderModal();

    return (
      <div>
        <div className="content border border-dark">
          <h4>Meal Order Settings</h4>
          <Row>
            <Col md={3}>{addMeal}</Col>
            <Col md={6}>
              {modal}
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

export default Settings;
