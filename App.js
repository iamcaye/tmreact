import React, {Component, useState} from "react";
import {Text, View, Image, TextInput} from 'react-native'
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.min.css';

const Navigation = () => (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Team Manager</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
);

const main = () => (
    <View>
        <Navigation/>
        <Text>
            Hola??
        </Text>
    </View>
);


export default main;
