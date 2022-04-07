import * as React from 'react';
import Navbar from './Navbar'
import WareHouses from './WareHouses'

export default function List({data}) {
  return (
    <div>
      <Navbar />
      <WareHouses data={data} />
    </div>
  )
}
