import { Button, Grid, TextField, Typography } from '@mui/material';
import React from 'react';
// import { Link } from 'react-router-dom';
import Up from '../assets/up.png';
import d26th from '../assets/d26th.jpeg';
import d20th from '../assets/d20th.jpeg';
import d22th from '../assets/d22th.jpg';
import d15th from '../assets/d15th.jpeg';
import point from '../assets/point.png';
import phone from '../assets/phone.png';
import location from '../assets/location.png';

function Footer() {
    return (
        <footer style={{ backgroundColor: '#4B5563', padding: '40px 20px', color: 'white' }}>
            <Grid container spacing={3} justifyContent="center" alignItems="center">
                <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'left' }}>
                    <Typography variant='h4' fontWeight='bold'>
                        Weekly Newsletter
                    </Typography>
                    <Typography variant='body2' sx={{ opacity: 0.8, marginBottom: 2 }}>
                        There are many variations of passages of lorem ipsum available.
                    </Typography>
                </Grid>

                <Grid item xs={12} md={6} textAlign={{ xs: 'center', md: 'right' }}>
                    <TextField
                        sx={{ bgcolor: 'white', borderRadius: 1, width: { xs: '100%', sm: '250px' }, marginRight: { sm: '10px' }, marginBottom: { xs: '10px', sm: '0' } }}
                        size='small'
                        placeholder='Enter Your Mail'
                    />
                    <Button variant='contained' sx={{ bgcolor: '#F59E0B', color: 'white', px: 3 }}>
                        SUBSCRIBE
                    </Button>
                </Grid>

                <Grid item xs={12} md={10}>
                    <Grid container spacing={4} justifyContent='space-between'>
                        <Grid item xs={12} sm={3}>
                            <Typography variant='h6' fontWeight='bold'>About Us</Typography>
                            <div style={{
                                width: '50%',
                                marginRight: '-50%',
                                height: '2px',
                                borderBottom: '2px dotted orange',
                                margin: '8px auto'
                            }}></div>
                            <Typography variant='body2' sx={{ opacity: 0.8 }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            </Typography>
                            <Typography variant='body2'><img src={phone} width='15px' height='15px' style={{ marginRight: '5px', marginBottom: '-5px' }} alt="phone" />| (+94) 11 434 7575</Typography>
                            <Typography variant='body2'><img src={location} width='15px' height='15px' style={{ marginRight: '5px', marginBottom: '-5px' }} alt="address" />| 42 Lily Ave, Colombo 00600</Typography>
                        </Grid>
                        
                        <Grid item xs={12} sm={3}>
                            <Typography variant='h6' fontWeight='bold'>Latest News</Typography>
                            <div style={{
                                width: '50%',
                                // marginLeft: '50%',
                                height: '2px',
                                borderBottom: '2px dotted orange',
                                margin: '8px auto'
                            }}></div>
                            <Typography variant='body2' sx={{ opacity: 0.8 }}><span style={{ color: 'orange' }}>&gt;</span> Sed ut perspiciatis unde omnis.</Typography>
                            <Typography variant='body2' sx={{ opacity: 0.5 }}>5 Minutes Ago</Typography>
                            <Typography variant='body2' sx={{ opacity: 0.8 }}><span style={{ color: 'orange' }}>&gt;</span> Sed ut perspiciatis unde omnis.</Typography>
                            <Typography variant='body2' sx={{ opacity: 0.5 }}>5 Minutes Ago</Typography>
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <Typography variant='h6' fontWeight='bold'>Customer Service</Typography>
                            <div style={{
                                width: '50%',
                                marginLeft: '0%',
                                height: '2px',
                                borderBottom: '2px dotted orange',
                                margin: '8px auto' 
                            }}></div>
                            <Typography variant='body2' sx={{ opacity: 0.8 }}><img src={point} width='15px' height='15px' style={{ marginRight: '5px', marginBottom: '-5px' }} alt="phone" /> Support Forums</Typography>
                            <Typography variant='body2' sx={{ opacity: 0.8 }}><img src={point} width='15px' height='15px' style={{ marginRight: '5px', marginBottom: '-5px' }} alt="phone" /> Communication</Typography>
                            <Typography variant='body2' sx={{ opacity: 0.8 }}><img src={point} width='15px' height='15px' style={{ marginRight: '5px', marginBottom: '-5px' }} alt="phone" /> FAQS</Typography>
                            <Typography variant='body2' sx={{ opacity: 0.8 }}><img src={point} width='15px' height='15px' style={{ marginRight: '5px', marginBottom: '-5px' }} alt="phone" /> Privacy Policy</Typography>
                            <Typography variant='body2' sx={{ opacity: 0.8 }}><img src={point} width='15px' height='15px' style={{ marginRight: '5px', marginBottom: '-5px' }} alt="phone" /> Rules & Conditions</Typography>
                            <Typography variant='body2' sx={{ opacity: 0.8 }}><img src={point} width='15px' height='15px' style={{ marginRight: '5px', marginBottom: '-5px' }} alt="phone" /> Contact Us</Typography>
                        </Grid>

                        <Grid item xs={12} sm={3}>
                            <Typography variant='h6' fontWeight='bold'>Customer Service</Typography>
                            <div style={{
                                width: '50%',
                                marginLeft: '0%',
                                height: '2px',
                                borderBottom: '2px dotted orange',
                                margin: '8px auto' 
                            }}></div>
                            <img src={d15th} width='80px' height='80px' alt="customer Services" />
                            <img src={d26th} width='80px' height='80px' alt="customer Services" />
                            <img src={d22th} width='80px' height='80px' alt="customer Services" />
                            <img src={d20th} width='80px' height='80px' alt="customer Services" />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Grid container spacing={3} alignItems='center' justifyContent='space-between' sx={{ marginTop: 4, marginBottom: '-30px' }}>
                <Grid item xs={12} sm={6}>
                    <Typography variant='body2' sx={{ opacity: 0.6 }}>
                        Copyright &copy; 2021 All Rights Reserved. Site By Xiteb &reg;
                    </Typography>
                </Grid>
                <Grid item xs={12} sm={6} textAlign='right'>
                    <Button
                        variant='contained'
                        onClick={() => {
                            const homeSection = document.getElementById("Home");
                            if (homeSection) {
                                homeSection.scrollIntoView({ behavior: "smooth" });
                            }
                        }}
                        sx={{ backgroundColor: '#F59E0B', padding: '10px' }}>
                        <img src={Up} width='30px' height='30px' alt="up arrow" />
                    </Button>
                </Grid>
            </Grid>
        </footer>
    );
}

export default Footer;