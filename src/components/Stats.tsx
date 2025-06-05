
import { Building2, Globe, Target, Trophy } from "lucide-react";

export const Stats = () => {
  const stats = [
    {
      icon: Building2,
      number: "500+",
      label: "Empresas Assessoradas",
      description: "Empresas de diversos setores"
    },
    {
      icon: Globe,
      number: "15",
      label: "Países",
      description: "Presença internacional"
    },
    {
      icon: Target,
      number: "98%",
      label: "Taxa de Sucesso",
      description: "Em transações fechadas"
    },
    {
      icon: Trophy,
      number: "50+",
      label: "Prêmios",
      description: "Reconhecimento do mercado"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <stat.icon className="h-12 w-12 text-blue-900 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-blue-900 mb-1">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
