import React from 'react';
import '../styles/videoBG.css';
import Video from '../content/videobg/Shimmering_Particles.m4v';

const VideoBG = () => {
  return <video id="background-video" src={Video} type="video" loop autoPlay />;
};

export default VideoBG;
