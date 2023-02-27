import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../constants";

class NewBookForm extends React.Component {
  state = {
    id: -1,
    title: "",
    author: "",
    genre: "",
    cover_image_url: "",
    read: false
  };

  componentDidMount() {
    if (this.props.book) {
      const { id, title, author, genre, cover_image_url, read } = this.props.book;
      this.setState({ id, title, author, genre, cover_image_url, read });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createBook = e => {
    e.preventDefault();
    axios.post(API_URL + 'api/books/create/', this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editBook = e => {
    e.preventDefault();
    axios.put(API_URL + + 'api/books/' + this.state.id, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.book ? this.editBook : this.createBook}>
        <FormGroup>
          <Label for="name">Title:</Label>
          <Input
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.title)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="author">Author:</Label>
          <Input
            type="text"
            name="author"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.author)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="genre">Genre:</Label>
          <Input
            type="text"
            name="genre"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.genre)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="cover_image_url">Cover Image URL:</Label>
          <Input
            type="text"
            name="cover_image_url"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.cover_image_url)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewBookForm;