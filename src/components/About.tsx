
import { CheckCircle } from "lucide-react";

export const About = () => {
  const benefits = [
    "Experiência comprovada em transações complexas",
    "Equipe especializada em diversos setores",
    "Rede global de contatos estratégicos",
    "Abordagem personalizada para cada cliente",
    "Execução ágil e eficiente",
    "Confidencialidade e ética absoluta"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gradient-to-br from-blue-900 to-blue-700 rounded-2xl p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Nossa Missão</h2>
              <p className="text-lg leading-relaxed mb-6">
                Ser o parceiro estratégico de referência em M&A, oferecendo 
                soluções inovadoras e personalizadas que maximizam o valor 
                para nossos clientes.
              </p>
              <div className="border-t border-blue-300 pt-6">
                <h3 className="text-xl font-semibold mb-4">Nossos Valores</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>• Excelência</div>
                  <div>• Integridade</div>
                  <div>• Inovação</div>
                  <div>• Compromisso</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Por que escolher a 
                <span className="text-blue-900"> Emuna Capital?</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Combinamos expertise técnica, conhecimento de mercado e 
                relacionamentos estratégicos para entregar resultados 
                excepcionais em cada transação.
              </p>
            </div>

            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-6 w-6 text-green-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{benefit}</span>
                </div>
              ))}
            </div>

            <div className="bg-blue-50 rounded-xl p-6 mt-8">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Reconhecimento Internacional
              </h3>
              <p className="text-gray-700">
                Premiados como "Best M&A Advisory Firm" pela International 
                Finance Magazine por três anos consecutivos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
