import React from 'react';
import './App.css';
import Header from './components/Header';
import Table from './components/Table/Table';
import Filter from './components/Filter';
import Container from './components/Container';

function App() {
  return (
    <div className='App'>
      <Header />
      <Container>
        <Filter />
        <Table />
      </Container>
    </div>
  );
}

export default App;
