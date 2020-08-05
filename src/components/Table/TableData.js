import React from 'react';

export default function TableData(props) {
  return (
    <React.Fragment>
      {props.users.map((user) => (
        <tr key={user.id}>
          <td>{user.id}</td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.role}</td>
          <td>{user.email}</td>
        </tr>
      ))}
    </React.Fragment>
  );
}
