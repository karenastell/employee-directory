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
      <button onClick={props.filterByRole}>Search By Role</button>
      <datalist id='datalistOptions'>
        {/* {props.rolesArray.map((role)=>(
          // let roleArray = roleArray.push(user.role)
          // console.log('filter test', user)
          //  <option value={role}/>
        ))} */}
       
    
      </datalist>
    </form>

    // <div className='mb-3 mt-3 form'>
    //   <label for='exampleDataList' className='form-label'>
    //     Search by Role:
    //   </label>
    //   <input
    //     name='searchBy'
    //     value={props.searchBy}
    //     onChange={props.searchBy}
    //     className='form-control'
    //     list='datalistOptions'
    //     id='exampleDataList'
    //     placeholder='Enter Role Name'
    //   />
    //   <datalist id='datalistOptions'>
    //     {/* <option value='apple' />
    //     <option value='orange' />
    //     <option value='lemon' />
    //     <option value='pear' />
    //     <option value='grape' /> */}
    //   </datalist>
    //   <button onClick={props.filterByRole}>Search By Role</button>
    // </div>
  );
}
