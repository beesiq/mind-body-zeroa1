
import React from 'react';
import { User } from 'lucide-react';

const testimonials = [
  {
    name: "Mariana S.",
    role: "Empreendedora, 32 anos",
    content: "O ZeroA1 foi a primeira vez que consegui manter uma rotina de exercícios por mais de 2 semanas. O plano se encaixa perfeitamente na minha agenda caótica, e as mensagens diárias fazem toda a diferença.",
    rating: "Resultado em 4 semanas: - 3,5kg"
  },
  {
    name: "Rafael T.",
    role: "Analista de sistemas, 28 anos",
    content: "Já testei vários aplicativos, mas só o ZeroA1 entendeu que eu precisava de exercícios que não agravassem minha dor no joelho. O Mestre do Corpo virou meu mentor diário!",
    rating: "Resultado em 4 semanas: + 2,2kg de massa muscular"
  },
  {
    name: "Carla M.",
    role: "Professora, 41 anos",
    content: "A Mentora Zen me acompanha todas as manhãs. As mensagens dela são como se alguém realmente entendesse minha ansiedade com exercícios. Agora treinar é um momento de paz.",
    rating: "Resultado em 4 semanas: Redução significativa de estresse"
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding bg-black">
      <div className="container-zeroa1">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 text-white">Quem já <span className="text-zeroa1-orange">transformou</span> sua rotina</h2>
          <p className="body-md text-gray-400 max-w-3xl mx-auto">
            Histórias reais de pessoas que começaram do zero e alcançaram seu melhor nível com o ZeroA1.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="animate-on-scroll bg-zeroa1-black border border-zeroa1-orange/20 rounded-xl p-6 h-full flex flex-col">
              <div className="flex items-center mb-4">
                <div className="bg-zeroa1-orange/10 p-2 rounded-full mr-3">
                  <User className="h-6 w-6 text-zeroa1-orange" />
                </div>
                <div>
                  <h3 className="font-semibold text-white">{testimonial.name}</h3>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              <p className="body-md text-gray-300 italic flex-grow">{testimonial.content}</p>
              <div className="mt-4 pt-4 border-t border-gray-800">
                <p className="text-sm font-medium text-zeroa1-orange">{testimonial.rating}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
