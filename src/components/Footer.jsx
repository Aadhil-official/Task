import { Button, Grid, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Up from '../assets/up.png'

function Footer() {
    return (
        <footer style={{ backgroundColor: 'gray', padding: '20px', marginTop: '20px' }}>
            <div style={{ position: 'absolute', right: '50px' }}>
                <TextField sx={{ marginTop: '-5px', marginRight: '10px' }} id="outlined-basic" label="Outlined" variant="outlined" />
                <Button variant='contained' size='large'>subscribe</Button>
            </div>
            <Typography variant='h4'>
                Weekly Newsletter
            </Typography>

            <Typography variant='body2'>
                There are many vialation of passages of lorem ipsum available
            </Typography>
            <br /><br />
            <Grid container>
                <Grid item xs={2}></Grid>
                <Grid item xs={2} justifyContent='center'>
                    <Typography sx={{ color: 'white' }} variant='h6'>
                        About us<br />

                    </Typography>
                </Grid>
                <Grid item xs={2} justifyContent='center'>
                    <Typography sx={{ color: 'white' }} variant='h6'>
                        Letest News
                    </Typography>
                </Grid>
                <Grid justifyContent='center' item xs={2}>
                    <Typography sx={{ color: 'white' }} variant='h6'>
                        Customer service
                    </Typography>
                </Grid>
                <Grid item xs={2} justifyContent='center'>
                    <Typography sx={{ color: 'white' }} variant='h6'>
                        Customer service
                    </Typography>
                </Grid>
                <Grid item xs={2}></Grid>
                <br /><br />
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                    <Typography variant='body2'>Copyright &copy; 2021 All Right Reserved. Site By Xiteb&reg;</Typography>
                </Grid>
                <Grid item xs={2} textAlign='right'>
                    <Button onClick={() => { <Link to={'#Home'} /> }} variant='contained' sx={{ backgroundColor: 'orange', padding: '15px' }}>
                        <img src={Up} width='40px' height='40px' alt="up arrow" />
                    </Button>
                </Grid>
            </Grid>

        </footer>
    )
}

export default Footer