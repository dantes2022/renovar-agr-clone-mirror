import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: "Novas tecnologias em sementes chegam ao mercado",
      date: "15 de Janeiro, 2024",
      image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      excerpt: "Descubra as últimas inovações em biotecnologia aplicada às sementes..."
    },
    {
      id: 2,
      title: "Manejo integrado de pragas: tendências para 2024",
      date: "12 de Janeiro, 2024",
      image: "https://images.unsplash.com/photo-1500595046743-cd271d694d30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      excerpt: "Estratégias sustentáveis para controle de pragas na agricultura moderna..."
    },
    {
      id: 3,
      title: "Fertilização eficiente: maximizando a produtividade",
      date: "08 de Janeiro, 2024",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      excerpt: "Como otimizar o uso de fertilizantes para obter melhores resultados..."
    }
  ];

  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            fique atualizado!
          </h2>
          <p className="text-xl opacity-90">
            As principais notícias, eventos e temas do agronegócio
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {news.map((article) => (
            <Card key={article.id} className="bg-white text-gray-800 overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <Calendar size={16} className="mr-2" />
                  {article.date}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3 line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                  Leia mais
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="secondary" className="bg-secondary hover:bg-secondary/90 text-gray-800 px-8 py-3">
            Ver todas as notícias
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;