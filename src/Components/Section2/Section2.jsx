import React from 'react';
import { Grid, Typography, Button } from '@mui/material';

const Section2 = () => {
  return (
    <Grid container spacing={2} style={{ backgroundColor: "#c4bfbf" }}>
      {/* Left Half */}
      <Grid item xs={12} md={6} style={{display:'flex',alignItems:"center",justifyContent:"center",backgroundColor: "#c4bfbf"}}>
        <div style={{ padding: '20px' }}>
          <Typography variant="h2" gutterBottom style={{ wordWrap: 'break-word' }}>
            Fast and Furious GamePlay
          </Typography>
          <Typography variant="body1" paragraph>
            FLAWLESS, COMPETITIVE GAMEPLAY IS EVERYTHING TO US. NO COMPROMISES. WHETHER YOU WIN OR LOSE, IT MUST ALWAYS BE BECAUSE YOU DESERVED IT.
          </Typography>
          <Button variant="contained" color="primary">
            Get Started
          </Button>
        </div>
      </Grid>

      {/* Right Half */}
      <Grid item xs={12} md={6}>
        <div style={{ backgroundColor: '#c4bfbf', padding: '20px', height: '100%', display: 'flex', alignItems: 'center' }}>
          <video className="DoubleMedia_video__CkwDi" style={{ width: "100%", maxWidth: "100%" }} playsInline muted loop autoPlay>
            <source src="https://cdn.sanity.io/files/cgu626el/production/2f3bef5f6fcff0db1ea82188b08cd0533b4a0485.mp4#t=0.1" type="video/mp4" />
          </video>
        </div>
      </Grid>
    </Grid>
  );
}

export default Section2;
