import React from 'react'
import {Link} from 'react-router-dom'
import NotificationList from './NotificationList'
import Logo from './Logo'
import Search from './Search'
import Profile from './Profile'
import menuElements from './menuElements'

const Topbar = () => {
  return (
    <>
      <div className="topbar-main">
        <div className="container-fluid">
          <Logo />
          <div className="menu-extras topbar-custom">
            <ul className="float-right list-unstyled mb-0">
              <Search />
              <NotificationList />

              <Profile />

              <li className="menu-item">
                {/* <!-- Mobile menu toggle--> */}
                <a href='/' className="navbar-toggle nav-link" id="mobileToggle">
                  <div className="lines">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </a>
              </li>  
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>

      {/* title */}
      <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box">
            <h4 className="page-title">Dashboard</h4>
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">
                Bienvenido al Dashboard
              </li>
            </ol>

            <div className="state-information">
              <div className="state-graph">
                <div id="header-chart-2"></div>
                <div className="info">Obra ejecutada $ 1,230</div>
              </div>
              <div className="state-graph">
                <div id="header-chart-2"></div>
                <div className="info">Por ejecutar 1230</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

      {/* menu */}
      <div className="navbar-custom">
      <div className="container-fluid">
        <div id="navigation"
          className='active'
          // style={{display: 'block'}}
        >
          <ul className="navigation-menu">

            <li className="has-submenu">
              <Link to={'/'}>
                <i className="ti-dashboard"></i>
                <span>Dashboard</span>
              </Link>
            </li>

            {menuElements.map((el, index) => {
              return (
                <li key={index} className="has-submenu">
                  <Link to={el.route}><i className={el.icon}></i>{el.title}</Link>
                </li>
              )
            })}

            
          </ul>
        </div>
      </div>
    </div>
    </>
  )
}   

export default Topbar