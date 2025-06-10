import React from 'react';
interface FooterColumnProps {
  title: string;
  links: string[];
  width: string;
  delay: number;
}
const FooterColumn: React.FC<FooterColumnProps> = ({
  title,
  links,
  width,
  delay
}) => {
  return <div className={`${width} animate-fade-in`} style={{
    animationDelay: `${delay}ms`
  }}>
      <div className="text-[#9747FF] transition-colors duration-300 hover:text-[#27CDFE]">{title}</div>
      {links.map((link, index) => <button key={index} className="text-[#BECCE5] mt-4 hover:text-[#27CDFE] transition-all duration-300 hover:scale-105 block text-left">
          {link}
        </button>)}
    </div>;
};
export const Footer: React.FC = () => {
  const socialIcons = ['https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/67e2d943288d35189f5f66214e4444df254cee62?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/ff5ec96cbfe284ba2a5d2c311287594956ecd940?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/30a283e57138ac860159396886a97bb3258c3ccb?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/d60464f0517e57d9e543b51926304a1e670e14c9?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/e39300f218a0bc3e044690b9d8ebb1b5b592579e?placeholderIfAbsent=true', 'https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/1176e07a283606e4e164fdd7ce7dab509eac59d7?placeholderIfAbsent=true'];
  return <footer className="flex w-full flex-col items-stretch justify-center py-px max-md:max-w-full">
      <div className="bg-[rgba(19,0,45,1)] flex w-full flex-col items-center max-md:max-w-full">
        <div className="flex text-base text-[#BECCE5] font-normal flex-wrap max-md:max-w-full">
          <FooterColumn title="Kleros" links={["Earn", "Web3", "Enterprise"]} width="whitespace-nowrap w-[109px]" delay={200} />
          <FooterColumn title="Docs" links={["Documentation", "White Paper", "Yellow Paper", "Brand Assets", "Cooperative"]} width="w-[150px]" delay={400} />
          <FooterColumn title="Governance" links={["PNK Token", "Forum", "Voting", "Community"]} width="w-[113px]" delay={600} />
          <FooterColumn title="More" links={["R&D", "Careers", "Blog"]} width="whitespace-nowrap w-[109px]" delay={800} />
        </div>
        <div className="flex w-[1182px] max-w-full flex-col items-stretch mt-16 max-md:mt-10 animate-fade-in animation-delay-1000">
          <div className="border bg-[#9747FF] z-10 shrink-0 h-px border-[rgba(151,71,255,1)] border-solid max-md:max-w-full transition-all duration-300 hover:shadow-lg" />
          <div className="self-center flex items-center gap-8 overflow-hidden mt-6">
            {socialIcons.map((icon, index) => <button key={index} className="hover:scale-110 transition-transform duration-300" style={{
            animationDelay: `${1200 + index * 100}ms`
          }}>
                <img src={icon} className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto animate-fade-in" alt={`Social media icon ${index + 1}`} />
              </button>)}
          </div>
        </div>
        <div className="w-full text-base font-normal text-center mt-16 max-md:max-w-full max-md:mt-10">
          <div className="flex w-full flex-col items-center justify-center bg-[#220050] px-[70px] py-6 max-md:max-w-full max-md:px-5 animate-fade-in animation-delay-1500">
            <div className="flex w-full max-w-[1180px] items-stretch gap-5 flex-wrap justify-between max-md:max-w-full">
              <img src="https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/55d59446f13097d2f33fef175a6b63d1ca000a8a?placeholderIfAbsent=true" className="aspect-[3.86] object-contain w-[185px] shrink-0 max-w-full transition-transform duration-300 hover:scale-105" alt="Kleros footer logo" />
              <div className="text-[#DAF0FF] my-auto">
                Copyright 2024 © Kleros
              </div>
              <div className="flex items-center gap-6 justify-center">
                <div className="text-[#DAF0FF] self-stretch w-[99px] my-auto rounded-[0px_0px_0px_0px]">
                  Stay Updated
                </div>
                <button className="text-[#1B003F] self-stretch min-h-12 gap-2 whitespace-nowrap bg-[#27CDFE] my-auto px-8 py-3.5 rounded-[300px] hover:bg-[#1fb8e8] transition-all duration-300 hover:scale-105 hover:shadow-lg max-md:px-5">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};