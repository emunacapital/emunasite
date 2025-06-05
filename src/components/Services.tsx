
import { Briefcase, TrendingUp, Users, Globe, FileText, Target } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: "Fusões & Aquisições",
      description: "Assessoria completa em processos de M&A, desde a estruturação até o fechamento da transação.",
      features: ["Due Diligence", "Valuation", "Negociação", "Estruturação"]
    },
    {
      icon: TrendingUp,
      title: "Reestruturação Corporativa",
      description: "Estratégias de reestruturação para otimização de capital e melhoria de performance.",
      features: ["Spin-offs", "Carve-outs", "Joint Ventures", "Reorganização"]
    },
    {
      icon: Users,
      title: "Private Equity",
      description: "Assessoria em investimentos de private equity e venture capital.",
      features: ["Fundraising", "Exit Strategy", "Growth Capital", "Buy-outs"]
    },
    {
      icon: Globe,
      title: "Transações Internacionais",
      description: "Experiência em cross-border M&A com rede global de parceiros.",
      features: ["Cross-border M&A", "Joint Ventures", "Regulatory", "Tax Planning"]
    },
    {
      icon: FileText,
      title: "IPO & Mercado de Capitais",
      description: "Assessoria em ofertas públicas e operações no mercado de capitais.",
      features: ["IPO", "Follow-on", "Bonds", "Structured Products"]
    },
    {
      icon: Target,
      title: "Consultoria Estratégica",
      description: "Análises estratégicas e planejamento para crescimento e expansão.",
      features: ["Market Analysis", "Strategic Planning", "Business Model", "Growth Strategy"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços em M&A e consultoria 
            estratégica, adaptados às necessidades específicas de cada cliente.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-4">
                  <div className="bg-blue-900 p-3 rounded-lg">
                    <service.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 text-base leading-relaxed">
                  {service.description}
                </CardDescription>
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-sm text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
