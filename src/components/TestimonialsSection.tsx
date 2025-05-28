
import React from 'react';
import { User } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';

const testimonials = [
  {
    name: "Mariana S.",
    role: "Empreendedora, 32 anos",
    content: "O ZeroA1 foi a primeira vez que consegui manter uma rotina de exercícios por mais de 2 semanas. O plano se encaixa perfeitamente na minha agenda caótica, e as mensagens diárias fazem toda a diferença.",
    result: "Resultado em 4 semanas:",
    metric: { value: 3.5, suffix: "kg", prefix: "- " }
  },
  {
    name: "Rafael T.",
    role: "Analista de sistemas, 28 anos",
    content: "Já testei vários aplicativos, mas só o ZeroA1 entendeu que eu precisava de exercícios que não agravassem minha dor no joelho. O Mestre do Corpo virou meu mentor diário!",
    result: "Resultado em 4 semanas:",
    metric: { value: 2.2, suffix: "kg de massa muscular", prefix: "+ " }
  },
  {
    name: "Carla M.",
    role: "Professora, 41 anos",
    content: "A Mentora Zen me acompanha todas as manhãs. As mensagens dela são como se alguém realmente entendesse minha ansiedade com exercícios. Agora treinar é um momento de paz.",
    result: "Resultado em 4 semanas:",
    metric: { value: 85, suffix: "% menos estresse", prefix: "" }
  }
];

const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="section-padding bg-zeroa1-black">
      <div className="container-zeroa1">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4 text-white">Quem já <span className="text-zeroa1-orange">transformou</span> sua rotina</h2>
          <p className="body-md text-gray-400 max-w-3xl mx-auto">
            Histórias reais de pessoas que começaram do zero e alcançaram seu melhor nível com o ZeroA1.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="animate-on-scroll bg-black border border-zeroa1-orange/20 rounded-xl p-6 h-full flex flex-col hover-scale"
              style={{ animationDelay: `${index * 200}ms` }}
            >
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
                <p className="text-sm text-gray-400 mb-1">{testimonial.result}</p>
                <p className="text-sm font-medium text-zeroa1-orange">
                  <AnimatedCounter 
                    target={testimonial.metric.value}
                    decimals={testimonial.metric.suffix.includes('.') ? 1 : 0}
                    prefix={testimonial.metric.prefix}
                    suffix={testimonial.metric.suffix}
                  />
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
