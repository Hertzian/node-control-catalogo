import React from 'react'
import {Link} from 'react-router-dom'
import Notification from './Notification'

const NotificationList = () => {
  return (
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

          <Notification />

        </div>
        <Link to={'/'} /*href="javascript:void(0);"*/ className="dropdown-item text-center text-primary">
          View all <i className="fi-arrow-right"></i>
        </Link>
      </div>        
    </li>
  )
}

export default NotificationList
