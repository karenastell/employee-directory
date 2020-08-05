import React from 'react';
import './filter.css'

export default function Filter(props) {
  return (
    <form className='form'>
      <input
        name='searchBy'
        value={props.searchBy}
        onChange={props.handleInputChange}
        placeholder='Enter Role Name'
        className='filter-input'
      />
      <button onClick={props.filterByRole}>Search By Role</button>
    </form>
  );
}
