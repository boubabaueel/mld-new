import React from 'react';
    import { Helmet } from 'react-helmet';
    import { motion } from 'framer-motion';
    import { Award, Users, MapPin } from 'lucide-react';

    const About = () => {
      return (
        <div className="bg-transparent text-white py-20">
          <Helmet>
            <title>About MLDLUXURY | Our Story & Commitment</title>
            <meta name="description" content="Learn about MLDLUXURY, our mission to provide the highest standard of luxury transportation in NYC, and the values that drive our exceptional service." />
          </Helmet>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-amber-400">About MLDLUXURY</h1>
              <p className="mt-4 text-lg text-neutral-300 max-w-3xl mx-auto">
                Setting the Gold Standard for Luxury Transportation in New York City.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                 initial={{ opacity: 0, x: -50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8, delay: 0.2 }}
              >
                <img 
                  src="/pexels-mikebirdy-9604948.jpg" 
                  alt="Luxury car interior" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover"
                />
              </motion.div>
              <motion.div
                 initial={{ opacity: 0, x: 50 }}
                 animate={{ opacity: 1, x: 0 }}
                 transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                <p className="text-neutral-300 mb-4">
                  At MLDLUXURY, our mission is simple: to provide an unparalleled luxury transportation experience that embodies sophistication, reliability, and utmost discretion. We believe that the journey is just as important as the destination. Every ride with us is crafted to be a seamless and memorable part of your New York City experience.
                </p>
                <p className="text-neutral-300">
                  Founded on principles of excellence, we have consistently served a discerning clientele, from corporate executives to visiting dignitaries and celebrities, always exceeding expectations.
                </p>
              </motion.div>
            </div>
            
            <div className="py-20">
              <h2 className="text-3xl font-bold text-center mb-12">What Sets Us Apart</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                      <Award className="mx-auto text-amber-400 mb-4" size={48} />
                      <h3 className="text-2xl font-bold mb-2">Uncompromising Quality</h3>
                      <p className="text-neutral-400">From our pristine vehicles to our world-class chauffeurs, every detail is held to the highest standard.</p>
                  </div>
                   <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                      <Users className="mx-auto text-amber-400 mb-4" size={48} />
                      <h3 className="text-2xl font-bold mb-2">Client-Centric Service</h3>
                      <p className="text-neutral-400">Your needs are our priority. We offer personalized services tailored to your specific itinerary and preferences.</p>
                  </div>
                   <div className="bg-black/50 backdrop-blur-sm p-8 rounded-lg border border-white/10">
                      <MapPin className="mx-auto text-amber-400 mb-4" size={48} />
                      <h3 className="text-2xl font-bold mb-2">Expert Local Knowledge</h3>
                      <p className="text-neutral-400">Our chauffeurs are not just drivers; they are NYC experts, ensuring the most efficient and pleasant routes.</p>
                  </div>
              </div>
            </div>

          </div>
        </div>
      );
    };

    export default About;