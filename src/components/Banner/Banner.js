
// react import
import React from 'react';

// AppBar from https://v4.mui.com/components/app-bar/#app-bar
import { makeStyles, Container, Typography } from '@material-ui/core';  

import CoinConverterWidget from '../../components/CoinConverterWidget'; 

import Carousel from './Carousel';
import Marquee from '../Marquee';

const useStyles = makeStyles(() => ({
    banner: { 
        backgroundImage: 'url(./banner2.jpg)', 
    },
    bannerContent: {
        height: 250,
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 20,
        justifyContent: 'space-around',
    },
    tagline: {
        display: 'flex',
        height: '10%',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center', 
    }, 
}));

const Banner = () => {

    const classes = useStyles(); 

    return (

        <div className={classes.banner}>

            <Marquee />  

            <Container className={classes.bannerContent}>
                <div className={classes.tagline}> 
                
                    <Typography variant='subtitle2' style={{color: 'darkgrey', textTransform: 'capitalize', fontFamily: 'Montserrat'}}>
                        Get all the info regarding your favorite Cryptocurrencies. 
                        
                    </Typography>
                    <Typography variant='h4' style={{ fontWeight: 'bold', marginBottom: 0, fontFamily: 'Montserrat'}}>
                        Trending Cryptocurrencies
                    </Typography>
                </div>
                
                <Carousel></Carousel>

            </Container>

            <Container>
                <CoinConverterWidget /> 
            </Container>
 
        </div> 
    )
}

export default Banner