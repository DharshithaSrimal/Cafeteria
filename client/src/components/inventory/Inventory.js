import React, { Component } from 'react';
import { Row, Col, Form, Button, Table } from 'react-bootstrap';
//import { Pie } from "react-chartjs-2";
//import { MDBContainer } from "mdbreact";
import './Inventory.css';

export default class Category extends Component{
    render(){
        return(
            <div>
                <div className="content border border-dark">
                    <Row>
                        <Col md={4}>
                        <Table responsive size="sm">
                            <tbody>
                                <tr>
                                <td>Number of Categories</td><td>x</td>
                                </tr>
                                <tr>
                                <td>Number of Items</td><td>x</td>
                                </tr>
                            </tbody>
                        </Table>
                        </Col>
                        <Col md={8}>
                        
                        </Col>
                    </Row>
                </div>
                <div className="content border border-dark">
                    <h5>Inventory Alert</h5>
                    <Table responsive size="sm">
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>Item Name</th>
                            <th>Expiry Date</th>
                            <th>Qty</th>
                            <th>Action</th>
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
                    </Table>;
                </div>
                
            </div>
        )
    }
}