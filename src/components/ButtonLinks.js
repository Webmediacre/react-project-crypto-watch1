
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'; 
import NightlightIcon from '@mui/icons-material/Nightlight';
import LightModeIcon from '@mui/icons-material/LightMode';
// import Icon from '@mui/material/Icon/Chip';
// https://mui.com/material-ui/icons/#size

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  }, 
}));
  
const ButtonLinks = () => {

    const classes = useStyles();

    return (  

        <div className={classes.root}>
            <Button variant='outlined' style={{ display: 'none' }}> Default </Button>
            <Button variant='outlined' style={{ display: 'none' }} color='primary'>
                Primary
            </Button> 
            <Button variant='outlined' style={{ display: 'none' }} color='secondary'>
                Secondary
            </Button>
            <Button variant='outlined' style={{ display: 'none' }} disabled>
                Disabled
            </Button>   
            <Button variant='outlined' color="primary" href='/KnownledgeBase'> 
                KnowledgeBase
            </Button>
            <Button variant='outlined' style={{ display: '' }} color='primary' href='https://www.youtube.com/watch?v=2uYuWiICCM0&list=PLsyeobzWxl7oY6tZmnZ5S7yTDxyu4zDW-' target='_blank'> 
                YouTube Playlist
            </Button> 
            <Button variant='outlined' style={{ display: '' }} disabled>
                <NightlightIcon sx={{ marginTop: 0 }}  />
            </Button>

        </div>

    );

} 

export default ButtonLinks;