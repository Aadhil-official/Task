import React, { useState } from 'react'
import CargoArea from '../assets/CargoArea.jpg'
import CargoArea2 from '../assets/cargo2.webp'
import { Button, Grid, Typography } from '@mui/material'
import leftarr from '../assets/leftarr.png'
import rightarr from '../assets/rightarr.png'

function Body() {

  const [image, setImage] = useState(CargoArea);

  const selectImageLeft = () => {
    setImage(CargoArea)
  }

  const selectImageRight = () => {
    setImage(CargoArea2)
  }

  return (
    <div id='Home' style={{ padding: '10px' }}>

      <Grid container alignItems="center" justifyContent="center" spacing={2}>
        <Grid item xs={12}>
          <div style={{ height: '80px' }}>&nbsp;</div>
        </Grid>
        <Grid item xs={12} md={5.5} sx={{ textAlign: { xs: 'center', md: 'left' }, padding: '15px', zIndex: '100', marginTop: '1%' }}>
          <div style={{ display: 'inline-block', textAlign: 'left', backgroundColor: '#fff', padding: '25px', paddingRight: '10px' }}>
            <div style={{ position: 'absolute', backgroundColor: 'orange', height: '25px', width: '3px', display: 'inline-block', marginRight: '10px' }}></div>
            <Typography variant='body1' sx={{ marginLeft: '10px', fontWeight: 'semibold' }}>
              Logistic
            </Typography>
            <Typography variant='h3' sx={{ fontWeight: 'semibold' }}>
              Best Shipping
            </Typography>
            <Typography variant='h3' sx={{ fontWeight: 'bold', color: 'orange' }}>
              Partner
            </Typography>
            <Typography variant='body2'>
              We are a leading logistics company
              that provides a wide range of services
              to meet the diverse needs of our customers.
              Our services include freight forwarding,
              warehousing, customs clearance, and more.
            </Typography>
            <br />
            <Button sx={{ backgroundColor: 'orange', marginTop: '10px' }} variant='contained' size='small'>
              Discover more
            </Button>
          </div>
        </Grid>

        <Grid item xs={12} md={6}>
          <img src={image} style={{ marginLeft: '-30%', width: '130%', height: 'auto' }} alt="cargo image" />
        </Grid>
      </Grid>

      {/* Arrow Buttons */}
      <div style={{ marginTop: '20px' }}>
        <Button size='medium' onClick={selectImageLeft} variant='contained' sx={{ backgroundColor: 'orange', borderRadius: '0px' }}>
          <img src={leftarr} width='20px' height='20px' alt="arrow" />
        </Button>
        <Button size='medium' onClick={selectImageRight} variant='contained' sx={{ backgroundColor: 'orange', borderRadius: '0px' }}>
          <img src={rightarr} width='20px' height='20px' alt="arrow" />
        </Button>
      </div>
    </div>
  )
}

export default Body
