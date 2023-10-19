import React from 'react';
import { Grid, Typography, Button, Box } from '@mui/material';

const Section3 = () => {
  return (
    <Grid container className="custom-container" sx={{ position: 'relative',height:'120vh' }}>
    <Grid  container xs={12} style={{height:'100%',objectFit:'cover'}}>
    <video className="background-video" playsInline muted loop autoPlay style={{width:"100%",objectFit:'cover'}}>
        <source src="https://cdn.sanity.io/files/cgu626el/production/18cb6bf203cfe56a3799d9aebbcbada39f1c64eb.mp4#t=0.1" type="video/mp4" />
      </video>

    </Grid>
      
      <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white', width: '100%' }}>
        <Typography variant="body1" className="caption">
          Dna trailer
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} md={7}>
            <div>
              <Typography variant="h4" className="title">
                <span style={{ opacity: 1 }}>
                  Generated players with unique DNA
                </span>
              </Typography>
            </div>
          </Grid>
          <Grid item md={2}></Grid>
          <Grid item xs={12} md={3}>
            <Typography variant="body1" className="text">
              Every player you generate is unique. Unique stats and unique appearance. Nobody will have a player like yours
            </Typography>
            <Button variant="contained" color="primary" href="/players">
              Explore Players
            </Button>
          </Grid>
        </Grid>
        <Typography variant="h2" className="outlined-text">
          Player genes
        </Typography>
      </Box>
    </Grid>
  );
};

export default Section3;
