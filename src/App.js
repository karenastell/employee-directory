import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table/Table';
import Filter from './components/Filter';
import Container from './components/Container';
import Users from './components/Users.json';
import Footer from './components/Footer';
import Reset from './components/Reset';
import NoResultMessage from './components/NoResultMessage';

export default class App extends Component {
  state = {
    users: Users,
    searchBy: '',
    noResults: false,
    sortBy: '',
  };

  handleInputChange = (event) => {
    // some more info go here: https://reactjs.org/docs/forms.html#controlled-components
    console.log(event.target);
    //   const value = event.target.value;
    //   const name = event.target.name;

    const { name, value } = event.target;

    console.log(value, name);
    // use brackets to signify the name in the state
    this.setState({
      [name]: value,
    });
  };

  handleSortText = (event) => {
    event.preventDefault();
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // sort by name
    Users.sort(function (a, b) {
      let nameA = a.firstName.toUpperCase(); // ignore upper and lowercase
      let nameB = b.firstName.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    // set the state users to the new array to update the table
    this.setState({
      users: this.state.users,
    });
  };

  handleSortLastName = (event) => {
    event.preventDefault();
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    // sort by name
    Users.sort(function (a, b) {
      let nameA = a.lastName.toUpperCase(); // ignore upper and lowercase
      let nameB = b.lastName.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }

      // names must be equal
      return 0;
    });
    // set the state users to the new array to update the table
    this.setState({
      users: this.state.users,
    });
  };

  handleSortID = (event) => {
    event.preventDefault();

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    Users.sort(function (a, b) {
      return a.id - b.id;
    });
    // set the state users to the new array to update the table
    this.setState({
      users: this.state.users,
    });
  };

  filterByRole = (event) => {
    event.preventDefault();
    let search = this.state.searchBy;
    search.toUpperCase();
    console.log(search);
    // find all the users that have the role of the value of the input
    // the input value updates the state: searchBy
    let filteredArray = Users.filter((user) => {
      return user.role === search;
    });

    console.log(filteredArray);
    if (filteredArray.length === 0) {
      this.setState({
        noResults: true,
      });
    }

    // set the state users to the new array to update the table
    this.setState({
      users: filteredArray,
    });
  };

  resetTable = (event) => {
    event.preventDefault();
    // set the state user back to the original json data
    this.setState({
      users: Users,
    });
  };

  noResultMessage = () => {
    if (this.state.noResults === true) {
      return <NoResultMessage />;
    }
  };


  render() {
    return (
      <div className='App'>
        <Header />
        <Container>
          <Reset resetTable={this.resetTable} />
          <Filter
            handleInputChange={this.handleInputChange}
            filterByRole={this.filterByRole}
            users={this.state.users}
          />
          {this.noResultMessage()}
          <Table
            users={this.state.users}
            handleSortID={this.handleSortID}
            handleSortLastName={this.handleSortLastName}
            handleSortText={this.handleSortText}
          />
        </Container>
        <Footer />
      </div>
    );
  }
}
