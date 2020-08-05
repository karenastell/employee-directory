import React from 'react';

export default function TableHeaders(props) {
  return (
    <tr>
      <th scope='col'>
        <button onClick={props.handleSortID}>ID</button>
      </th>
      <th scope='col'>
        <button>First Name</button>
      </th>
      <th scope='col'>
        <button onClick={props.handleSortLastName}>Last Name</button>
      </th>
      <th scope='col'>
        <button>Role</button>
      </th>
      <th scope='col'>Email</th>
    </tr>
  );
}
