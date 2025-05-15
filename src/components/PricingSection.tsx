
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from 'lucide-react';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-zeroa1">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Invista no seu <span className="text-zeroa1-orange">melhor nível</span></h2>
          <p className="body-md text-gray-700 max-w-3xl mx-auto">
            Um plano que custa menos que uma mensalidade de academia, mas com resultados personalizados.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-4xl mx-auto">
          <div className="flex-1 animate-on-scroll">
            <div className="border border-gray-200 rounded-xl p-8 h-full flex flex-col">
              <h3 className="text-xl font-semibold mb-2">Plano Mensal</h3>
              <p className="text-gray-600 mb-6">Ideal para quem quer experimentar</p>
              <div className="mb-6">
                <span className="text-4xl font-bold">R$97</span>
                <span className="text-gray-500">/mês</span>
              </div>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-zeroa1-orange mr-2" />
                  <span>Quiz Inteligente Personalizado</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-zeroa1-orange mr-2" />
                  <span>Plano de Treino para 4 Semanas</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-zeroa1-orange mr-2" />
                  <span>Acompanhamento por WhatsApp</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-zeroa1-orange mr-2" />
                  <span>PDF com Instruções Detalhadas</span>
                </li>
              </ul>
              <Button variant="outline" className="w-full border-zeroa1-orange text-zeroa1-orange hover:bg-zeroa1-orange/10">
                Escolher Plano
              </Button>
            </div>
          </div>

          <div className="flex-1 animate-on-scroll delay-100">
            <div className="bg-zeroa1-black text-white rounded-xl p-8 h-full flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-zeroa1-orange text-white px-4 py-1 text-sm font-semibold">
                MAIS POPULAR
              </div>
              <h3 className="text-xl font-semibold mb-2">Plano Trimestral</h3>
              <p className="text-gray-400 mb-6">Para compromisso com resultados</p>
              <div className="mb-2">
                <span className="text-4xl font-bold text-zeroa1-yellow">R$77</span>
                <span className="text-gray-400">/mês</span>
              </div>
              <p className="text-sm text-zeroa1-yellow mb-6">Economia de 20%</p>
              <ul className="space-y-3 mb-8 flex-grow">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-zeroa1-yellow mr-2" />
                  <span>Tudo do plano mensal</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-zeroa1-yellow mr-2" />
                  <span>3 Planos de Treino Sequenciais</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-zeroa1-yellow mr-2" />
                  <span>Progressão Adaptativa de Exercícios</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-zeroa1-yellow mr-2" />
                  <span>Acompanhamento Contínuo</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-zeroa1-yellow mr-2" />
                  <span>Ajustes Mensais ao Plano</span>
                </li>
              </ul>
              <Button className="btn-primary w-full">
                Escolher Plano
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="body-sm text-gray-500">
            Satisfação garantida ou seu dinheiro de volta. Se você não estiver satisfeito nos primeiros
            14 dias, devolvemos 100% do valor investido sem questionamentos.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
