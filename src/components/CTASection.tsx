
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  return (
    <section className="section-padding bg-zeroa1-black">
      <div className="container-zeroa1">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zeroa1-orange to-zeroa1-orange/80 p-8 md:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-zeroa1-yellow opacity-20 rounded-full translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-zeroa1-yellow opacity-20 rounded-full -translate-x-1/3 translate-y-1/3"></div>
          
          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pronto para começar sua transformação?
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Saia do zero e alcance seu melhor nível com um plano 100% personalizado para suas necessidades.
            </p>
            <Button className="bg-white hover:bg-white/90 text-zeroa1-orange text-lg px-8 py-6 rounded-lg flex items-center mx-auto gap-2">
              Quero Começar Agora <ArrowRight size={20} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
