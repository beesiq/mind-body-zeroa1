
import React from 'react';
import { Calendar, MessageSquare, User } from 'lucide-react';

const features = [
  {
    icon: <User className="h-10 w-10 text-zeroa1-orange" />,
    title: "Quiz Inteligente",
    description: "Responda perguntas sobre seus objetivos, condicionamento, tempo disponível e preferências para criar seu plano único."
  },
  {
    icon: <Calendar className="h-10 w-10 text-zeroa1-orange" />,
    title: "Plano de 4 Semanas",
    description: "Receba um treino detalhado para 4 semanas, com progressão estruturada e exercícios selecionados para seu perfil."
  },
  {
    icon: <MessageSquare className="h-10 w-10 text-zeroa1-orange" />,
    title: "Coach Virtual",
    description: "Mensagens diárias de acompanhamento via WhatsApp com um coach virtual que se adapta ao seu perfil emocional."
  }
];

const FeaturesSection: React.FC = () => {
  return (
    <section id="features" className="section-padding bg-white">
      <div className="container-zeroa1">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Como <span className="text-zeroa1-orange">funciona</span></h2>
          <p className="body-md text-gray-700 max-w-3xl mx-auto">
            Um sistema completo de acompanhamento personalizado, do planejamento dos seus treinos até a motivação diária.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="card-zeroa1 animate-on-scroll h-full flex flex-col">
              <div className="mb-6 flex justify-center md:justify-start">{feature.icon}</div>
              <h3 className="heading-sm mb-3">{feature.title}</h3>
              <p className="body-md text-gray-700 flex-grow">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-on-scroll order-2 lg:order-1">
            <h2 className="heading-md mb-6">Do <span className="text-zeroa1-orange">zero</span> ao seu melhor <span className="text-zeroa1-orange">A1</span></h2>
            <p className="body-md text-gray-700 mb-4">
              O ZeroA1 é sobre começar do zero com o plano certo para chegar ao seu melhor nível. Esqueça programas genéricos que ignoram suas necessidades individuais.
            </p>
            <div className="space-y-4 mt-8">
              <div className="flex gap-3">
                <div className="bg-zeroa1-yellow/20 rounded-full p-1">
                  <svg className="w-5 h-5 text-zeroa1-orange" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="body-md">Planos que respeitam seus limites físicos</p>
              </div>
              <div className="flex gap-3">
                <div className="bg-zeroa1-yellow/20 rounded-full p-1">
                  <svg className="w-5 h-5 text-zeroa1-orange" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="body-md">Exercícios que se encaixam na sua rotina</p>
              </div>
              <div className="flex gap-3">
                <div className="bg-zeroa1-yellow/20 rounded-full p-1">
                  <svg className="w-5 h-5 text-zeroa1-orange" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="body-md">Acompanhamento que se adapta ao seu estilo emocional</p>
              </div>
            </div>
          </div>
          <div className="relative animate-on-scroll order-1 lg:order-2">
            <div className="bg-zeroa1-gray h-[400px] rounded-xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-center font-medium">Ilustração do app ZeroA1</p>
              </div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full bg-zeroa1-orange/20"></div>
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-zeroa1-yellow/40 rounded-full"></div>
              <div className="absolute -left-6 -bottom-6 w-32 h-32 bg-zeroa1-orange/30 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
