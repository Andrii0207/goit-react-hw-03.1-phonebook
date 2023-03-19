import { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  state = {
    name: '',
    number: '',
  };

  handleChange = e => {
    // console.log(e.target);
    // console.log(e.target.name);
    // console.log(e.target.value);

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmitForm = e => {
    e.preventDefault();
    // console.log(this.state);
    this.props.onSubmit(this.state);
    this.resetInput();
  };

  resetInput = () => {
    this.setState({
      name: '',
      number: '',
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmitForm}>
        <h2>{this.props.title}</h2>
        <label htmlFor="id-1">
          Name
          <input
            type="text"
            name="name"
            id="id-1"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor="id-2">
          Number
          <input
            type="tel"
            name="number"
            id="id-2"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
    );
  }
}

export default Form;

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
