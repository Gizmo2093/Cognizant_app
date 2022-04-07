import * as React from 'react';
import CardItem from './CardItem';

export default function Item({cars}) {
  let SortCar = cars.sort((a,b) => {
    return new Date(a.date_added) - new Date(b.date_added)
  })

  return(
    SortCar.map(el =>{
     return <CardItem key={el._id} element={el} />
    })
  )
}