import React, { useEffect } from 'react';
import { Grid, Typography } from '@mui/material';
import gsap from 'gsap';
import './Footer.css';

function Footer() {

  useEffect(() => {
    const items = document.querySelectorAll('.footer')

    items.forEach((el) => {
      const image = el.querySelector('.imgRobot')

      el.addEventListener('mouseenter', (e) => {
        gsap.to(image, { autoAlpha: 1 })
      })

      el.addEventListener('mouseleave', (e) => {
        gsap.to(image, { autoAlpha: 0 })
      })

      el.addEventListener('mousemove', (e) => {
        gsap.set(image, { x: 0, y: 0 });
      });

    })
  }, []);

  return (
    <Grid container className='footer'>
      {/* First Row */}
      <Grid item xs={12} className='section1'>
        <Typography variant='h2' >Your Club. Your Players</Typography>
      </Grid>

      {/* Second Row */}
      <Grid container className='section2'>
        <Grid item xs={6} className='section21'>
          <Typography variant='h6'>GOALS IS OUR ATTEMPT TO GIVE FOOTBALL THE GAME IT DESERVES
          </Typography>
        </Grid>
        <Grid item xs={6} className='section22'>

          <Grid container className='section221'>
            <Grid item xs={4}>
              <h3>Home</h3>
            </Grid>
            <Grid item xs={4}>
              <h3>Community</h3>
            </Grid>
            <Grid item xs={4}>
              <h3>News</h3>
            </Grid>
          </Grid>
          <Grid container className='section222' style={{ textAlign: "center" }}>
            <Grid item xs={4}>
              <h3>GamePlay</h3>
            </Grid>
            <Grid item xs={4}>
              <h3>Players</h3>
            </Grid>
            <Grid item xs={4}>
              <h3>Assets</h3>
            </Grid>
          </Grid>
          <Grid container className='section223'>
            <Grid item xs={4}>
              <h3>Career</h3>
            </Grid>
            <Grid item xs={4}>
              <h3>Help</h3>
            </Grid>
            <Grid item xs={4}>
              <h3>Contact Us</h3>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {/* Third Row */}
      <Grid item xs={12}>
        <div>More Button </div>
      </Grid>
      <div className='imgSection'>
        <img src="https://playgoals.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F03_BallBot_footer_eyes-glowy.77245ee6.png&w=3840&q=75" className='imgRobot' alt="Robot" />
      </div>
    </Grid>
  );
}

export default Footer;
