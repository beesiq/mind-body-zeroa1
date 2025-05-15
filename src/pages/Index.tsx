
import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import CoachesSection from '@/components/CoachesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSection from '@/components/PricingSection';
import FAQSection from '@/components/FAQSection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';
import ScrollAnimation from '@/components/ScrollAnimation';

const Index: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollAnimation />
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <FeaturesSection />
        <CoachesSection />
        <TestimonialsSection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
