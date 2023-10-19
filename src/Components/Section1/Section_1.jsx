import React from 'react';
import { Box, Typography } from '@mui/material';

const Section_1 = () => {
  const backgroundImageUrl = 'https://cdna.artstation.com/p/assets/images/images/063/182/510/large/filip-nordin-lybeck-ajay-4.jpg?1684919568';

  return (
    <Box
      component="section"
      className="section001"
      sx={{
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: '0% 0%', // Center the background image
        height: '200vh', // Adjusted height
        display: 'flex',
        justifyContent: 'space-between', // To position content at top left and bottom right
        flexDirection: 'column', // To stack content vertically
        padding: '30px',
      }}
    >
      <div style={{}}>
        <Typography variant="h4" className='sec1' sx={{ color:'White', marginTop: '20px',width:'100px' }}>The Game Football Deserves</Typography>
      </div>
      <div>
        <Typography variant='h3' className='sec2' sx={{ color:"White", marginBottom: '20px' }}>
          GOALS is for everyone, like football can and should be. It’s for the casuals and the pros. For the players, the managers and the fans. Let’s play!
        </Typography>
      </div>
    </Box>
  );
};

export default Section_1;
