
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Fleet', path: '/fleet' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleCall = () => {
    toast({
      title: "📞 Call Feature",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const handleEmail = () => {
    toast({
      title: "✉️ Email Feature",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-effect luxury-shadow' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="font-playfair text-2xl font-bold text-gold"
            >
              MLD<span className="text-cream">LUXURY</span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  location.pathname === item.path
                    ? 'text-gold'
                    : 'text-cream hover:text-gold'
                }`}
              >
                {item.name}
                {location.pathname === item.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gold"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={handleCall}
              className="flex items-center space-x-2 text-sm text-silver hover:text-gold transition-colors"
            >
              <Phone size={16} />
              <span>(555) 123-LUXURY</span>
            </button>
            <button
              onClick={handleEmail}
              className="flex items-center space-x-2 text-sm text-silver hover:text-gold transition-colors"
            >
              <Mail size={16} />
              <span>info@mldluxury.com</span>
            </button>
            <Link to="/booking">
              <Button className="gold-gradient text-deep-black font-semibold hover:opacity-90 transition-opacity">
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-cream hover:text-gold transition-colors"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass-effect border-t border-gold/20"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`block px-3 py-2 text-base font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-gold'
                      : 'text-cream hover:text-gold'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gold/20 space-y-3">
                <button
                  onClick={handleCall}
                  className="flex items-center space-x-2 text-sm text-silver hover:text-gold transition-colors"
                >
                  <Phone size={16} />
                  <span>(917) 000-0000</span>
                </button>
                <button
                  onClick={handleEmail}
                  className="flex items-center space-x-2 text-sm text-silver hover:text-gold transition-colors"
                >
                  <Mail size={16} />
                  <span>info@mldluxury.com</span>
                </button>
                <Link to="/booking" onClick={() => setIsOpen(false)}>
                  <Button className="w-full gold-gradient text-deep-black font-semibold hover:opacity-90 transition-opacity">
                    Book Now
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
