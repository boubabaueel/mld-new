
    import React from 'react';
    import { Helmet } from 'react-helmet';
    import { motion } from 'framer-motion';
    import { Hotel as Airport, Building, PartyPopper, Briefcase, Star, Clock } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import { Link } from 'react-router-dom';

    const serviceData = [
      {
        icon: <Airport className="w-12 h-12 text-amber-400" />,
        title: 'Airport Transfers',
        description: 'Reliable and punctual service to and from all major NYC airports (JFK, LaGuardia, Newark). Flight tracking included.'
      },
      {
        icon: <Briefcase className="w-12 h-12 text-amber-400" />,
        title: 'Corporate Travel',
        description: 'Discreet and professional transportation for executives. Ideal for roadshows, meetings, and corporate events.'
      },
      {
        icon: <PartyPopper className="w-12 h-12 text-amber-400" />,
        title: 'Special Occasions',
        description: 'Arrive in style for your wedding, anniversary, prom, or any milestone celebration. Make your event unforgettable.'
      },
      {
        icon: <Building className="w-12 h-12 text-amber-400" />,
        title: 'City-to-City',
        description: 'Comfortable long-distance travel to destinations like The Hamptons, Boston, Philadelphia, or Washington D.C.'
      },
       {
        icon: <Clock className="w-12 h-12 text-amber-400" />,
        title: 'As-Directed Hourly',
        description: 'Enjoy the flexibility of a dedicated chauffeur and vehicle for as long as you need. Perfect for shopping or a night out.'
      },
       {
        icon: <Star className="w-12 h-12 text-amber-400" />,
        title: 'VIP & Celebrity Transport',
        description: 'Top-tier security and discretion for high-profile clients, ensuring privacy and peace of mind.'
      },
    ];

    const Services = () => {
      return (
        <div className="bg-neutral-900 text-white py-20">
          <Helmet>
            <title>Services | MLDLUXURY - Corporate, Airport, Events</title>
            <meta name="description" content="Discover the comprehensive luxury transportation services offered by MLDLUXURY in NYC, including airport transfers, corporate travel, and special event chauffeur services." />
          </Helmet>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-amber-400">Our Services</h1>
              <p className="mt-4 text-lg text-neutral-300 max-w-3xl mx-auto">
                Tailored transportation solutions designed to meet your every need with elegance and precision.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceData.map((service, index) => (
                <motion.div
                  key={service.title}
                  className="bg-black p-8 rounded-lg border border-neutral-800 flex flex-col items-center text-center transition-all duration-300 hover:border-amber-400 hover:shadow-xl hover:shadow-amber-400/10"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-neutral-400 flex-grow">{service.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-20 text-center"
            >
              <h2 className="text-3xl font-bold">Your Journey, Your Way</h2>
              <p className="mt-4 text-lg text-neutral-300 max-w-3xl mx-auto">
                Every service we offer is fully customizable. We work closely with you to create a personalized travel plan that aligns perfectly with your schedule and preferences.
              </p>
              <Button asChild size="lg" className="mt-8 bg-amber-400 text-black hover:bg-amber-500 rounded-full px-10 py-6 text-lg font-bold">
                <Link to="/booking">Create Your Perfect Itinerary</Link>
              </Button>
            </motion.div>

          </div>
        </div>
      );
    };

    export default Services;
  