
import { ArrowRight, TrendingUp, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="pt-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Transformamos
                <span className="text-blue-300 block">Visões em Valor</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Somos especialistas em M&A com experiência comprovada em transações
                que geram valor real para nossos clientes. Conectamos oportunidades
                estratégicas com execução de excelência.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-4"
              >
                Conhecer Serviços
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-blue-900 font-semibold px-8 py-4"
              >
                Ver Transações
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <TrendingUp className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                <div className="text-2xl font-bold">R$ 2.5B+</div>
                <div className="text-blue-200 text-sm">em transações</div>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                <div className="text-2xl font-bold">150+</div>
                <div className="text-blue-200 text-sm">projetos executados</div>
              </div>
              <div className="text-center">
                <Award className="h-8 w-8 mx-auto mb-2 text-blue-300" />
                <div className="text-2xl font-bold">25+</div>
                <div className="text-blue-200 text-sm">anos de experiência</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold">Últimas Transações</h3>
                <div className="space-y-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-semibold">Aquisição Estratégica</div>
                    <div className="text-blue-200 text-sm">Setor de Tecnologia • R$ 450M</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-semibold">Fusão Empresarial</div>
                    <div className="text-blue-200 text-sm">Setor Industrial • R$ 320M</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="font-semibold">IPO Advisory</div>
                    <div className="text-blue-200 text-sm">Setor Financeiro • R$ 180M</div>
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
