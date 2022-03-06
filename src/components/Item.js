import React from "react"

export default function Item({element}) {
  let dates = element.sort((a,b) => {
    return new Date(a.date_added) - new Date(b.date_added)
  })
  return(
    dates.map(el => { return <li key={el._id}>{el.date_added}</li>})
  )
}

