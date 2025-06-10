
import React from 'react';

export const Navigation: React.FC = () => {
  return <nav className="relative bg-[rgba(34,0,80,0)] flex w-full flex-col items-center text-base justify-center py-4 max-md:max-w-full animate-fade-in">
      <div className="flex w-full items-stretch gap-5 flex-wrap justify-between max-md:max-w-full px-32  max-md:pl-5 max-md:pr-5">
        <img src="https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/dc4722bd4940cf4ee220155eceb32914e72a9469?placeholderIfAbsent=true" className="aspect-[3.86] object-contain w-[185px] shrink-0 max-w-full transition-transform duration-300 hover:scale-105" alt="Kleros logo" />
        <div className="flex items-center gap-8 text-white justify-center my-auto max-md:max-w-full">
          <button className="px-4 py-2 hover:text-[#27CDFE] transition-all duration-300 hover:scale-105">
            Apps
          </button>
          <button className="px-4 py-2 hover:text-[#27CDFE] transition-all duration-300 hover:scale-105">
            Earn
          </button>
          <button className="px-4 py-2 hover:text-[#27CDFE] transition-all duration-300 hover:scale-105">
            Web3
          </button>
          <button className="px-4 py-2 hover:text-[#27CDFE] transition-all duration-300 hover:scale-105">
            Enterprise
          </button>
          <button className="px-4 py-2 hover:text-[#27CDFE] transition-all duration-300 hover:scale-105">
            Resources
          </button>
        </div>
        <div className="flex items-center gap-8 text-[#1B003F]">
          <button className="self-stretch bg-[#27CDFE] min-h-12 gap-2 my-auto px-8 py-3.5 rounded-[300px] hover:bg-[#1fb8e8] transition-all duration-300 hover:scale-105 hover:shadow-lg max-md:px-5">
            Enter Court
          </button>
        </div>
      </div>
    </nav>;
};
