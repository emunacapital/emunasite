
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { MapPin, Phone, Mail, Clock, MessageSquare, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Endereço",
      details: ["Av. Paulista, 1048 - 12º andar", "São Paulo, SP - 01310-100", "Brasil"]
    },
    {
      icon: Phone,
      title: "Telefone",
      details: ["+55 (11) 3456-7890", "+55 (11) 99999-9999"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["contato@emunacapital.com", "investimentos@emunacapital.com"]
    },
    {
      icon: Clock,
      title: "Horário de Funcionamento",
      details: ["Segunda a Sexta: 9h às 18h", "Finais de semana: Sob demanda"]
    }
  ];

  const services = [
    "Fusões & Aquisições",
    "Private Equity",
    "IPO Advisory",
    "Reestruturação Corporativa",
    "Consultoria Estratégica",
    "Valuation",
    "Due Diligence",
    "Outro"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Entre em Contato</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Estamos prontos para discutir como podemos ajudar sua empresa 
              a alcançar seus objetivos estratégicos. Agende uma conversa conosco.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Informações de Contato
                </h2>
                <p className="text-gray-600 mb-8">
                  Nossa equipe está disponível para atendê-lo e discutir 
                  suas necessidades específicas.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-blue-100 rounded-full p-3">
                      <info.icon className="h-6 w-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
                      {info.details.map((detail, idx) => (
                        <p key={idx} className="text-gray-600">{detail}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-blue-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <Calendar className="h-6 w-6 text-blue-900" />
                  <h3 className="text-xl font-bold text-blue-900">Agende uma Reunião</h3>
                </div>
                <p className="text-gray-700 mb-4">
                  Oferecemos uma consulta inicial gratuita para entender 
                  suas necessidades e apresentar nossas soluções.
                </p>
                <Button className="bg-blue-900 hover:bg-blue-800 w-full">
                  Agendar Consulta Gratuita
                </Button>
              </div>

              <div className="bg-gray-50 rounded-xl p-6">
                <div className="flex items-center space-x-3 mb-4">
                  <MessageSquare className="h-6 w-6 text-gray-700" />
                  <h3 className="text-xl font-bold text-gray-900">Conecte-se Conosco</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Siga-nos nas redes sociais para acompanhar insights 
                  de mercado e novidades do setor.
                </p>
                <div className="flex space-x-3">
                  <Button variant="outline" size="sm">LinkedIn</Button>
                  <Button variant="outline" size="sm">Twitter</Button>
                  <Button variant="outline" size="sm">Facebook</Button>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Envie uma Mensagem
                </h2>
                <p className="text-gray-600 mb-8">
                  Preencha o formulário abaixo e entraremos em contato em até 24 horas.
                </p>
                
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <Input 
                        placeholder="Seu nome completo" 
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Corporativo *
                      </label>
                      <Input 
                        type="email" 
                        placeholder="seu.email@empresa.com" 
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Empresa *
                      </label>
                      <Input 
                        placeholder="Nome da sua empresa" 
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Cargo
                      </label>
                      <Input 
                        placeholder="Seu cargo na empresa" 
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Telefone
                      </label>
                      <Input 
                        placeholder="(11) 99999-9999" 
                        className="h-12"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Serviço de Interesse
                      </label>
                      <Select>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Selecione um serviço" />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map(service => (
                            <SelectItem key={service} value={service.toLowerCase()}>
                              {service}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Valor Estimado da Transação
                    </label>
                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Selecione uma faixa de valor" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="<10m">Até R$ 10 milhões</SelectItem>
                        <SelectItem value="10-50m">R$ 10 - 50 milhões</SelectItem>
                        <SelectItem value="50-100m">R$ 50 - 100 milhões</SelectItem>
                        <SelectItem value="100-500m">R$ 100 - 500 milhões</SelectItem>
                        <SelectItem value=">500m">Acima de R$ 500 milhões</SelectItem>
                        <SelectItem value="confidential">Confidencial</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prazo Desejado
                    </label>
                    <Select>
                      <SelectTrigger className="h-12">
                        <SelectValue placeholder="Qual a urgência do seu projeto?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="immediate">Imediato (até 1 mês)</SelectItem>
                        <SelectItem value="short">Curto prazo (1-3 meses)</SelectItem>
                        <SelectItem value="medium">Médio prazo (3-6 meses)</SelectItem>
                        <SelectItem value="long">Longo prazo (6+ meses)</SelectItem>
                        <SelectItem value="flexible">Flexível</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem *
                    </label>
                    <Textarea 
                      placeholder="Descreva brevemente seu projeto, objetivos e como podemos ajudá-lo..."
                      rows={6}
                      className="resize-none"
                    />
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <input 
                        type="checkbox" 
                        id="privacy" 
                        className="mt-1 h-4 w-4 text-blue-600 rounded border-gray-300"
                      />
                      <label htmlFor="privacy" className="text-sm text-gray-600">
                        Concordo em compartilhar minhas informações com a Emuna Capital 
                        para fins de contato comercial. Nossos dados são tratados com 
                        absoluta confidencialidade conforme nossa política de privacidade.
                      </label>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-900 hover:bg-blue-800 h-12 text-lg font-semibold"
                  >
                    Enviar Mensagem
                  </Button>

                  <p className="text-center text-sm text-gray-500">
                    Responderemos em até 24 horas • Consulta inicial gratuita
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
