import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ProductsSection = () => {
  const products = [
    {
      id: 1,
      title: "Sementes",
      image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Sementes selecionadas para máxima produtividade",
      link: "#sementes"
    },
    {
      id: 2,
      title: "Fertilizantes",
      image: "https://images.unsplash.com/photo-1625516344040-2d81cea10e15?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Nutrição completa para suas culturas",
      link: "#fertilizantes"
    },
    {
      id: 3,
      title: "Defensivos",
      image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Proteção eficaz contra pragas e doenças",
      link: "#defensivos"
    },
    {
      id: 4,
      title: "Corretivos",
      image: "https://images.unsplash.com/photo-1569597142031-1dec5e9dda96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Correção e melhoria da qualidade do solo",
      link: "#corretivos"
    },
    {
      id: 5,
      title: "Pastagens",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Soluções completas para pecuária",
      link: "#pastagens"
    }
  ];

  return (
    <section id="produtos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Todos os nossos produtos para a <br />
            <span className="text-primary">Agricultura de Sucesso</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Caminhamos lado a lado com o agricultor, levando inovação em produtos e tecnologias, 
            contribuindo com uma agricultura moderna e sustentável.
          </p>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">
            Nossos produtos
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-48 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h4 className="text-xl font-semibold text-gray-800 mb-3">
                  {product.title}
                </h4>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                >
                  <a href={product.link}>Veja os detalhes</a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-3">
            Saiba mais...
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;