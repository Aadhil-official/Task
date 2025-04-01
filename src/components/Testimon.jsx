import { Button, Divider, Grid, Typography } from '@mui/material';
import React from 'react';
import plussym from '../assets/plussym.png';

function Testimon() {

    const buttoncon = ["Dui ac hendrerit elementum quam ipam ipsum autor lorem", "Mauris vei magna a est lobortis volutpat", "Sed bibendum ornare lorem mauris feugiat suspendisse neque", "Nulla scelerisque dul hendrerit elementum quam"]

    return (
        <div style={{ padding: '20px' }}>
            <Grid container spacing={4} justifyContent='center'>
                <Grid item xs={12}>
                    <div style={{ height: '100px' }}>&nbsp;</div>
                </Grid>
                
                <Grid item xs={12} md={5}>
                    <Typography variant='h6' style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                        Trusted Clients
                    </Typography>
                    <Typography variant='body2' style={{ textTransform: 'uppercase', color: 'lightgray', marginTop: '10px' }}>
                        Lorem Ipsum Dolor Sit Amet Consectetur
                    </Typography>
                    <div style={{ borderRadius: '5px', marginTop: '20px', position: 'relative' }}>
                        <Typography variant='body2' sx={{ backgroundColor: 'lightgray', padding: '20px' }}>
                            Integer congue elit non semper laoreet sed lectus orci posuer nisl tempor se felis ac mauris. Pelentesque inyd urna. Integer vitae felis vel magna posu du vestibulum. Nam rutrum congue diam. Aliquam malesuada maurs etug met Curabitur laoreet convallis nisl pellentesque bibendum.
                        </Typography>
                        <div style={{ bottom: '10px', right: '10px', textAlign: 'right' }}>
                            <Typography variant='body1' style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                                John Deo
                            </Typography>
                            <Typography variant='body2'>Managing Director</Typography>
                        </div>
                    </div>
                </Grid>

                <Grid item xs={12} md={5}>
                    <Typography variant='h6' style={{ textTransform: 'uppercase', fontWeight: 'bold' }}>
                        Why Choose Us
                    </Typography>
                    <Typography variant='body2' style={{ textTransform: 'uppercase', color: 'lightgray', marginTop: '10px' }}>
                        Lorem Ipsum Dolor Sit Amet Consectetur
                    </Typography>
                    <div style={{ marginTop: '20px' }}>
                        {buttoncon.map((item, index) => (
                            <div key={index}>
                                <Divider />
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                    <Typography sx={{ margin: '10px' }} variant='body2'>
                                        {item}
                                    </Typography>
                                    <Button variant='contained' style={{ backgroundColor: 'forestgreen', minWidth: '30px', minHeight: '30px', padding: '0' }}>
                                        <img src={plussym} alt='plus' width='12px' height='12px' />
                                    </Button>
                                </div>
                            </div>
                        ))}
                        <Divider />
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Testimon;
