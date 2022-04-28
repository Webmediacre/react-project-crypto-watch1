
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button'; 

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
            <Button variant='outlined' style={{ display: 'none' }} color='primary' href='/Newsfeeds'> 
                Newsfeeds
            </Button> 
            <Button variant='outlined' color="primary" href='/KnownledgeBase'> 
                KnowledgeBase
            </Button>
        </div>

    );

} 

export default ButtonLinks;