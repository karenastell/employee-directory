import React from 'react';

export default function Filter() {
  return (
    <div className='input-group mb-3'>
      <select className='custom-select' id='inputGroupSelect02'>
        <option selected>Filter by...</option>
        <option value='1'>Role</option>
        <option value='2'>First</option>
        <option value='3'>Last</option>
        <option value='4'>Handle</option>
      </select>
    </div>
  );
}
