import React from 'react';


export default function TableHeaders(props) {
  return (
    <tr>
      <th scope='col'>
        <button className='btn btn-secondary' onClick={props.handleSortID}>
          ID
        </button>
      </th>
      <th scope='col'>
        <button
          className='btn btn-secondary'
          value='firstName'
          onClick={props.handleSortText}
        >
          First Name
        </button>
      </th>
      <th scope='col'>
        <button
          value={props.sortBy}
          className='btn btn-secondary'
          onClick={props.handleSortLastName}
        >
          Last Name
        </button>
      </th>
      <th scope='col'>Role</th>
      <th scope='col'>Email</th>
    </tr>
  );
}
