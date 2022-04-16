import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import Item from './Item'

export default function WareHouses({data, handleAddtoCart}) {
  return data.map(el =>{
    return(
      <div key={el._id}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
          <Typography variant='h5'>{el.name}</Typography>
        </AccordionSummary>
        <AccordionDetails className='Details'>
          <Item handleAddtoCart={handleAddtoCart} cars={el.cars.vehicles}></Item>
        </AccordionDetails>
      </Accordion>
    </div>
    )})
}