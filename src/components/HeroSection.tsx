
import React from 'react';
import { Navigation } from './Navigation';

export const HeroSection: React.FC = () => {
  return (
    <section className="w-full font-normal text-center max-md:max-w-full">
      <div className="flex flex-col relative min-h-[835px] w-full items-stretch pb-[371px] bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 max-md:max-w-full max-md:pb-[100px]">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/54fc703b9f8e221023f07d7585c8cd9a6c90e9d0?placeholderIfAbsent=true"
          className="absolute h-full w-full object-cover inset-0"
          alt="Hero background"
          loading="eager"
        />
        <Navigation />
        <div 
          className="relative flex mb-[-74px] flex-col text-white ml-32 mt-32 max-md:max-w-full max-md:mt-10 max-md:mb-2.5 animate-slide-in-right animation-delay-300"
          style={{
            animation: 'slide-in-right 0.8s ease-out forwards',
            animationDelay: '300ms',
            opacity: 0
          }}
        >
          <h1 
            className="text-8xl font-medium max-md:max-w-full max-md:text-[40px] animate-fade-in animation-delay-500"
            style={{
              animation: 'fade-in 0.8s ease-out forwards',
              animationDelay: '500ms',
              opacity: 0
            }}
          >
            The Justice Protocol
          </h1>
          <p 
            className="text-2xl mt-8 max-md:max-w-full animate-fade-in animation-delay-700"
            style={{
              animation: 'fade-in 0.8s ease-out forwards',
              animationDelay: '700ms',
              opacity: 0
            }}
          >
            Decentralized dispute resolution for the new economy.
          </p>
          <div 
            className="flex gap-4 text-base mt-8 max-md:max-w-full animate-fade-in animation-delay-1000"
            style={{
              animation: 'fade-in 0.8s ease-out forwards',
              animationDelay: '1000ms',
              opacity: 0
            }}
          >
            <button className="self-stretch min-h-12 gap-2 px-8 py-3.5 rounded-[300px] border-white border-solid border-2 hover:bg-white hover:text-[#1B003F] transition-all duration-300 hover:scale-105 hover:shadow-lg max-md:px-5">
              Solutions for Web3
            </button>
            <button className="self-stretch min-h-12 gap-2 px-8 py-3.5 rounded-[300px] border-white border-solid border-2 hover:bg-white hover:text-[#1B003F] transition-all duration-300 hover:scale-105 hover:shadow-lg max-md:px-5">
              Solutions for Enterprise
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
