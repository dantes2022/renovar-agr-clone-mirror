import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo e Descrição */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-secondary">Ren</span>
              <span className="text-primary">var</span>
            </div>
            <div className="text-xs text-gray-400 uppercase tracking-wider mb-4">
              Solutions Agrobusiness
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Mais de 11 anos de experiência fornecendo insumos agrícolas de qualidade 
              para o desenvolvimento da agricultura sustentável.
            </p>
          </div>

          {/* Produtos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Produtos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#sementes" className="text-gray-300 hover:text-primary transition-colors">Sementes</a></li>
              <li><a href="#fertilizantes" className="text-gray-300 hover:text-primary transition-colors">Fertilizantes</a></li>
              <li><a href="#defensivos" className="text-gray-300 hover:text-primary transition-colors">Defensivos</a></li>
              <li><a href="#corretivos" className="text-gray-300 hover:text-primary transition-colors">Corretivos</a></li>
              <li><a href="#pastagens" className="text-gray-300 hover:text-primary transition-colors">Pastagens</a></li>
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#sobre" className="text-gray-300 hover:text-primary transition-colors">Sobre nós</a></li>
              <li><a href="#missao" className="text-gray-300 hover:text-primary transition-colors">Nossa missão</a></li>
              <li><a href="#equipe" className="text-gray-300 hover:text-primary transition-colors">Nossa equipe</a></li>
              <li><a href="#contato" className="text-gray-300 hover:text-primary transition-colors">Fale conosco</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <div className="space-y-3 text-sm">
              <div className="flex items-center">
                <Phone size={16} className="mr-3 text-primary" />
                <span className="text-gray-300">(89) 3333-4444</span>
              </div>
              <div className="flex items-center">
                <Mail size={16} className="mr-3 text-primary" />
                <span className="text-gray-300">contato@renovar.agr.br</span>
              </div>
              <div className="flex items-start">
                <MapPin size={16} className="mr-3 text-primary mt-1" />
                <span className="text-gray-300">
                  Região do Vale do Gurguéia<br />
                  Cerrado Piauiense - PI
                </span>
              </div>
            </div>

            {/* Redes Sociais */}
            <div className="mt-6">
              <h4 className="text-sm font-semibold mb-3">Siga-nos</h4>
              <div className="flex space-x-3">
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Renovar Solutions Agrobusiness. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;