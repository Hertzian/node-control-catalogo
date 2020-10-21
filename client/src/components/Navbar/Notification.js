import React from 'react'

const Notification = () => {
  return (
    <div to={'/'} /*href="javascript:void(0);"*/ className="dropdown-item notify-item active">
      <div className="notify-icon bg-success"><i className="mdi mdi-cart-outline"></i></div>
      <p className="notify-details">Your order is placed<span className="text-muted">Dummy text of the printing and typesetting industry.</span></p>
    </div>
  )
}

export default Notification
