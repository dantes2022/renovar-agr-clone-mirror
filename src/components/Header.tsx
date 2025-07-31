import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: "INÍCIO", href: "#" },
    { 
      name: "PRODUTOS", 
      href: "#produtos",
      submenu: [
        { name: "Sementes", href: "#sementes" },
        { name: "Fertilizantes", href: "#fertilizantes" },
        { name: "Defensivos", href: "#defensivos" },
        { name: "Corretivos", href: "#corretivos" },
        { name: "Pastagens", href: "#pastagens" }
      ]
    },
    { name: "SOBRE A EMPRESA", href: "#sobre" },
    { name: "FALE CONOSCO", href: "#contato" }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-secondary">Ren</span>
              <span className="text-primary">var</span>
            </div>
            <div className="ml-2 text-xs text-gray-600 uppercase tracking-wider">
              Solutions Agrobusiness
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <a
                  href={item.href}
                  className="text-gray-700 hover:text-primary font-medium transition-colors duration-200"
                >
                  {item.name}
                </a>
                {item.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-2">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-primary transition-colors"
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4">
            <nav className="flex flex-col space-y-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block text-gray-700 hover:text-primary font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.submenu && (
                    <div className="mt-2 ml-4 space-y-2">
                      {item.submenu.map((subItem) => (
                        <a
                          key={subItem.name}
                          href={subItem.href}
                          className="block text-sm text-gray-600 hover:text-primary transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.name}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;