"use client";

import React from "react";

import Image from "next/image";
import CustomButton from "./CustomButton";

import image1 from '../public/hero.png';

const Hero = () => {
  const handleScroll = () => {};

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">Get access to the best car deals.</h1>
        <p className="hero__subtitle">
          Explore the freedom of the open road with our reliable car rental
          service.Reserve your ride today and embark on your next adventure with
          confidence.
        </p>
        <CustomButton
          title="Explore Wheels"
          containerStyle="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src={image1}
            alt="hero"
            fill
            className="object-contain"
          />
           </div>
          <div className="hero__image-overlay"/>
       
      </div>
    </div>
  );
};

export default Hero;
