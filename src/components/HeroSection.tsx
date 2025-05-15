
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-b from-zeroa1-lightYellow/20 to-white">
      <div className="container-zeroa1">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll animated">
            <h1 className="heading-xl text-zeroa1-black mb-6">
              <span className="text-zeroa1-orange">Treine</span> do jeito certo para o 
              <span className="text-zeroa1-orange"> seu corpo</span>
            </h1>
            <p className="body-lg text-gray-800 mb-8">
              Um sistema de treinos 100% personalizado para a sua rotina, seus objetivos e suas necessidades específicas. Não existem dois treinos iguais, porque nenhuma rotina é igual.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary text-lg flex items-center gap-2">
                Começar Agora <ArrowRight size={20} />
              </Button>
              <Button variant="outline" className="border-zeroa1-orange text-zeroa1-orange hover:bg-zeroa1-orange/10 text-lg">
                Saiba Mais
              </Button>
            </div>
            <div className="mt-8 flex gap-6 items-center">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full bg-gray-300 border-2 border-white" />
                ))}
              </div>
              <p className="text-sm font-medium text-gray-700">
                +2.500 pessoas já transformaram suas rotinas de treino
              </p>
            </div>
          </div>
          <div className="relative animate-on-scroll animated delay-300">
            <div className="w-full aspect-[4/3] bg-zeroa1-orange/20 rounded-2xl overflow-hidden">
              <div className="absolute inset-0 bg-zeroa1-orange/10 rounded-2xl transform rotate-3 -translate-y-4"></div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-zeroa1-yellow rounded-full"></div>
              <div className="w-full h-full flex items-center justify-center">
                <p className="text-center font-medium">Imagem ilustrativa do ZeroA1</p>
              </div>
            </div>
            <div className="absolute -bottom-10 -left-10 p-4 bg-white rounded-lg shadow-xl max-w-[200px]">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-zeroa1-orange rounded-full flex items-center justify-center text-white font-bold">A1</div>
                <span className="font-semibold">Personalizado</span>
              </div>
              <p className="text-sm">Treino adaptado para sua rotina e objetivos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
