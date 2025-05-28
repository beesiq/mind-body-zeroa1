
import React from 'react';
import { Star } from 'lucide-react';

const coaches = [
  {
    name: "Capitão Foco",
    description: "Direto e firme, ideal para quem precisa de disciplina e comandos claros.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=400",
    quote: "Disciplina é liberdade. Cada treino é uma escolha pelo seu futuro."
  },
  {
    name: "Mentora Zen",
    description: "Suave e acolhedora, perfeita para quem busca equilíbrio emocional com os treinos.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=400",
    quote: "A jornada é leve quando guiada por amor."
  },
  {
    name: "Mestre do Corpo",
    description: "Técnico e estratégico, focado em resultados e eficiência nos movimentos.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=400",
    quote: "Cada movimento tem um porquê."
  },
  {
    name: "Parça da Endorfina",
    description: "Cheio de energia, leveza e bom humor, pra motivar te motivar a treinar com mais disposição e alegria.",
    stars: 5,
    image: "https://images.unsplash.com/photo-1549060279-7e168fcee0c2?ixlib=rb-4.0.3&q=80&cs=tinysrgb&fm=jpg&crop=entropy&w=400",
    quote: "Treino bom é treino com risada."
  }
];

const CoachesSection: React.FC = () => {
  return (
    <section className="section-padding bg-zeroa1-black text-white">
      <div className="container-zeroa1">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Escolha seu <span className="text-zeroa1-yellow">Coach Virtual</span></h2>
          <p className="body-md text-gray-400 max-w-3xl mx-auto">
            Acompanhamento diário via WhatsApp, com um perfil emocional compatível com você.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coaches.map((coach, index) => (
            <div key={index} className="animate-on-scroll bg-black/50 border border-zeroa1-orange/20 rounded-xl p-6 flex flex-col h-full hover-scale">
              <div className="flex justify-between items-center mb-4">
                <h3 className="heading-sm text-zeroa1-orange">{coach.name}</h3>
                <div className="flex">
                  {[...Array(coach.stars)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-zeroa1-yellow text-zeroa1-yellow" />
                  ))}
                </div>
              </div>
              <p className="body-md text-gray-300 flex-grow">{coach.description}</p>
              <div className="h-40 mt-4 bg-zeroa1-black/30 rounded-lg flex items-center justify-center overflow-hidden">
                <img 
                  src={coach.image} 
                  alt={`${coach.name} coach`} 
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="mt-4 p-3 bg-zeroa1-black/40 rounded-lg border border-zeroa1-orange/10">
                <p className="text-xs italic text-gray-400">
                  "{coach.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
