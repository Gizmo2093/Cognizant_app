import React from "react";
import Item from './Item'

export default function Warehouse({ warehouses }) {
  return (
    <div>
      <li>{warehouses._id} {warehouses.name}</li>
      <Item element={warehouses.cars.vehicles.map(el => {return el })} />
    </div>
  )
}