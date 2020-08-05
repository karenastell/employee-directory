import React, { Component } from 'react'

export default class TableHeaders extends Component {
    render() {
        return (
            <tr>
            <th scope="col">#</th>
            <th scope="col">First</th>
            <th scope="col">Last</th>
            <th scope="col">Handle</th>
          </tr>
        )
    }
}
