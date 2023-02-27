import React, { Component } from "react";
import { Col, Container, Row } from "reactstrap";
import BookList from "./BookList";
import NewBookModal from "./NewBookModal";

import axios from "axios";

import { API_URL } from "../constants";

class Home extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    this.resetState();
  }

  getBooks = () => {
    axios.get(API_URL + 'api/books/').then(res => this.setState({ books: res.data }));
  };

  resetState = () => {
    this.getBooks();
  };

  render() {
    return (
      <Container style={{ marginTop: "20px" }}>
              <h1>
      Reading Books List
      </h1>
        <Row>
          <Col>
            <BookList
              books={this.state.books}
              resetState={this.resetState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <NewBookModal create={true} resetState={this.resetState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;