import React, { Component } from 'react'

export default class Sort extends Component {
    render() {
        return (
            <div class="input-group mb-3">
            <select class="custom-select" id="inputGroupSelect02">
              <option selected>Sort by...</option>
              <option value="1">#</option>
              <option value="2">First</option>
              <option value="3">Last</option>
              <option value="4">Handle</option>
            </select>
          </div>
        )
    }
}
