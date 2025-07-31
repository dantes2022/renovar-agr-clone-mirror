import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Facebook, Instagram } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contato" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-secondary text-sm uppercase tracking-wider mb-2">
            QUEREMOS OUVIR VOCÊ
          </p>
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Entre em contato
          </h2>
          <div className="w-16 h-1 bg-secondary mx-auto mb-8"></div>
          <p className="text-gray-600">
            Solicite uma cotação
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map and Contact Info */}
          <div className="space-y-8">
            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg overflow-hidden shadow-md">
              <div className="h-80 bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                <div className="text-center text-gray-600">
                  <MapPin size={48} className="mx-auto mb-4 text-primary" />
                  <h3 className="text-lg font-semibold mb-2">Mapa do Brasil</h3>
                  <p className="text-sm">Ver mapa ampliado</p>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">ENCONTRE NOS</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <MapPin className="text-primary mt-1" size={20} />
                    <div className="text-gray-600">
                      <p>Matriz: Av. Ademar Diógenes,</p>
                      <p>292, São Pedro, CEP: 64900-000,</p>
                      <p>Bom Jesus-PI</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="text-primary" size={20} />
                    <span className="text-gray-600">+55 89 98101-8588</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="text-primary" size={20} />
                    <span className="text-gray-600">gerencia@renovar.agr.br</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">REDES SOCIAIS</h3>
                <div className="space-y-2">
                  <div className="flex items-center gap-3">
                    <Facebook className="text-primary" size={20} />
                    <span className="text-gray-600">@renovar_oficial</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Instagram className="text-primary" size={20} />
                    <span className="text-gray-600">@renovar_solutions</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                  Envie Uma Mensagem
                </h3>
                <div className="w-16 h-1 bg-secondary mx-auto mb-8"></div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Seu Nome"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-100 border-0 py-3"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="nome@exemplo.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="bg-gray-100 border-0 py-3"
                    />
                  </div>
                  <div>
                    <Textarea
                      name="message"
                      placeholder="Mensagem"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="bg-gray-100 border-0 resize-none"
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full bg-secondary hover:bg-secondary/90 text-gray-800 font-semibold py-3"
                  >
                    Enviar Mensagem
                  </Button>
                </form>

                <div className="mt-8 text-center">
                  <Button 
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 rounded-full"
                  >
                    <Phone className="mr-2" size={20} />
                    (89) 99999-9999
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;