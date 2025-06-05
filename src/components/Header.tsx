
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "Sobre" },
    { href: "/team", label: "Equipe" },
    { href: "/transactions", label: "Transações" },
    { href: "/contact", label: "Contato" },
  ];

  return (
    <header className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center">
            <div className="text-3xl font-bold text-blue-900">
              EMUNA
              <span className="text-blue-600 ml-2">CAPITAL</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-gray-700 hover:text-blue-900 font-medium transition-colors duration-200 ${
                  location.pathname === item.href ? "text-blue-900 border-b-2 border-blue-900" : ""
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Button className="hidden md:block bg-blue-900 hover:bg-blue-800">
            Fale Conosco
          </Button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              {menuItems.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  className="text-gray-700 hover:text-blue-900 font-medium transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button className="bg-blue-900 hover:bg-blue-800 w-fit">
                Fale Conosco
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
