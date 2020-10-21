import React from 'react'

const Search = () => {
  return (
    <li className="dropdown notification-list d-none d-sm-block">
      <form className='app-search'>
        <div className="form-group mb-0">
          <input type="text" className="form-control mb-0"/>
          <button type="submit"><i className="fa fa-search"></i></button>
        </div>
      </form>
    </li>
  )
}

export default Search
