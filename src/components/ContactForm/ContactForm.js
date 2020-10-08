import React, { Component } from "react";
import styles from "./ContactForm.module.css";

export default class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInputChange = (e) => {
    this.setState({ name: e.target.value });
  };

  handleNumberChange = (e) => {
    this.setState({ number: e.target.value });
  };

  handleAddContact = () => {
    if ((this.state.name, this.state.number) !== "") {
      this.props.onAddContact(this.state.name, this.state.number);
      this.setState({ name: "", number: "" });
    }
  };

  render() {
    return (
      <form className={styles.form}>
        <label className={styles.label}>
          {" "}
          Name
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleInputChange}
            className={styles.input}
            required
          ></input>
        </label>
        <label className={styles.label}>
          Number
          <input
            type="text"
            value={this.state.number}
            onChange={this.handleNumberChange}
            className={styles.input}
            required
          ></input>
        </label>
        <button
          type="submit"
          onClick={this.handleAddContact}
          className={styles.button}
        >
          Add contact
        </button>
      </form>
    );
  }
}
