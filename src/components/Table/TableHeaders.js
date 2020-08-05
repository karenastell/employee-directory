import React, { Component } from 'react'

export default class TableHeaders extends Component {
    render() {
        return (
            <tr>
            <th scope="col">ID</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Email</th>
            <th scope="col">Role</th>
          </tr>
        )
    }
}
