import React from 'react'
import catalogData from './catalogData'
import Card from './Card'

const Catalogs = () => {
  return (
    <div class="wrapper">
      <div class="container-fluid">
        <div class="row">

        {catalogData.map((catalog, index) => {
          return <Card key={index} catalog={catalog} />
        })}

        </div>
      </div>
    </div>
  )
}

export default Catalogs
