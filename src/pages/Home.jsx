import React from 'react'
import CargoArea from '../assets/CargoArea.jpg'
import { Button, Grid, Typography } from '@mui/material'
import leftarr from '../assets/leftarr.png'
import rightarr from '../assets/rightarr.png'
import { Footer, Logos, Nav, Services, State, Testimon, Welcome } from '../components'

function Home() {
    return (
        <div id='Home'>
            <Nav /><br />
            <div style={{ position: 'absolute', marginTop: '13%', paddingRight: '150px', padding: '15px', backgroundColor: '#fff' }}>
                <div style={{ position: 'absolute', backgroundColor: 'yellow', height: '25px', width: '3px' }}></div>
                <Typography variant='body1' sx={{ marginLeft: '10px', fontWeight: 'semibold' }}>
                    Logistic
                </Typography>
                <Typography variant='h3' sx={{ fontWeight: 'semibold' }}>
                    Best Shiping
                </Typography>
                <Typography variant='h3' sx={{ fontWeight: 'bold', color: 'orange' }}>
                    Partner
                </Typography>
                <Typography variant='body2'>
                    We are a leading logistics company <br />
                    that provides a wide range of services<br />
                    to meet the diverse needs of our customers.<br />
                    Our services include freight forwarding,<br />
                    warehousing, customs clearance, and more.
                </Typography>
                <br />
                <Button sx={{ backgroundColor: 'orange' }} variant='contained' size='small'>
                    Discover more
                </Button>
            </div>
            {/* <Grid container>
                <Grid item> */}
            <img src={CargoArea} width='50%' height='50%' style={{ marginLeft: '30%', marginTop: '10%' }} alt="cargo image" />
            {/* </Grid>
            </Grid> */}<br/>
            {/* <div style={{backgroundColor:'orange', padding:'20px'}}> */}
            <Button size='small' variant='contained' sx={{ backgroundColor: 'orange', borderRadius: '0px' }}>
                <img src={leftarr} width='20px' height='20px' alt="arrow" />
            </Button>
            <Button size='small' variant='contained' sx={{ backgroundColor: 'orange', borderRadius: '0px' }}>
                <img src={rightarr} width='20px' height='20px' alt="arrow" />
            </Button><br/>
            <Welcome /><br />
            <Services />
            <State />
            {/* </div> */}
            <Testimon />
            <Logos />
            <Footer />
        </div>
    )
}

export default Home