import React from 'react'

const Card = ({catalog}) => {
  return (
    <div className="col-xl-3 col-md-6">
      <div class="card mini-stat bg-primary">
        <div class="card-body mini-stat-img">
          <div class="mini-stat-icon">
            <i class="mdi mdi-cube-outline float-right"></i>
          </div>
          <div class="text-white">
            <h6 class="text-uppercase mb-3">{catalog.name}</h6>
            <h4 class="mb-4">{catalog.contest}</h4>
            <span class="badge badge-info"> +11% </span> <span class="badge badge-danger"> -12% </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
