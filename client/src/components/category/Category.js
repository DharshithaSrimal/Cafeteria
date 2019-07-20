import React, { Component } from 'react';
import { Row, Col, Form, Button, Table } from 'react-bootstrap';
//import { Pie } from "react-chartjs-2";
//import { MDBContainer } from "mdbreact";
import './Category.css';

export default class Category extends Component{
    render(){
        return(
           <div> 
               <div className="content border border-dark">
                    <Row>
                        <Col md={4}>
                        <h5>Add Categories</h5>
                            <Form>
                                <Form.Group controlId="formCatName">
                                    <Form.Label>Category Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter Category Name" />
                                </Form.Group>
                                <Form.Group controlId="formCatDes">
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control type="textarea" rows="4" />
                                    <Form.Text className="text-muted">
                                    Enter Category Descriptioin.
                                    </Form.Text>
                                </Form.Group>
                                <Button size="sm" variant="success" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Col>
                        <Col md={8}>
                            <h5>Categories</h5>
                            <Table responsive size="sm">
                                <thead>
                                    <tr>
                                    <th>#</th>
                                    <th>Category Name</th>
                                    <th>Description</th>
                                    <th colSpan="2">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <td>1</td>
                                    <td>Table cell</td>
                                    <td>Table cell</td>
                                    <td><Button size="sm" variant="warning">Edit</Button></td>
                                    <td><Button size="sm" variant="danger">Delete</Button></td>
                                    </tr>
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
               </div>
           </div>
        )
    }
}