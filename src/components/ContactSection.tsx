import React from 'react';
export const ContactSection: React.FC = () => {
  return <section className="items-stretch flex w-full flex-col justify-center bg-[#1B003F] px-32 py-24 max-md:max-w-full max-md:px-5">
      <div className="flex max-w-full w-[1177px] gap-[40px_65px] flex-wrap">
        <div className="min-w-60 grow shrink w-[757px] max-md:max-w-full animate-fade-in">
          <h2 className="text-[#DAF0FF] w-[683px] max-w-full text-5xl font-medium rounded-[0px_0px_0px_0px] max-md:text-[40px] max-md:pr-5">
            Get in Touch!
          </h2>
          <div className="max-w-full w-[816px] text-2xl font-normal text-center mt-12 max-md:mt-10 animate-fade-in animation-delay-300">
            <div className="flex w-full max-w-[816px] flex-col max-md:max-w-full">
              <p className="text-[#BECCE5] max-md:max-w-full text-left">
                Reach out to our team to start the conversation!
              </p>
              <button className="flex items-center gap-2 text-[#27CDFE] mt-8 hover:text-[#1fb8e8] transition-all duration-300 hover:scale-105 group">
                <span className="text-[#27CDFE] self-stretch my-auto">
                  Get in Touch
                </span>
                <img src="https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/60ec797c93f2b497362a7e9fe6d95bb62caca376?placeholderIfAbsent=true" className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto transition-transform duration-300 group-hover:translate-x-1" alt="Contact arrow" />
              </button>
            </div>
          </div>
        </div>
        <img src="https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/481a29da7f85680057f4d170eb3ce91c0ad2e4b4?placeholderIfAbsent=true" className="aspect-[1.11] object-contain w-[237px] min-w-60 grow shrink animate-fade-in animation-delay-500 hover:scale-105 transition-transform duration-300" alt="Contact illustration" />
      </div>
    </section>;
};