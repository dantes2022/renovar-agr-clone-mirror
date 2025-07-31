import { Button } from "@/components/ui/button";
import { CheckCircle2, Trophy, Leaf, Cog } from "lucide-react";

const VideoSection = () => {
  const benefits = [
    {
      icon: <CheckCircle2 className="text-primary" size={20} />,
      text: "Produtos para todas as plantações"
    },
    {
      icon: <Trophy className="text-primary" size={20} />,
      text: "Defensivos reconhecidos no mercado"
    },
    {
      icon: <CheckCircle2 className="text-primary" size={20} />,
      text: "Adubação de qualidade e serviços"
    },
    {
      icon: <Cog className="text-primary" size={20} />,
      text: "Tecnologia invadoda para manutenção agrícola"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              TÍTULO AQUI E VÍDEO DA EMPRESA AO LADO E ESTUDO FEITO COM <br />
              <span className="text-secondary">MILHÃO DE DADOS</span>
            </h2>
            
            <p className="text-gray-600 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, 
              luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>

            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3">
                  {benefit.icon}
                  <span className="text-gray-700">{benefit.text}</span>
                </div>
              ))}
            </div>

            <Button className="bg-secondary hover:bg-secondary/90 text-gray-800 font-semibold px-6 py-3">
              Clique aqui
            </Button>
          </div>

          {/* Video */}
          <div className="relative">
            <div className="aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-lg">
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900">
                <div className="text-center text-white">
                  <div className="w-20 h-20 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-red-700 transition-colors">
                    <svg className="w-8 h-8 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Choose your video</h3>
                  <p className="text-gray-300 text-sm">Video Placeholder</p>
                  <div className="mt-4 text-xs text-gray-400">
                    Assistir no YouTube
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;