
    import React, { useState } from 'react';
    import { Link, NavLink } from 'react-router-dom';
    import { motion } from 'framer-motion';
    import { Menu, X } from 'lucide-react';
    import { Button } from '@/components/ui/button';

    const Header = () => {
      const [isOpen, setIsOpen] = useState(false);

      const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About', path: '/about' },
        { name: 'Fleet', path: '/fleet' },
        { name: 'Services', path: '/services' },
        { name: 'Contact', path: '/contact' },
      ];

      return (
        <header className="sticky top-0 z-50 bg-black bg-opacity-80 backdrop-blur-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <Link to="/" className="text-2xl font-bold tracking-wider text-white">
                MLD<span className="text-amber-400">LUXURY</span>
              </Link>
              <nav className="hidden md:flex items-center space-x-8">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.name}
                    to={link.path}
                    className={({ isActive }) =>
                      `text-lg font-medium transition-colors duration-300 ${isActive ? 'text-amber-400' : 'text-white hover:text-amber-300'}`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </nav>
              <div className="hidden md:block">
                 <Button asChild className="bg-amber-400 text-black hover:bg-amber-500 rounded-full px-6 py-3 text-lg font-semibold transition-transform duration-300 hover:scale-105">
                   <Link to="/booking">Book Now</Link>
                 </Button>
              </div>
              <div className="md:hidden">
                <button onClick={() => setIsOpen(!isOpen)} className="text-white">
                  {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
              </div>
            </div>
          </div>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="md:hidden bg-black px-4 pt-2 pb-4 space-y-2"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium ${isActive ? 'bg-amber-400 text-black' : 'text-white hover:bg-gray-800'}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
               <Button asChild className="w-full bg-amber-400 text-black hover:bg-amber-500 mt-4">
                 <Link to="/booking" onClick={() => setIsOpen(false)}>Book Now</Link>
               </Button>
            </motion.div>
          )}
        </header>
      );
    };

    export default Header;
  