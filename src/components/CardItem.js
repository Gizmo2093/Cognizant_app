import * as React from 'react';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CardItem({element}) {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Card className='CardItem' sx={{ minWidth: 450 }}>
        <CardActionArea onClick={handleClickOpen}>
            <Box sx={{ my: 3, mx: 2 }}>
              <Grid container alignItems="center">
                <Grid item lg>
                  <Typography gutterBottom variant="h4" component="div">
                    {element.make}
                  </Typography>
                </Grid>
                <Grid item sx={{ ml: 5 }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {element.price}$
                  </Typography>
                </Grid>
              </Grid>
              <Typography color="text.secondary" variant="body2">
                Model: {element.model}
              </Typography>
            </Box>
        </CardActionArea>
        <Divider variant="middle" />
        <Box sx={{ mt: 3, ml: 1, mb: 1 }}>
          <Button>Add to cart</Button>
        </Box>
      </Card>

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{element.make}</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{ position: 'absolute', right: 8, top: 8, color: (theme) => theme.palette.grey[500]}}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent>
          <List sx={{ width: '100%', minWidth: 360, bgcolor: 'background.paper' }}>

            <ListItem alignItems="flex-start">
              <ListItemText primary={element.date_added} secondary="When this car added"/>
            </ListItem>

            <Divider variant="inset" component="li" />

            <ListItem alignItems="flex-start">
              <ListItemText primary={element.year_model} secondary="Model year"/>
            </ListItem>
          </List>
        </DialogContent>
      </Dialog>
    </div>
  );
}