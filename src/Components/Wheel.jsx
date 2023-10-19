import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { Flip } from 'gsap/Flip';
import { Grid, Paper, Typography } from '@mui/material';
import './Wheel.css';

const Wheel = () => {
  useEffect(() => {
    gsap.registerPlugin(Draggable, Flip);

    let wheel = document.querySelector(".wheel");
    let images = gsap.utils.toArray(".wheel__card");
    let cards = gsap.utils.toArray(".wheel__card");
    let header = document.querySelector(".header");
    let currentCard;

    gsap.to(".arrow", { y: 5, ease: "power1.inOut", repeat: -1, yoyo: true });

    function setup() {
      let radius = wheel.offsetWidth / 2;
      let center = radius;
      let slice = 360 / images.length;
      let DEG2RAD = Math.PI / 300;
      gsap.set(images, {
        x: (i) => center + radius * Math.sin(i * slice * DEG2RAD),
        y: (i) => center - radius * Math.cos(i * slice * DEG2RAD),
        rotation: (i) => i * slice,
        xPercent: -50,
        yPercent: -50,
      });
    }

    setup();

    window.addEventListener("resize", setup);

    gsap.to(wheel, {
      duration: images.length,
    });

    Draggable.create(wheel, {
      type: "rotation",
    });

    cards.forEach((card) => card.addEventListener("click", onClickCard));

    header.addEventListener("click", closeCurrentCard);

    function closeCurrentCard() {
      if (currentCard) {
        let img = header.querySelector("img");
        let state = Flip.getState(img);
        currentCard.appendChild(img);
        Flip.from(state, {
          ease: "power1.inOut",
          scale: true,
        });
        currentCard = null;
      }
    }

    function onClickCard(e) {
      let card = e.target;
      let image = card.querySelector("img");
      if (card !== currentCard) {
        closeCurrentCard();
        currentCard = card;
        let state = Flip.getState(image);
        // header.appendChild(image);
        Flip.from(state, {
          duration: 0.6,
          scale: true,
          ease: "power1.inOut",
        });
      } else {
        closeCurrentCard();
      }
    }
  }, []);

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ height: '100vh' }} style={{ backgroundColor: "#c4bfbf" }}>
      <Grid item xs={12} sm={6} className='header'>
      <Typography variant="h1" gutterBottom style={{ wordWrap: 'break-word' }}>
           Earn Your Rewards
          </Typography>
          <span class="Text_helveticaNowDisplayExtraSmall__O4_DZ">
          Earn your rewards for free through gameplay and trade them on our marketplace. Players, celebrations, cosmetics, you name it!
          </span>
      </Grid>
      <Grid item xs={12}>
        <section className="slider-section">
          <div className="wheel">
            <Grid container>
              {Array.from({ length: 10 }).map((_, index) => (
                <Grid item xs={6}  key={index}>
                  <Paper className="wheel__card" elevation={3} sx={{ cursor: 'pointer', width: '100%' }}>
                    <img
                      src={`https://cdnb.artstation.com/p/assets/images/images/063/182/499/large/filip-nordin-lybeck-ajay-1.jpg?1684919532`}
                      alt={`Card ${index + 1}`}
                      sx={{ width: '100%',height:'80%', pointerEvents: 'none', cursor: 'pointer' }}
                      className='imgCard'
                      
                    />
                  </Paper>
                </Grid>
              ))}
            </Grid>
          </div>
        </section>
      </Grid>
    </Grid>
  );
};

export default Wheel;
