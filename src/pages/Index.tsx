import React from 'react';
import { MessageBar } from '../components/MessageBar';
import { HeroSection } from '../components/HeroSection';
import { TrustedBySection } from '../components/TrustedBySection';
import { FeatureCards } from '../components/FeatureCards';
import { ParticipationSection } from '../components/ParticipationSection';
import { ContactSection } from '../components/ContactSection';
import { Footer } from '../components/Footer';

const Index: React.FC = () => {
  return (
    <div className="bg-white overflow-hidden">
      <div className="w-full max-md:max-w-full">
        <MessageBar />
        <main>
          <HeroSection />
          <TrustedBySection />
          <FeatureCards />
          <ParticipationSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
