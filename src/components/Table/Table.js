import React, { Component } from 'react';
import TableData from './TableData';
import TableHeader from './TableHeaders';

export default class Table extends Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };

  handleInputChange = (event) => {
    // https://reactjs.org/docs/forms.html#controlled-components

    //   const value = event.target.value;
    //   const name = event.target.name;

    // object destructuring
    const { name, value } = event.target;

    console.log(value, name);
    // use brackets to signify the name in the state
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>
        <table className='table table-dark'>
          <thead>
            <TableHeader />
          </thead>
          <tbody>
            <TableData />
          </tbody>
        </table>
      </div>
    );
  }
}
