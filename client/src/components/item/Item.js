import React, { Component } from 'react';
import { Row, Col, Form, Button, Table } from 'react-bootstrap';
//import { Pie } from "react-chartjs-2";
//import { MDBContainer } from "mdbreact";
import './Item.css';

export default class Category extends Component{
    render(){
        return(
            <div>
           <div className="content border border-dark">
               <Form>
               <Row>
              
                <Col md={3}>
                    <h5>Add a meal</h5>
                        
                            <Form.Group controlId="formItemName">
                                <Form.Label>Item Name</Form.Label>
                                <Form.Control type="text" placeholder="Item Name" />
                            </Form.Group>

                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Select Category</Form.Label>
                                <Form.Control as="select">
                                <option>Lunch</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group controlId="formItemBatch">
                                <Form.Label>Batch No</Form.Label>
                                <Form.Control type="text" placeholder="Batch No." />
                            </Form.Group>

                            <Form.Group controlId="formItemQty">
                                <Form.Label>Item Qty</Form.Label>
                                <Form.Control type="number" placeholder="Item Qty" />
                            </Form.Group>

                    </Col>
                    <Col md={3}>

                            <Form.Group controlId="formQtyAlert">
                                <Form.Label>Qty Alert</Form.Label>
                                <Form.Control type="number" placeholder="Qty Alert Margin" />
                            </Form.Group>

                            <Form.Group controlId="formItemExp">
                                <Form.Label>Expiry Date</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>

                            <Form.Group controlId="formExpAlert">
                                <Form.Label>Expiry Date Alert</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>

                            <Form.Group controlId="formItemDes">
                                <Form.Label>Description</Form.Label>
                                <Form.Control type="textarea" rows="4" />
                                <Form.Text className="text-muted">
                                Enter extra details about the item.
                                </Form.Text>
                            </Form.Group>
                            
                            <Button size="sm" variant="success" type="submit">
                                Submit
                            </Button>

                    </Col>
                    <Col md={6}>
                       
                        <Form.Group controlId="formItemSearch">
                                <Form.Label>Search Item</Form.Label>
                                <Form.Control type="text" />
                        </Form.Group>
                        <h5>Item Details</h5>
                        <Table responsive size="sm">
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Item Name</th>
                                <th>Qty</th>
                                <th>Description</th>
                                <th>More Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td><Button size="sm" variant="info">Info</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    
                </Row>
                </Form>
           </div>
           <div className="content border border-dark">
               <Row>
                <h5>Inventory Alerts</h5>
                        <Table responsive size="sm">
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Item Name</th>
                                <th>Qty</th>
                                <th>Expiry Date</th>
                                <th>Description</th>
                                <th>More Info</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <td>1</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td>Table cell</td>
                                <td><Button size="sm" variant="info">Info</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                </Row>
           </div>
           </div>
        )
    }
}