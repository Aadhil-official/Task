import { Grid } from '@mui/material';
import React from 'react';
import com from '../assets/companylogo.png';
import '../styles/Logos.css';

function Logos() {
    const arr = Array(12).fill(com);

    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Grid container justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                    <div style={{ height: '100px' }}>&nbsp;</div>
                </Grid>
                <Grid item xs={12} className="film-container">
                    <div className="film">
                        {arr.map((item, index) => (
                            <img key={index} src={item} alt="Company Logo" className="logopart" />
                        ))}
                    </div>
                </Grid>
            </Grid>
        </div>
    );
}

export default Logos;
