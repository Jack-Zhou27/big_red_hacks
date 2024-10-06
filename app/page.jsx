"use client"
import React, { useEffect, useState, useRef } from 'react';

import Feed from "@/components/Feed.js";
import big_red from "@/public/assets/images/big_red.png";
import Image from "next/image";
import BackgroundVideo from "@/components/BackgroundVideo";
import wave from "@/public/assets/images/wave2.svg"
import Link from 'next/link';
const Home = () => {

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
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <br>
        </br>
        <h1 className="red_gradient items-center"> made with love by the Cornell Flights team </h1>
      </section>

     

    </>
  );
};

export default Home;
