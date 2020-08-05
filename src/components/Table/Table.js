import React from 'react';
import TableData from './TableData';
import TableHeader from './TableHeaders';

export default function Table() {
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
