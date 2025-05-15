
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Preciso ter equipamentos de academia para fazer os treinos?",
    answer: "Não. O ZeroA1 adapta seu plano aos recursos que você tem disponíveis. Se você não tem equipamentos, criamos um programa eficiente com exercícios que utilizam apenas o peso do corpo. Se você tem alguns equipamentos básicos ou acesso a academia, incorporamos esses recursos para maximizar seus resultados."
  },
  {
    question: "O que acontece após as 4 semanas do plano inicial?",
    answer: "Após as 4 semanas iniciais, você pode solicitar um novo plano adaptado à sua nova condição física, ajustando intensidade e exercícios para continuar evoluindo. Nos planos trimestrais, esse ajuste já está incluído, garantindo progressão contínua por 12 semanas."
  },
  {
    question: "Como funciona o acompanhamento por WhatsApp?",
    answer: "Você receberá mensagens diárias do seu coach virtual escolhido, enviadas em horários compatíveis com sua rotina. Estas mensagens incluem lembretes de treino, dicas motivacionais e orientações técnicas, sempre adaptadas ao seu perfil emocional e ao seu progresso."
  },
  {
    question: "Posso escolher ou trocar meu coach virtual?",
    answer: "Sim! Durante o quiz inicial, identificamos qual perfil de coach melhor se alinha com suas preferências. No entanto, você pode solicitar a troca para um perfil diferente a qualquer momento, se sentir que outro estilo de comunicação funcionará melhor para sua motivação."
  },
  {
    question: "O plano é adequado para iniciantes?",
    answer: "Absolutamente. O ZeroA1 foi desenvolvido para se adaptar a todos os níveis, do iniciante completo ao praticante avançado. Para iniciantes, focamos em criar uma base sólida, com progressão gradual que respeita seu ritmo de adaptação e aprendizado."
  },
  {
    question: "É possível focar em objetivos específicos como perda de peso ou ganho muscular?",
    answer: "Com certeza. No quiz inicial, você indica seus objetivos principais, e todo seu plano é estruturado para alcançá-los de forma eficiente. Seja perda de peso, ganho de massa muscular, melhora de condicionamento ou simplesmente criar um hábito saudável, o programa é totalmente orientado ao seu objetivo."
  }
];

const FAQSection: React.FC = () => {
  return (
    <section id="faq" className="section-padding bg-zeroa1-gray">
      <div className="container-zeroa1">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-4">Perguntas <span className="text-zeroa1-orange">Frequentes</span></h2>
          <p className="body-md text-gray-700 max-w-3xl mx-auto">
            Tudo o que você precisa saber sobre o ZeroA1.
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-on-scroll">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold hover:text-zeroa1-orange">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
