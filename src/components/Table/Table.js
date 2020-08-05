import React from 'react';
import TableData from './TableData';
import TableHeader from './TableHeaders';

export default function Table(props) {
  return (
    <div>
      <table className='table table-dark'>
        <thead>
          <TableHeader
             handleSort={props.handleSort} />
        </thead>
        <tbody>
          <TableData
            users={props.users}
         
          />
        </tbody>
      </table>
    </div>
  );
}
