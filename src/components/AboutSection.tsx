import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
              alt="Agricultura moderna"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <div className="mb-6">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">
                Nós oferecemos produtos de alta qualidade
              </h2>
              <div className="text-lg text-primary font-semibold mb-2">
                Na RENOVAR
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                Você encontra produtos de primeira linha e assistência técnica especializada.
              </h3>
            </div>

            <p className="text-gray-600 mb-6">
              Contamos com uma equipe de técnicos e engenheiros agrônomos para melhor lhe atender.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <CheckCircle className="text-primary mr-3" size={20} />
                <span className="text-gray-700">
                  Atuamos com toda a linha de produtos para grãos, hf e pastagens
                </span>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 mb-4">
                Somos uma empresa com mais de <strong>11 anos de experiência</strong> no mercado 
                com o fornecimento de insumos agrícolas.
              </p>
              <p className="text-gray-700">
                Atuamos no sul do Piauí, na região do vale do Gurguéia e Cerrado Piauiense, 
                onde cultiva atualmente mais de <strong>1,2 milhões de hectares</strong> de soja, 
                milho e arroz e outros.
              </p>
            </div>

            <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
              Saiba mais...
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;