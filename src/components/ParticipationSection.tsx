
import React from 'react';

interface ParticipationCardProps {
  title: string;
  description: string;
  delay: number;
}

const ParticipationCard: React.FC<ParticipationCardProps> = ({ title, description, delay }) => {
  return (
    <div className={`min-w-60 grow shrink w-[463px] max-md:max-w-full animate-fade-in`} style={{ animationDelay: `${delay}ms` }}>
      <div className="border border-[color:var(--Color-Schemes-Stroke,#42498F)] shadow-[0px_2px_3px_0px_rgba(0,0,0,0.06)] flex flex-col bg-[#220050] pt-6 pb-[107px] px-6 rounded-2xl border-solid hover:border-[#27CDFE] transition-all duration-300 hover:scale-105 hover:shadow-xl max-md:max-w-full max-md:pb-[100px] max-md:px-5 group">
        <div className="mb-[-21px] h-[188px] w-[330px] max-w-full max-md:mb-2.5">
          <div className="flex w-full flex-col items-stretch text-[32px] text-[#DAF0FF] font-medium justify-center">
            <div className="flex min-h-[90px] w-[90px]" />
            <h3 className="text-[#DAF0FF] mt-4 transition-transform duration-300 group-hover:scale-105">
              {title}
            </h3>
          </div>
          <p className="text-[#BECCE5] text-2xl font-normal mt-6 max-md:max-w-full transition-colors duration-300 group-hover:text-[#DAF0FF]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export const ParticipationSection: React.FC = () => {
  return (
    <section className="items-stretch flex w-full flex-col justify-center bg-[#220050] px-32 py-24 max-md:max-w-full max-md:px-5">
      <div className="flex w-full max-w-[1182px] flex-col items-stretch max-md:max-w-full">
        <div className="w-full animate-fade-in">
          <h2 className="text-[#DAF0FF] text-5xl font-medium max-md:max-w-full max-md:text-[40px]">
            Start Participating
          </h2>
          <p className="text-[#BECCE5] text-2xl font-normal mt-8 max-md:max-w-full animate-fade-in animation-delay-300">
            There are two main ways you can earn money while contributing:
            serving as a juror or working as a curator.
          </p>
        </div>
        <div className="flex min-h-[319px] w-full gap-6 flex-wrap mt-12 max-md:mt-10">
          <ParticipationCard
            title="Become a Juror"
            description="Earn rewards while solving cases in the Kleros Court."
            delay={500}
          />
          <ParticipationCard
            title="Become a Curator"
            description="Earn rewards helping curate the items submitted to the Kleros lists."
            delay={700}
          />
        </div>
        <div className="flex gap-8 text-2xl text-[#27CDFE] font-normal text-center mt-12 max-md:max-w-full max-md:mt-10 animate-fade-in animation-delay-900">
          <button className="flex items-center gap-2 hover:text-[#1fb8e8] transition-all duration-300 hover:scale-105 group">
            <span className="text-[#27CDFE] self-stretch my-auto">
              Join our Telegram
            </span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/d8f52e0573a7137d07759105068e1af55d595903?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto transition-transform duration-300 group-hover:translate-x-1"
              alt="Telegram icon"
            />
          </button>
          <button className="flex items-center gap-2 hover:text-[#1fb8e8] transition-all duration-300 hover:scale-105 group">
            <span className="text-[#27CDFE] self-stretch my-auto">
              Join our Discord
            </span>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/defe13c015347109567ec65e145f81e444369d46?placeholderIfAbsent=true"
              className="aspect-[1] object-contain w-6 self-stretch shrink-0 my-auto transition-transform duration-300 group-hover:translate-x-1"
              alt="Discord icon"
            />
          </button>
        </div>
        <div className="w-full text-center mt-12 max-md:mt-10 animate-fade-in animation-delay-1100">
          <div className="flex flex-col justify-center items-center overflow-hidden relative min-h-[187px] w-full px-20 py-[34px] max-md:max-w-full max-md:px-5 group">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/1b9b30492992499490f097b922f340b2/df5760932a8963cb538e655791e2c34f5151ec65?placeholderIfAbsent=true"
              className="absolute h-full w-full object-cover inset-0 transition-transform duration-300 group-hover:scale-105"
              alt="CTA background"
            />
            <div className="relative flex flex-col items-center max-md:max-w-full">
              <h3 className="text-[#DAF0FF] text-[32px] font-medium max-md:max-w-full transition-transform duration-300 group-hover:scale-105">
                Buy PNK to become a juror in the Kleros court.
              </h3>
              <button className="self-stretch bg-[#27CDFE] min-h-12 gap-2 text-base text-[#1B003F] font-normal mt-8 px-8 py-3.5 rounded-[300px] hover:bg-[#1fb8e8] transition-all duration-300 hover:scale-105 hover:shadow-lg max-md:px-5">
                Start Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
