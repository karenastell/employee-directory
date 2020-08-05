import React from 'react';
import TableData from './TableData';
import TableHeader from './TableHeaders';

export default function Table(props) {
  return (
    <div>
      <table className='table table-dark'>
        <thead>
          <TableHeader />
        </thead>
        <tbody>
          {/* <tr>
        <td>
            {props.users.map(user=>(
                <td key={user.id}>{user.id}</td>
            ))}
        </td>
        <td>{props.firstName}</td>
        <td>{props.lastName}</td>
        <td>{props.role}</td>
        <td>{props.email}</td>
      </tr> */}
          <TableData
            // id={props.id}
            // firstName={props.firstName}
            // lastName={props.lastName}
            // role={props.role}
            // email={props.email}
            users={props.users}
          />
        </tbody>
      </table>
    </div>
  );
}
