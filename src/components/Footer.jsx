
    import React from 'react';
    import { Link } from 'react-router-dom';
    import { Facebook, Twitter, Instagram } from 'lucide-react';

    const Footer = () => {
      return (
        <footer className="bg-neutral-900 border-t border-neutral-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                <p className="text-xl font-bold tracking-wider text-white">MLD<span className="text-amber-400">LUXURY</span></p>
                <p className="mt-4 text-neutral-400">
                  Experience unparalleled luxury transportation in New York City.
                </p>
              </div>
              <div>
                <p className="font-semibold text-lg text-amber-400 tracking-wider">Quick Links</p>
                <ul className="mt-4 space-y-2">
                  <li><Link to="/about" className="hover:text-amber-300 transition-colors">About Us</Link></li>
                  <li><Link to="/fleet" className="hover:text-amber-300 transition-colors">Our Fleet</Link></li>
                  <li><Link to="/services" className="hover:text-amber-300 transition-colors">Services</Link></li>
                  <li><Link to="/contact" className="hover:text-amber-300 transition-colors">Contact</Link></li>
                </ul>
              </div>
              <div>
                 <p className="font-semibold text-lg text-amber-400 tracking-wider">Contact Us</p>
                <ul className="mt-4 space-y-2 text-neutral-400">
                  <li>(917) 000-0000</li>
                  <li>info@mldluxury.com</li>
                </ul>
              </div>
              <div>
                 <p className="font-semibold text-lg text-amber-400 tracking-wider">Follow Us</p>
                <div className="flex mt-4 space-x-4">
                  <a href="#" className="text-neutral-400 hover:text-amber-300 transition-colors"><Facebook /></a>
                  <a href="#" className="text-neutral-400 hover:text-amber-300 transition-colors"><Twitter /></a>
                  <a href="#" className="text-neutral-400 hover:text-amber-300 transition-colors"><Instagram /></a>
                </div>
              </div>
            </div>
            <div>
              <p className="font-semibold text-lg text-amber-400 tracking-wider">Service Areas</p>
              
              <div className="mt-4 text-sm text-neutral-400">
                <p className="mb-3 font-medium text-neutral-300">Complete Coverage</p>
                <div className="grid grid-cols-1 gap-1">
                  <span>Manhattan • Brooklyn • Queens</span>
                  <span>The Bronx • Staten Island</span>
                  <span>Westchester • Long Island</span>
                  <span>Hudson Valley • New Jersey</span>
                  <span>Connecticut • Pennsylvania</span>
                  <span>Upstate NY</span>
                </div>
              </div>
            </div>
            <div className="mt-12 pt-8 border-t border-neutral-800 text-center text-neutral-500">
              <p>&copy; {new Date().getFullYear()} MLDLUXURY. All Rights Reserved.</p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;
  