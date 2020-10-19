import React from 'react'
import {Link} from 'react-router-dom'

const Topbar = () => {
  return (
    <>
      <div className="topbar-main">
        <div className="container-fluid">
          <div className="logo">
            <Link to={'/'}>
              <img src='assets/images/logo-sm.png' alt="" className="logo-small"/>
              <img src='assets/images/logo.png' alt="" className="logo-large"/>
            </Link>
          </div>
          {/* end logo container */}

          <div className="menu-extras topbar-custom">
            <ul className="float-right list-unstyled mb-0">

              <li className="dropdown notification-list d-none d-sm-block">
                <form className='app-search'>
                  <div className="form-group mb-0">
                    <input type="text" className="form-control mb-0"/>
                    <button type="submit"><i className="fa fa-search"></i></button>
                  </div>
                </form>
              </li>

              <li className="dropdown notification-list">
                <Link to={'/'} className="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" role="button" aria-haspopup="false" aria-expanded="false">
                  <i className="ti-bell noti-icon"></i>
                  <span className="badge badge-pill badge-danger noti-icon-badge">3</span>
                </Link>
                <div className="dropdown-menu dropdown-menu-right dropdown-menu-lg">
                  <h6 className="dropdown-item-text">
                    Notifications (258)
                  </h6>
                  <div className="slimscroll notification-item-list">
                    {/* item */}
                    <Link to={'/'} /*href="javascript:void(0);"*/ className="dropdown-item notify-item active">
                      <div className="notify-icon bg-success"><i className="mdi mdi-cart-outline"></i></div>
                      <p className="notify-details">Your order is placed<span className="text-muted">Dummy text of the printing and typesetting industry.</span></p>
                    </Link>
                  </div>
                  <Link to={'/'} /*href="javascript:void(0);"*/ className="dropdown-item text-center text-primary">
                    View all <i className="fi-arrow-right"></i>
                  </Link>
                </div>        
              </li>

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

              <li className="menu-item">
                {/* <!-- Mobile menu toggle--> */}
                <Link to={'/'} className="navbar-toggle nav-link" id="mobileToggle">
                  <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </Link>
              </li>  
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    </>
  )
}   

export default Topbar