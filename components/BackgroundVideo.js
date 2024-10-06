// components/BackgroundVideo.js
import React from 'react';
import Link from 'next/link';
const BackgroundVideo = () => {
  return (
    <section> 
      <div className="video-background-container">

        <video autoPlay loop muted className="video-background absolute w-auto min-w-full min-h-full max-w-none">
          <source src="/assets/cu.mp4" type="video/mp4" />
        </video>
        
        <div className="content-overlay">
          
        </div>
          
      </div>
    </section>
  );
};

export default BackgroundVideo;
