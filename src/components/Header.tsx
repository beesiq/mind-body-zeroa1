
import React from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-black bg-opacity-90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container-zeroa1 flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center">
          <img 
            src="/lovable-uploads/0162e6e2-704b-4d2c-907c-18eaf24f5d2b.png" 
            alt="ZeroA1 Logo" 
            className="h-10" 
          />
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="text-white font-medium hover:text-zeroa1-orange transition-colors">Como Funciona</a>
          <a href="#testimonials" className="text-white font-medium hover:text-zeroa1-orange transition-colors">Depoimentos</a>
          <a href="#pricing" className="text-white font-medium hover:text-zeroa1-orange transition-colors">Preços</a>
          <a href="#faq" className="text-white font-medium hover:text-zeroa1-orange transition-colors">FAQ</a>
        </nav>
        <Button 
          className="bg-zeroa1-orange hover:bg-zeroa1-lightOrange text-white"
          onClick={() => window.open('https://inlead.digital/zeroa1-formulario', '_blank')}
        >
          Começar Agora
        </Button>
      </div>
    </header>
  );
};

export default Header;
