import React from 'react'
import {Link} from 'react-router-dom'

const Profile = () => {
  return (
    <li className="dropdown notification-list">
      <div className="dropdown notification-list nav-pro-img">
        <Link to={'/'} className="dropdown-toggle nav-link arrow-none waves-effect nav-user" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
          <img src="assets/images/users/user-4.jpg" alt="user" className="rounded-circle"/>
        </Link>
        <div className="dropdown-menu dropdown-menu-right profile-dropdown ">
          {/* <!-- item--> */}
          <a className="dropdown-item" href="#"><i className="mdi mdi-account-circle m-r-5"></i> Profile</a>
          <a className="dropdown-item" href="#"><i className="mdi mdi-wallet m-r-5"></i> My Wallet</a>
          <a className="dropdown-item d-block" href="#"><span className="badge badge-success float-right">11</span><i className="mdi mdi-settings m-r-5"></i> Settings</a>
          <a className="dropdown-item" href="#"><i className="mdi mdi-lock-open-outline m-r-5"></i> Lock screen</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item text-danger" href="#"><i className="mdi mdi-power text-danger"></i> Logout</a>
        </div>                                                                    
      </div>
    </li>
  )
}

export default Profile
