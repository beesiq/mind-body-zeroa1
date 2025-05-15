
import React from 'react';
import { Button } from "@/components/ui/button";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white bg-opacity-90 backdrop-blur-sm z-50 shadow-sm">
      <div className="container-zeroa1 flex items-center justify-between h-16 md:h-20">
        <div className="flex items-center">
          <span className="text-zeroa1-orange font-bold text-2xl">ZeroA1</span>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#features" className="font-medium hover:text-zeroa1-orange transition-colors">Como Funciona</a>
          <a href="#testimonials" className="font-medium hover:text-zeroa1-orange transition-colors">Depoimentos</a>
          <a href="#pricing" className="font-medium hover:text-zeroa1-orange transition-colors">Preços</a>
          <a href="#faq" className="font-medium hover:text-zeroa1-orange transition-colors">FAQ</a>
        </nav>
        <Button className="btn-primary">Começar Agora</Button>
      </div>
    </header>
  );
};

export default Header;
