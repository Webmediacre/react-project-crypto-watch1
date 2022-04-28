
// react import
import React from 'react';

// dom imports
import { useNavigate } from 'react-router-dom';

// AppBar from https://v4.mui.com/components/app-bar/#app-bar
import { AppBar, Container, Toolbar, Typography, Select, MenuItem, makeStyles, createTheme, ThemeProvider } from '@material-ui/core'; 

// import state CryptoState from CrytoContext
import { CryptoState } from '../CrytoContext';  

import ButtonLinks from './ButtonLinks'; 


const useStyles = makeStyles(() => ({  
    title: {
        flex: 1,
        color: '#f7931a', 
        fontFamily: 'Montserrat',
        fontWeight: 'bold',
        cursor: 'pointer'
    }
})); 

const Header = () => {

    // used with className
    const classes = useStyles();
    // useHistory() is replaced by useNavigate() ;
    // const history = useNavigate(); 
    const navigate = useNavigate(); 

    const { currency, setCurrency } = CryptoState();
    console.log(currency); 
    const darkTheme = createTheme({
        palette: {
            primary: {
                main: '#f7931a',   
            },
            type: 'dark',
        },
    }); 

    return (

    <ThemeProvider theme={darkTheme}>
           
        <AppBar color='transparent' position='static'> 
            <Container>  
                <Toolbar>     
                    <Typography onClick={() => navigate('/')} className={classes.title} variant='h6'> Crypto Watch </Typography>
                    <ButtonLinks />
                    <Select defaultValue={'GBP'} variant='outlined' style={{ color: '#f7931a', width: 100, height: 40, marginRight: 15}} value={currency} onChange={(e) => setCurrency(e.target.value)}>   
                        <MenuItem value={'GBP'}> GBP </MenuItem>
                        <MenuItem value={'EUR'}> EUR </MenuItem>   
                        <MenuItem value={'USD'}> USD </MenuItem> 
                    </Select> 
                </Toolbar>
            </Container>
        </AppBar>

    </ThemeProvider>   

    )

}

export default Header;