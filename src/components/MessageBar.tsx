
import React from 'react';

export const MessageBar: React.FC = () => {
  return (
    <div className="w-full max-md:max-w-full animate-fade-in">
      <div className="flex w-full items-stretch gap-5 flex-wrap justify-between bg-[#9747FF] pl-20 pr-8 py-[11px] max-md:max-w-full max-md:px-5">
        <div className="flex items-center gap-4 justify-center group">
          <div className="text-white text-base font-normal text-center self-stretch my-auto transition-transform duration-300 group-hover:scale-105">
            Buy PNK & join the justice revolution
          </div>
          <div className="self-stretch flex items-center gap-2 justify-center w-6 my-auto transition-transform duration-300 group-hover:translate-x-1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/631a127e80ae46ddc42f6aeca7b7faf8e628bac8?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-stretch my-auto"
              alt="Arrow icon"
            />
          </div>
        </div>
        <button className="aspect-[1] object-contain w-4 shrink-0 my-auto transition-transform duration-200 hover:scale-110 hover:rotate-90">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/e7060c0bb7452e909c371868169a97573e4f83ac?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-4 shrink-0 my-auto"
            alt="Close icon"
          />
        </button>
      </div>
    </div>
  );
};
