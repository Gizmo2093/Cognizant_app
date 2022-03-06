import React from 'react'
import Warehouse from './Warehouse'

export default function List(props) {
  return (
    <div>
      <h1>Warehouses List</h1>
      <ul className='WarehousesList'>
      {props.data.map(el =>{ return <Warehouse warehouses={el} key={el._id} />})}
      </ul>
    </div>
  )
}
