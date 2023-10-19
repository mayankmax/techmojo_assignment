import React, { useEffect } from 'react';
import gsap from 'gsap';
import { Draggable } from 'gsap/Draggable';
import { Flip } from 'gsap/Flip';
import { Grid, Paper } from '@mui/material';

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
      let DEG2RAD = Math.PI / 270;
      gsap.set(images, {
        x: (i) => center + radius * Math.sin(i * slice * DEG2RAD),
        y: (i) => center - radius * Math.cos(i * slice * DEG2RAD),
        rotation: (i) => i * slice,
        xPercent: -50,
        yPercent: -50
      });
    }

    setup();

    window.addEventListener("resize", setup);

    gsap.to(wheel, {
      duration: images.length
    });

    Draggable.create(wheel, {
      type: "rotation"
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
          scale: true
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
        header.appendChild(image);
        Flip.from(state, {
          duration: 0.6,
          scale: true,
          ease: "power1.inOut"
        });
      } else {
        closeCurrentCard();
      }
    }
  }, []);

  return (
    <Grid container justifyContent="center" alignItems="center" sx={{ height: '100vh' }}>
      <Grid item xs={12} sm={6}>
        <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
          {/* Add any header content here */}
          {/* <img src="..." alt="Header Image" /> */}
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <section className="slider-section">
          <div className="wheel">
            {/* Your wheel cards */}
            {/* Example card */}
            {/* Add Material-UI Paper components for the cards */}
            {/* For each card, add Paper component with image inside */}
            <Grid container spacing={2}>
              {Array.from({ length: 10 }).map((_, index) => (
                <Grid item xs={6} sm={3} key={index}>
                  <Paper className="wheel__card" elevation={3}>
                    <img
                      src={`https://assets.codepen.io/756881/amys-${index + 1}.jpg`}
                      alt={`Card ${index + 1}`}
                      style={{ width: '100%', pointerEvents: 'none', zIndex: 999, cursor: 'pointer' }}
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
