import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Form, Button, Table } from 'react-bootstrap';
import './Settings.css';
export default class Settings extends Component{
    render(){
        return(
            <div>
                <div className="content border border-dark">
                <h4>Meal Order Settings</h4>
                <Row>
                <Col md={3}>
                <h5>Add a meal</h5>
                    <Form>
                        <Form.Group controlId="formMealName">
                            <Form.Label>Meal Name</Form.Label>
                            <Form.Control type="text" placeholder="Meal Name" />
                        </Form.Group>

                        <Form.Group controlId="formMealDes">
                            <Form.Label>Description</Form.Label>
                            <Form.Control type="textarea" rows="4" />
                            <Form.Text className="text-muted">
                            Enter the curries.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="exampleForm.ControlSelect1">
                            <Form.Label>Select Type</Form.Label>
                            <Form.Control as="select">
                            <option>Lunch</option>
                            <option>Diner</option>
                            </Form.Control>
                        </Form.Group>
                        <Button size="sm" variant="success" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
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
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td>Table cell</td>
                        <td><Button size="sm" variant="warning">Edit</Button></td>
                        <td><Button size="sm" variant="danger">Delete</Button></td>
                        </tr>
                    </tbody>
                </Table>;
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
                            <td><Form.Control type="Time" /></td>
                            <td><Button size="sm" variant="warning">Update</Button></td>
                        </tr>
                        <tr>
                            <td>Dinner</td>
                            <td><Form.Control type="Time" /></td>
                            <td><Button size="sm" variant="warning">Update</Button></td>
                        </tr>
                    </tbody>
                    </Table>;
                </Col>
                </Row>
                </div>
            </div>
        )
    }
}