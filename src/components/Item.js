import * as React from 'react';

import CardItem from './CardItem'

export default function Item({ cars, handleAddtoCart }) {

  const SortCar = cars.sort((a,b) => {
    return new Date(a.date_added) - new Date(b.date_added)
  })

   return SortCar.map(element => {
    return(
      <CardItem key={element._id} element={element} handleAddtoCart={handleAddtoCart}/>
    )
  })
}