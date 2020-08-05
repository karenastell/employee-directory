import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table/Table';
import Filter from './components/Filter';
import Container from './components/Container';
import Users from './components/Users.json';

function App() {
  console.log(Users[0]);
  return (
    <div className='App'>
      <Header />
      <Container>
        <Filter />
        <Table
          users={Users}
          // id={Users[0].id}
          // firstName={Users[0].firstName}
          // lastName={Users[0].lastName}
          // role={Users[0].role}
          // email={Users[0].email}
        />
      </Container>
    </div>
  );
}

export default App;
