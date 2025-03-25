import { Button, Divider, Grid, Typography } from '@mui/material'
import React from 'react'
import plussym from '../assets/plussym.png'

function Testimon() {
    return (
        <div style={{marginTop:'50px'}}>
            <Grid container spacing={2}>
                <Grid item xs={2}></Grid>
                <Grid item xs={4}>
                    <Typography style={{ textTransform: 'uppercase', fontWeight: 'bold' }} variant='h5'>
                        Trusted Clients
                    </Typography><br />
                    <Typography style={{ textTransform: 'uppercase', color: 'lightgray' }} variant='body1'>
                        Lorem Ipsum Dolor Sit Amet Consectetur
                    </Typography><br /><br />
                    <div style={{ padding: '20px', backgroundColor: 'lightgray' }}>
                        <Typography variant='body2'>
                            Integer congue elit non  semper la
                        </Typography>
                    </div>
                    <div style={{ marginRight: '50%' }}>
                        <Typography variant='h6' >
                            JOHN DEO<br />Managing Director
                        </Typography>
                    </div>
                </Grid>

                <Grid item xs={4}>
                    <Typography style={{ textTransform: 'uppercase', fontWeight: 'bold' }} variant='h5'>
                        Why Choose Us
                    </Typography><br />
                    <Typography style={{ textTransform: 'uppercase', color: 'lightgray' }} variant='body1'>
                        Lorem Ipsum Dolor Sit Amet Consectetur
                    </Typography><br /><br />
                    <Divider />
                    <Typography variant='body2'>
                        Integer congue elit non  semper la
                        <Button variant='contained' sx={{marginLeft:'10px',backgroundColor:'forestgreen', width:'10px', height:'20px'}}>
                            <img src={plussym} alt="plussym" width='10px' height='10px' />
                        </Button>
                    </Typography>
                    <Divider />
                    <Typography variant='body2'>
                        Integer congue elit non  semper la
                        <Button variant='contained' sx={{marginLeft:'10px',backgroundColor:'forestgreen', width:'10px', height:'20px'}}>
                            <img src={plussym} alt="plussym" width='10px' height='10px' />
                        </Button>
                    </Typography>
                    <Divider />
                    <Typography variant='body2'>
                        Integer congue elit non  semper la
                        <Button variant='contained' sx={{marginLeft:'10px',backgroundColor:'forestgreen', width:'10px', height:'20px'}}>
                            <img src={plussym} alt="plussym" width='10px' height='10px' />
                        </Button>
                    </Typography>
                    <Divider />
                    <Typography variant='body2'>
                        Integer congue elit non  semper la
                        <Button variant='contained' sx={{marginLeft:'10px',backgroundColor:'forestgreen', width:'10px', height:'20px'}}>
                            <img src={plussym} alt="plussym" width='10px' height='10px' />
                        </Button>
                    </Typography>
                    <Divider />

                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </div>
    )
}

export default Testimon