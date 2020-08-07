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
      <button className='btn btn-secondary' onClick={props.filterByRole}>Search By Role</button>
      <datalist id='datalistOptions'>
        {props.removeDuplicates()}
        {/* {props.rolesArray.map((role)=>(
           <option value={role}/>
        ))} */}
      </datalist>
      <button className='ml-1 btn btn-secondary' onClick={props.resetTable}>Reset Table</button>
    </form>

  );
}
