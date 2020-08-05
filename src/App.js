import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table/Table';
import Filter from './components/Filter';
import Container from './components/Container';
import Users from './components/Users.json';
import Footer from './components/Footer'

function App() {

  const handleSort = (event) => {
    event.preventDefault();
    alert('handlesort');
  };

  return (
    <div className='App'>
      <Header />
      <Container>
        <Filter />
        <Table
          users={Users}
          handleSort={handleSort}
        />
      </Container>
      <Footer/>
    </div>
  );
}

export default App;
