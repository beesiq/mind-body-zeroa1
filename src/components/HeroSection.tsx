
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-black">
      <div className="container-zeroa1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll animated">
            <div className="flex justify-start mb-6">
              <img 
                src="/lovable-uploads/0162e6e2-704b-4d2c-907c-18eaf24f5d2b.png" 
                alt="ZeroA1 Logo" 
                className="h-32" 
              />
            </div>
            <h1 className="heading-xl text-white mb-6">
              <span className="text-zeroa1-orange">Treine</span> do jeito certo para o 
              <span className="text-zeroa1-orange"> seu corpo</span>
            </h1>
            <p className="body-lg text-gray-400 mb-8">
              Um sistema de treinos 100% personalizado para a sua rotina, seus objetivos e suas necessidades específicas. Não existem dois treinos iguais, porque nenhuma rotina é igual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary text-lg flex items-center gap-2" onClick={() => window.open('https://tally.so/r/m69L9J', '_blank')}>
                Começar Agora <ArrowRight size={20} />
              </Button>
              <Button variant="outline" className="border-zeroa1-orange text-zeroa1-orange hover:bg-zeroa1-orange/10 text-lg">
                Saiba Mais
              </Button>
            </div>
            <div className="mt-8 flex gap-6 items-center">
              <div className="flex -space-x-3">
                {[
                  'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=160&q=80',
                  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=160&q=80',
                  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=160&q=80',
                  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=160&q=80'
                ].map((src, i) => (
                  <img 
                    key={i} 
                    src={src} 
                    alt={`Person ${i+1}`} 
                    className="w-10 h-10 rounded-full border-2 border-black object-cover" 
                  />
                ))}
              </div>
              <p className="text-sm font-medium text-gray-300">
                +2.500 pessoas já transformaram suas rotinas de treino
              </p>
            </div>
          </div>
          <div className="relative animate-on-scroll animated delay-300">
            <div className="w-full aspect-[4/3] bg-zeroa1-orange/20 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-zeroa1-orange/10 rounded-2xl transform rotate-3 -translate-y-4"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-zeroa1-yellow rounded-full"></div>
              <div className="w-full h-full flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&q=80" 
                  alt="Person exercising" 
                  className="object-cover w-full h-full opacity-70"
                />
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 p-4 bg-zeroa1-black rounded-lg shadow-xl border border-zeroa1-orange/20 max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-zeroa1-orange rounded-full flex items-center justify-center text-white font-bold">A1</div>
                <span className="font-semibold text-white">Personalizado</span>
              </div>
              <p className="text-sm text-gray-300">Treino adaptado para sua rotina e objetivos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
