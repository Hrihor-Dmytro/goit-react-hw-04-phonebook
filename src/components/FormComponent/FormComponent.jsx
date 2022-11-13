import React, { Component } from 'react';
import {
  SectionList,
  FormLabel,
  FormInput,
  FormButton,
} from './FormComponent.stiyled';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <SectionList onSubmit={this.handleSubmit}>
        <FormLabel>
          Name
          <FormInput
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
            name="name"
            placeholder="Please, enter your Name"
          />
        </FormLabel>
        <FormLabel>
          Number
          <FormInput
            type="tel"
            value={this.state.number}
            onChange={this.handleInputChange}
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            placeholder="Please, enter your Number"
          />
        </FormLabel>
        <FormButton type="submit">Add</FormButton>
      </SectionList>
    );
  }
}

export default Form;
