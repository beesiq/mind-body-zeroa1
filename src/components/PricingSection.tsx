
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="section-padding bg-zeroa1-black">
      <div className="container-zeroa1">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="heading-lg mb-4 text-white">Invista no seu <span className="text-zeroa1-orange">melhor nível</span></h2>
          <p className="body-md text-gray-400 max-w-3xl mx-auto">
            Um plano que custa menos que uma mensalidade de academia, mas com resultados personalizados.
          </p>
        </div>

        <div className="flex justify-center max-w-md mx-auto">
          <div className="w-full animate-on-scroll">
            <div className="bg-black border border-zeroa1-orange/20 rounded-xl p-8 h-full flex flex-col hover:border-zeroa1-orange/50 transition-all transform hover:-translate-y-1 duration-300">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-semibold mb-2 text-white">1 mês</h3>
                <p className="text-gray-400 mb-6">Ideal para quem quer experimentar</p>
                <div className="mb-6">
                  <span className="text-5xl font-bold text-zeroa1-orange">R$69,90</span>
                  <span className="text-gray-500">/mês</span>
                </div>
              </div>
              
              <ul className="space-y-4 mb-8 flex-grow text-gray-300">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-zeroa1-orange mr-3 flex-shrink-0" />
                  <span>Quiz Inteligente Personalizado</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-zeroa1-orange mr-3 flex-shrink-0" />
                  <span>Plano de Treino para 4 Semanas</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-zeroa1-orange mr-3 flex-shrink-0" />
                  <span>Acompanhamento por WhatsApp</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-zeroa1-orange mr-3 flex-shrink-0" />
                  <span>PDF com Instruções Detalhadas</span>
                </li>
              </ul>
              
              <Button 
                className="btn-primary w-full text-lg"
                onClick={() => window.open('https://tally.so/r/m69L9J', '_blank')}
              >
                Começar Agora
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto animate-on-scroll delay-200">
          <p className="body-sm text-gray-500">
            Satisfação garantida ou seu dinheiro de volta. Se você não estiver satisfeito nos primeiros
            7 dias, devolvemos 100% do valor investido sem questionamentos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
