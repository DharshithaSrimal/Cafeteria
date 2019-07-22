import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';

export default class Store extends Component{
    render(){
        return(
            <div>
                <Container>
                    <Jumbotron><h2>Hi</h2></Jumbotron>
                </Container>
            </div>
        )
    }
}