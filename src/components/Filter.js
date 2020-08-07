import React from 'react';
import './filter.css';

export default function Filter(props) {
  return (
    <form className='form'>
      <input
        name='searchBy'
        value={props.searchBy}
        onChange={props.handleInputChange}
        placeholder='Enter Role Name'
        className='filter-input'
        list='datalistOptions'
      />
      <button className='mr-2 ml-2 btn btn-info' onClick={props.filterByRole}>Search By Role</button>
      <datalist id='datalistOptions'>
        {props.removeDuplicates()}
      </datalist>
      <button className='ml-2 btn btn-info' onClick={props.resetTable}>Reset Table</button>
    </form>

  );
}
