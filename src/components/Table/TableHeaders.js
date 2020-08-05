import React from 'react';

export default function TableHeaders() {
  return (
    <tr>
      <th scope='col'>
        <button>ID</button>
      </th>
      <th scope='col'>
        <button>First Name</button>
      </th>
      <th scope='col'>
        <button>Last Name</button>
      </th>
      <th scope='col'>
        <button>Role</button>
      </th>
      <th scope='col'>Email</th>
    </tr>
  );
}
