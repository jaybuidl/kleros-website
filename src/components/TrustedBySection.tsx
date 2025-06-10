
import React from 'react';

export const TrustedBySection: React.FC = () => {
  const logoImages = [
    "https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/0713ca8bf4e636dca68726bf01e40cebfdf267b1?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/c7196c459bde6ba496201302760398aecc6c6d33?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/0ddaccdbfec0f78ca60f6cc450ca1406b6f4a56b?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/142153b0c3aa0ab8470d05b71de5ff43a3f6fa1c?placeholderIfAbsent=true",
    "https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/ea6e9ffd4f374a060037026cdc94e5324eef227d?placeholderIfAbsent=true",
    null, // placeholder for white circle
    "https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/1681cc3782a1c8a6daa4419c15df1e3c4fa2b975?placeholderIfAbsent=true",
    null, // placeholder for white circle
    "https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/238254b6fd79b1fe32fa14e5082aac8897e52a69?placeholderIfAbsent=true",
    null, // placeholder for white circle
  ];

  // Duplicate the logos for seamless infinite scroll
  const duplicatedLogos = [...logoImages, ...logoImages];

  return (
    <section className="w-full overflow-hidden max-md:max-w-full">
      <div className="flex w-full flex-col items-center bg-[#220050] pl-[41px] py-12 max-md:max-w-full max-md:pl-5">
        <h2 className="text-[#BECCE5] text-center text-2xl font-normal animate-fade-in">
          Trusted by
        </h2>
        
        {/* Infinite scroll container with fade effects */}
        <div className="relative w-full mt-12 max-md:mt-10 overflow-hidden">
          {/* Left fade gradient */}
          <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-[#220050] to-transparent z-10 pointer-events-none" />
          
          {/* Right fade gradient */}
          <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-[#220050] to-transparent z-10 pointer-events-none" />
          
          {/* Scrolling logos container */}
          <div className="flex animate-scroll-left hover:paused" style={{ width: 'calc(200%)' }}>
            {duplicatedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0 mx-10">
                {logo ? (
                  <img
                    src={logo}
                    className="aspect-[1] object-contain w-16 h-16 rounded-[300px] hover:scale-110 transition-transform duration-300"
                    alt="Partner logo"
                  />
                ) : (
                  <div className="bg-white w-16 h-16 rounded-[300px] hover:scale-110 transition-transform duration-300" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom logos section */}
        <div className="flex items-center gap-[40px_64px] flex-wrap mt-[73px] max-md:max-w-full max-md:mt-10">
          <div className="self-stretch flex min-w-60 flex-col w-[380px] my-auto pt-[21px] px-[76px]">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/9220e9f6c5454a7e85835a58f5be9186853a6dac?placeholderIfAbsent=true"
              className="aspect-[3.58] object-contain w-[140px] max-w-full hover:scale-105 transition-transform duration-300 animate-fade-in animation-delay-1200"
              alt="EU logo"
            />
          </div>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/785812ba1bbbd279a284ecc02290f1cd2230bcad?placeholderIfAbsent=true"
            className="aspect-[12.5] object-contain w-[501px] self-stretch min-w-60 my-auto max-md:max-w-full hover:scale-105 transition-transform duration-300 animate-fade-in animation-delay-1300"
            alt="Institutional partner"
          />
        </div>
      </div>
    </section>
  );
};
