import React from 'react';
export const Navigation: React.FC = () => {
  return <nav className="relative bg-[rgba(34,0,80,0)] flex w-full flex-col items-center text-base justify-center py-4 max-md:max-w-full animate-fade-in">
      <div className="flex w-full items-stretch gap-5 flex-wrap justify-between max-md:max-w-full px-32 pr-8 max-md:pl-5 max-md:pr-5">
        <img src="https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/dc4722bd4940cf4ee220155eceb32914e72a9469?placeholderIfAbsent=true" className="aspect-[3.86] object-contain w-[185px] shrink-0 max-w-full transition-transform duration-300 hover:scale-105" alt="Kleros logo" />
        <div className="flex items-center gap-8 text-white whitespace-nowrap justify-center my-auto max-md:max-w-full">
          <div className="flex flex-col self-stretch relative aspect-[3.05] w-[61px] my-auto">
            <img src="https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/47f58808777cfd70f3d94a5b69fa523b096e0096?placeholderIfAbsent=true" className="absolute h-full w-full object-cover inset-0" alt="Apps background" />
            <button className="relative self-stretch gap-2 hover:text-[#27CDFE] transition-all duration-300 hover:scale-105">
              Apps
            </button>
          </div>
          <div className="self-stretch w-8 my-auto">
            <button className="self-stretch gap-2 hover:text-[#27CDFE] transition-all duration-300 hover:scale-105">
              Earn
            </button>
          </div>
          <div className="self-stretch w-[39px] my-auto">
            <button className="self-stretch gap-2 hover:text-[#27CDFE] transition-all duration-300 hover:scale-105">
              Web3
            </button>
          </div>
          <div className="self-stretch w-[72px] my-auto">
            <button className="self-stretch gap-2 hover:text-[#27CDFE] transition-all duration-300 hover:scale-105">
              Enterprise
            </button>
          </div>
          <div className="flex flex-col self-stretch relative aspect-[4.75] w-[95px] my-auto">
            <img src="https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/2f345268062d321082d41b8c34a4f5b81eaae56b?placeholderIfAbsent=true" className="absolute h-full w-full object-cover inset-0" alt="Resources background" />
            <button className="relative self-stretch gap-2 hover:text-[#27CDFE] transition-all duration-300 hover:scale-105">
              Resources
            </button>
          </div>
        </div>
        <div className="flex items-center gap-8 text-[#1B003F]">
          <button className="self-stretch bg-[#27CDFE] min-h-12 gap-2 my-auto px-8 py-3.5 rounded-[300px] hover:bg-[#1fb8e8] transition-all duration-300 hover:scale-105 hover:shadow-lg max-md:px-5">
            Enter Court
          </button>
        </div>
      </div>
    </nav>;
};