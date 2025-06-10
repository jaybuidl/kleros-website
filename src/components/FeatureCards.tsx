import React from 'react';
interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  linkText: string;
  linkIcon: string;
  delay: number;
}
const FeatureCard: React.FC<FeatureCardProps> = ({
  icon,
  title,
  description,
  linkText,
  linkIcon,
  delay
}) => {
  return <div className={`min-w-60 grow shrink w-[302px] animate-fade-in`} style={{
    animationDelay: `${delay}ms`
  }}>
      <div className="flex flex-col items-center aspect-[1] bg-[#220050] pt-6 pb-[152px] px-6 rounded-2xl hover:bg-[#2a0060] transition-all duration-300 hover:scale-105 hover:shadow-lg max-md:pb-[100px] max-md:px-5 group">
        <div className="flex mb-[-30px] h-[188px] w-full flex-col items-stretch max-md:mb-2.5">
          <div className="flex flex-col items-stretch text-[32px] text-[#DAF0FF] justify-center">
            <div className="flex min-h-[90px] w-[90px]" />
            <h3 className="text-[#DAF0FF] mt-4 transition-transform duration-300 group-hover:scale-105">
              {title}
            </h3>
          </div>
          <p className="text-[#BECCE5] mt-6 transition-colors duration-300 group-hover:text-[#DAF0FF]">
            {description}
          </p>
          <div className="border bg-[#42498F] min-h-0 max-w-full w-[330px] mt-6 border-[rgba(66,73,143,1)] border-solid transition-all duration-300 group-hover:bg-[#27CDFE]" />
          <button className="flex items-center gap-4 text-[#27CDFE] text-center justify-center mt-6 hover:text-[#1fb8e8] transition-all duration-300 group-hover:scale-105">
            <span className="text-[#27CDFE] self-stretch my-auto">
              {linkText}
            </span>
            <img src={linkIcon} className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto transition-transform duration-300 group-hover:translate-x-1" alt="Link arrow" />
          </button>
        </div>
      </div>
    </div>;
};
export const FeatureCards: React.FC = () => {
  return <section className="w-full bg-[#1B003F] px-32 py-24 max-md:max-w-full max-md:px-5">
      <div className="max-w-full w-[1182px] animate-fade-in">
        <h2 className="text-[#DAF0FF] text-5xl font-medium max-md:max-w-full max-md:text-[10px]">
          Reimagining Justice for the Digital Age
        </h2>
        <p className="text-[#BECCE5] text-2xl font-normal mt-8 max-md:max-w-full animate-fade-in animation-delay-300">
          Kleros provides the infrastructure for fast, secure, and efficient
          dispute resolution that scales.
        </p>
      </div>
      <div className="flex max-w-full w-[1182px] flex-col items-center text-2xl font-normal mt-[65px] max-md:mt-10">
        <div className="w-full max-w-[1182px] max-md:max-w-full">
          <div className="flex gap-6 justify-center flex-wrap">
            <FeatureCard icon="" title="Decentralized Justice" description="Trustless and transparent, secured by blockchain." linkText="Read our Yellow Paper" linkIcon="https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/b346a8ed3eaa50d6bb3c729c9a4c0dc95d0b04cc?placeholderIfAbsent=true" delay={500} />
            <FeatureCard icon="" title="Collective Intelligence" description="Cases are ruled by a network of jurors." linkText="Learn how jurors are drawn" linkIcon="https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/90beab299c370de21f33e703264da2c7eb89ccaa?placeholderIfAbsent=true" delay={700} />
            <FeatureCard icon="" title="Fairness" description="Jurors are incentivized to rule cases honestly." linkText="> $1.2 Mi distributed" linkIcon="https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/db8fffea8c0f8fee4bd0f9d2afddacf5560e9a55?placeholderIfAbsent=true" delay={900} />
          </div>
        </div>
        <div className="flex w-full max-w-[1182px] flex-col items-center text-center mt-12 max-md:max-w-full max-md:mt-10 animate-fade-in animation-delay-1200">
          <p className="text-[#BECCE5] self-stretch w-full gap-4 max-md:max-w-full">
            For an introduction to decentralized justice, read the article:
          </p>
          <p className="self-stretch w-full gap-4 text-[#daf0ff] max-md:max-w-full">
            <span className="text-[#27CDFE] hover:text-[#1fb8e8] transition-colors duration-300 cursor-pointer">
              "When Online Dispute Resolution Meets Blockchain: The
              Birth of Decentralized Justice"
            </span>{" "}
          </p>
          <p className="text-[#DAF0FF] self-stretch w-full gap-4 max-md:max-w-full">
            at the Stanford Journal of Blockchain Law & Policy.
          </p>
        </div>
      </div>
    </section>;
};