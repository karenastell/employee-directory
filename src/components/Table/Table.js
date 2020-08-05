import React from 'react';
import TableData from './TableData';
import TableHeader from './TableHeaders';

export default function Table(props) {
  return (
    <div>
      <table className='table table-dark'>
        <thead>
          <TableHeader
             handleSortLastName={props.handleSortLastName} 
             handleSortID={props.handleSortID}
             handleSortText={props.handleSortText} />
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
