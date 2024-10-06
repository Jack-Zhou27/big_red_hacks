"use client"
import React, { useEffect, useState, useRef } from 'react';

import Feed from "@/components/Feed.js";
import big_red from "@/public/assets/images/big_red.png";
import Image from "next/image";
import BackgroundVideo from "@/components/BackgroundVideo";
import Link from 'next/link';
const Home = () => {
  
    const videoRef = useRef(null);
    const [isVideoSectionVisible, setIsVideoSectionVisible] = useState(true);
  
    // Function to check if the video section is in view
    const handleScroll = () => {
      const videoSection = document.getElementById('video-section');
      const rect = videoSection.getBoundingClientRect();
      const isVisible = rect.top >= 0 && rect.bottom <= window.innerHeight;
  
      if (rect.bottom < 0 || rect.top > window.innerHeight) {
        setIsVideoSectionVisible(false);
      } else {
        setIsVideoSectionVisible(true);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  
    useEffect(() => {
      if (isVideoSectionVisible) {
        document.body.style.backgroundColor = 'transparent'; // Transparent during the video section
      } else {
        document.body.style.backgroundColor = '#ffffff'; // White background after video section
      }
    }, [isVideoSectionVisible]);
  

  return (
    <>
      <section className="hero-section">
        <h1 className="head_text text-center">
          Introducing: Cornell Flights
          <br className="max-md: hidden" />
          <br />
          <br className="max-md: hidden" />
          <br />
          <h1 className="py-8 blue_gradient font-extrabold">Getting to Cornell has never been easier</h1>
          <p className="red_gradient text-center text-xl">
            The most efficent flight and transportation planner to Cornell! Scraping online databases for current flights and transportation to get
          you to Cornell! Being in the middle of nowhere has never felt so
          connected!
          </p>
  
        </h1>
        
      
      <div className = "justify-center flex py-8"> 
        <Link href="http://34.66.120.146:8000/index.html" className="text-center btn secondary-btn h-10">
            Try now! 
        </Link>
      </div>
      </section>
      
      <section id="video-section" className="video-background-section">
        <BackgroundVideo/>
      </section>

     

    </>
  );
};

export default Home;
