
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Award, Globe, Users, TrendingUp, Shield, Target } from "lucide-react";

export default function About() {
  const milestones = [
    {
      year: "1999",
      title: "Fundação",
      description: "Emuna Capital é fundada com foco em assessoria estratégica para empresas de médio porte."
    },
    {
      year: "2005",
      title: "Expansão Internacional",
      description: "Primeira transação cross-border e estabelecimento de parcerias globais."
    },
    {
      year: "2010",
      title: "Marco de R$ 1B",
      description: "Ultrapassamos a marca de R$ 1 bilhão em transações assessoradas."
    },
    {
      year: "2015",
      title: "Reconhecimento",
      description: "Premiados como 'Melhor Boutique de M&A' pela revista Exame."
    },
    {
      year: "2020",
      title: "Era Digital",
      description: "Lançamento de plataforma digital para due diligence e expansão em tech."
    },
    {
      year: "2024",
      title: "Liderança de Mercado",
      description: "Consolidação como referência em M&A no mercado brasileiro."
    }
  ];

  const values = [
    {
      icon: Shield,
      title: "Integridade",
      description: "Atuamos com ética absoluta e transparência em todas as nossas relações, mantendo a confidencialidade como pilar fundamental."
    },
    {
      icon: Target,
      title: "Excelência",
      description: "Buscamos constantemente a perfeição em nossos serviços, investindo em conhecimento e tecnologia de ponta."
    },
    {
      icon: Users,
      title: "Compromisso",
      description: "Nos dedicamos integralmente ao sucesso de nossos clientes, oferecendo soluções personalizadas e suporte contínuo."
    },
    {
      icon: TrendingUp,
      title: "Inovação",
      description: "Desenvolvemos continuamente novas metodologias e ferramentas para entregar resultados superiores."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-20 bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">Sobre a Emuna Capital</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Há mais de duas décadas transformando visões empresariais em valor tangível 
              através de assessoria estratégica e execução de excelência em M&A.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Nossa História
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  A Emuna Capital nasceu em 1999 com a visão de ser o parceiro estratégico 
                  de referência para empresas que buscam crescimento através de transações 
                  inteligentes e bem estruturadas.
                </p>
                <p>
                  Fundada por profissionais com experiência internacional nos principais 
                  bancos de investimento, nossa empresa se especializou em oferecer 
                  assessoria boutique com padrão global de qualidade.
                </p>
                <p>
                  Ao longo dos anos, construímos um track record sólido assessorando mais 
                  de 500 empresas em transações que totalizaram mais de R$ 2,5 bilhões, 
                  sempre mantendo nosso compromisso com a excelência e integridade.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Em Números</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">25+</div>
                  <div className="text-gray-600">Anos de Experiência</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
                  <div className="text-gray-600">Empresas Assessoradas</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">R$ 2.5B+</div>
                  <div className="text-gray-600">Valor Transacionado</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-900 mb-2">98%</div>
                  <div className="text-gray-600">Taxa de Sucesso</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos Valores
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Os princípios que guiam nossa atuação e definem nossa cultura organizacional.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="bg-blue-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="h-8 w-8 text-blue-900" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Marcos Históricos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Uma jornada de crescimento e conquistas que nos trouxe até aqui.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-blue-200"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                    <div className={`bg-white rounded-xl shadow-lg p-6 border-l-4 border-blue-900 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                      <div className="text-blue-900 font-bold text-lg mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2 flex justify-center">
                    <div className="bg-blue-900 rounded-full p-3 z-10">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="lg:w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Nosso Compromisso com o Futuro
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8">
            Continuamos investindo em tecnologia, talentos e parcerias estratégicas 
            para seguir sendo o parceiro de confiança de empresas que querem crescer 
            e transformar mercados.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Globe className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-bold mb-3">Expansão Global</h3>
              <p className="text-blue-100">Fortalecimento de parcerias internacionais para transações cross-border.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <TrendingUp className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-bold mb-3">Inovação Tecnológica</h3>
              <p className="text-blue-100">Desenvolvimento de ferramentas digitais para otimizar processos de M&A.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <Award className="h-12 w-12 mx-auto mb-4 text-blue-300" />
              <h3 className="text-xl font-bold mb-3">ESG & Sustentabilidade</h3>
              <p className="text-blue-100">Integração de critérios ESG em todas as nossas avaliações e recomendações.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
