import React from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { ArrowRight, Phone, Mail, MapPin, Star, Shield, Clock, Users } from 'lucide-react';

const ServiceCard = ({ icon, title, description }) => (
  <motion.div
    className="bg-white/5 backdrop-blur-sm p-8 rounded-lg text-center border border-white/10 hover:border-amber-400/50 transition-all duration-300"
    whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.08)' }}
    transition={{ duration: 0.3 }}
  >
    <div className="flex justify-center mb-6 text-amber-400">{icon}</div>
    <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
    <p className="text-neutral-300 leading-relaxed">{description}</p>
  </motion.div>
);

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Helmet>
        <title>MLDLUXURY - Premier Luxury Transportation in NYC</title>
        <meta name="description" content="MLDLUXURY offers unmatched luxury car and chauffeur services in New York City. Book your premium ride today for an experience of a lifetime." />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0" style={{
          backgroundImage: 'url(/hero-luxury-car.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}>
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(212,175,55,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(212,175,55,0.05),transparent_50%)]"></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-light tracking-wide leading-tight text-white mb-6">
              Luxury Transportation
              <span className="block text-amber-400 font-normal">Redefined</span>
            </h1>
            <p className="text-xl md:text-2xl max-w-4xl mx-auto text-neutral-200 mb-8 font-light leading-relaxed">
              Experience the pinnacle of elegance and sophistication with New York City's premier luxury transportation service
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-amber-400 text-black hover:bg-amber-500 rounded-none px-12 py-6 text-lg font-medium tracking-wide transition-all duration-300">
                <Link to="/booking">
                  RESERVE NOW <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-black rounded-none px-12 py-6 text-lg font-medium tracking-wide">
                <Link to="/fleet">VIEW FLEET</Link>
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900 to-black"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(212,175,55,0.03)_49%,rgba(212,175,55,0.03)_51%,transparent_52%)]"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Our <span className="text-amber-400">Services</span>
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto font-light">
              From corporate travel to special occasions, we provide unparalleled luxury transportation solutions
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard
              icon={<Shield size={48} />}
              title="Airport Transfers"
              description="Reliable and punctual service to all NYC airports with flight tracking and meet & greet service."
            />
            <ServiceCard
              icon={<Users size={48} />}
              title="Corporate Travel"
              description="Professional transportation for executives, meetings, and corporate events with discretion guaranteed."
            />
            <ServiceCard
              icon={<Star size={48} />}
              title="Special Events"
              description="Make your wedding, prom, or celebration unforgettable with our luxury vehicle collection."
            />
            <ServiceCard
              icon={<Clock size={48} />}
              title="Hourly Service"
              description="Flexible hourly rates for shopping, tours, or any occasion requiring dedicated transportation."
            />
          </div>
        </div>
      </section>

      {/* Fleet Preview */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.1)_0%,transparent_70%)]"></div>
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
              Premium <span className="text-amber-400">Fleet</span>
            </h2>
            <p className="text-xl text-neutral-300 max-w-3xl mx-auto font-light leading-relaxed">
              Meticulously maintained vehicles that represent the pinnacle of luxury and comfort
            </p>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div
                className="relative group overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  alt="Mercedes-Benz S-Class luxury sedan" 
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110" 
                  src="https://storage.googleapis.com/hostinger-horizons-assets-prod/146a1b3c-9425-4b69-8a09-f6c2ecb3458d/76e426fadfc2e97c7de32a36a49a2352.jpg" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-light text-white mb-4">Luxury Sedans</h3>
                  <p className="text-lg text-neutral-300 leading-relaxed">Perfect for executive travel and airport transfers</p>
                </div>
              </motion.div>

              <motion.div
                className="relative group overflow-hidden rounded-lg"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  alt="Cadillac Escalade luxury SUV" 
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-110" 
                  src="https://storage.googleapis.com/hostinger-horizons-assets-prod/146a1b3c-9425-4b69-8a09-f6c2ecb3458d/829eb6474d2ae45af8f9b84d81cac549.png" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8">
                  <h3 className="text-3xl font-light text-white mb-4">Luxury SUVs</h3>
                  <p className="text-lg text-neutral-300 leading-relaxed">Spacious comfort for groups and families</p>
                </div>
              </motion.div>

            </div>
          </div>

          <div className="text-center mt-16">
            <Button asChild variant="outline" size="lg" className="border-2 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black rounded-none px-12 py-4 text-lg font-medium tracking-wide">
              <Link to="/fleet">VIEW COMPLETE FLEET</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-black"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,transparent_50%)]"></div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
                Ready to Experience <span className="text-amber-400">Luxury</span>?
              </h2>
              <p className="text-xl text-neutral-300 mb-12 font-light max-w-2xl mx-auto">
                Contact us today to reserve your premium transportation experience in New York City
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                <div className="flex flex-col items-center">
                  <Phone className="w-8 h-8 text-amber-400 mb-4" />
                  <h3 className="text-lg font-medium text-white mb-2">Call Us</h3>
                  <p className="text-neutral-300">(917) 000-0000</p>
                </div>
                <div className="flex flex-col items-center">
                  <Mail className="w-8 h-8 text-amber-400 mb-4" />
                  <h3 className="text-lg font-medium text-white mb-2">Email Us</h3>
                  <p className="text-neutral-300">info@mldluxury.com</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-amber-400 text-black hover:bg-amber-500 rounded-none px-12 py-6 text-lg font-medium tracking-wide">
                  <Link to="/booking">BOOK NOW</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-2 border-white text-white hover:bg-white hover:text-black rounded-none px-12 py-6 text-lg font-medium tracking-wide">
                  <Link to="/contact">GET QUOTE</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;