import React, { useRef, useState } from 'react';
import { Grid, Paper } from '@mui/material';

const VideoItem = ({ src }) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const handleVideoClick = () => {
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <Paper style={{ textAlign: 'center', width: "100%", margin: 0 }}>
      <div style={{ position: 'relative', paddingBottom: '56.25%', height: 400 }}>
        <video
          className="ThreeColumn_video__gHClq"
          playsInline
          muted
          loop
          ref={videoRef}
          onClick={handleVideoClick}
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        >
          <source src={src} type="video/mp4" />
        </video>
      </div>
    </Paper>
  );
};

const Section4 = () => {
  return (
    <Grid container spacing={2}>
      {/* Column 1 */}
      <Grid item xs={12} md={4}>
        <VideoItem src="https://cdn.sanity.io/files/cgu626el/production/ef36049430176e654ae3074921812fd8a43f4b35.mp4#t=0.1" />
      </Grid>

      {/* Column 2 */}
      <Grid item xs={12} md={4}>
        <VideoItem src="https://cdn.sanity.io/files/cgu626el/production/96eaff7ffd80bf7f23fef0fae8bb12b6d090ad0d.mp4#t=0.1" />
      </Grid>

      {/* Column 3 */}
      <Grid item xs={12} md={4}>
        <VideoItem src="https://cdn.sanity.io/files/cgu626el/production/1d3b41e7847c057cb2c88ac5ae181e1b19602792.mp4#t=0.1" />
      </Grid>
    </Grid>
  );
};

export default Section4;
