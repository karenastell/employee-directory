import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table/Table';
import Filter from './components/Filter';
import Container from './components/Container';
import Users from './components/Users.json';
import Footer from './components/Footer';

export default class App extends Component {
  state = {
    users: Users,
    sortBy: '',
  };

  handleSortLastName = (event) => {
    event.preventDefault();

    console.log(this.state.users);

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
    this.setState({
      users: this.state.users,
    });
  };

  render() {
    return (
      <div className='App'>
        <Header />
        <Container>
          <Filter />
          <Table
            users={this.state.users}
            handleSortID={this.handleSortID}
            handleSortLastName={this.handleSortLastName}
          />
        </Container>
        <Footer />
      </div>
    );
  }
}

// function App() {

//   const handleSort = (event) => {
//     event.preventDefault();
//     alert('handlesort');
//   };

//   return (
//     <div className='App'>
//       <Header />
//       <Container>
//         <Filter />
//         <Table
//           users={Users}
//           handleSort={handleSort}
//         />
//       </Container>
//       <Footer/>
//     </div>
//   );
// }

// export default App;
