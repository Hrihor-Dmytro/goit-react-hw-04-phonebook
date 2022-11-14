import React, { useState } from 'react';
import {
  SectionList,
  FormLabel,
  FormInput,
  FormButton,
} from './FormComponent.stiyled';

export function Form() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  // state = {
  //   name: '',
  //   number: '',
  // };

  const handleInputChange = event => {
    switch (event.target.name) {
      case 'name':
        setName(event.target.value);
        break;
      case 'number':
        setNumber(event.target.value);
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  // reset = () => {
  //   this.setState({ name: '', number: '' });
  // };

  return (
    <SectionList onSubmit={handleSubmit}>
      <FormLabel>
        Name
        <FormInput
          type="text"
          value={name}
          onChange={handleInputChange}
          name="name"
          placeholder="Please, enter your Name"
        />
      </FormLabel>
      <FormLabel>
        Number
        <FormInput
          type="tel"
          value={number}
          onChange={handleInputChange}
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
