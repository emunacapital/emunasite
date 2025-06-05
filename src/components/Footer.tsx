
import { Linkedin, Twitter, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-2">
            <div className="text-3xl font-bold mb-4">
              EMUNA
              <span className="text-blue-400 ml-2">CAPITAL</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transformamos visões em valor através de soluções estratégicas 
              em M&A e consultoria corporativa.
            </p>
            <div className="flex space-x-4">
              <div className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                <Linkedin className="h-5 w-5" />
              </div>
              <div className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                <Twitter className="h-5 w-5" />
              </div>
              <div className="bg-blue-600 p-2 rounded-lg hover:bg-blue-700 transition-colors cursor-pointer">
                <Facebook className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">M&A Advisory</li>
              <li className="hover:text-white transition-colors cursor-pointer">Private Equity</li>
              <li className="hover:text-white transition-colors cursor-pointer">IPO Advisory</li>
              <li className="hover:text-white transition-colors cursor-pointer">Reestruturação</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Empresa</h3>
            <ul className="space-y-2 text-gray-300">
              <li className="hover:text-white transition-colors cursor-pointer">Sobre Nós</li>
              <li className="hover:text-white transition-colors cursor-pointer">Equipe</li>
              <li className="hover:text-white transition-colors cursor-pointer">Transações</li>
              <li className="hover:text-white transition-colors cursor-pointer">Contato</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Emuna Capital. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
