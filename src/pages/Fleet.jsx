import React from 'react';
    import { Helmet } from 'react-helmet';
    import { motion } from 'framer-motion';
    import { User, Briefcase, Plus } from 'lucide-react';
    import {
      Card,
      CardContent,
      CardDescription,
      CardFooter,
      CardHeader,
      CardTitle,
    } from "../components/ui/card";
    import { Button } from '../components/ui/button';
    import { Link } from 'react-router-dom';

    const fleetData = [
      {
        name: 'Mercedes-Benz S 580',
        description: 'Perfect for executive travel or a stylish city ride. Seats up to 3 passengers.',
        capacity: 3,
        luggage: 2,
        features: ['Leather Interior', 'Wi-Fi', 'Bottled Water'],
        image: <img  alt="A sleek black Mercedes-Benz S 580 sedan from the rear, parked on an asphalt lot with autumn trees in the background" className="w-full h-64 object-cover rounded-t-lg" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/146a1b3c-9425-4b69-8a09-f6c2ecb3458d/76e426fadfc2e97c7de32a36a49a2352.jpg" />
      },
      {
        name: 'Cadillac Escalade',
        description: 'Spacious and commanding, ideal for small groups or families needing extra room. Seats up to 6.',
        capacity: 6,
        luggage: 5,
        features: ['Premium Sound System', 'Ample Legroom', 'Climate Control'],
        image: <img  alt="A large, imposing black Cadillac Escalade SUV" className="w-full h-64 object-cover rounded-t-lg" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/146a1b3c-9425-4b69-8a09-f6c2ecb3458d/829eb6474d2ae45af8f9b84d81cac549.png" />
      },
      {
        name: 'Mercedes-Benz Sprinter',
        description: 'Comfortable and efficient for larger groups or airport transfers with plenty of luggage. Seats up to 14.',
        capacity: 14,
        luggage: 10,
        features: ['High Roof', 'Entertainment System', 'Individual Seating'],
        image: <img  alt="A custom white Mercedes-Benz Sprinter luxury van" className="w-full h-64 object-cover rounded-t-lg" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/146a1b3c-9425-4b69-8a09-f6c2ecb3458d/d11f20e8280f1013887baf3ddb8c6c69.png" />
      },
      {
        name: 'Rolls Royce Cullinan',
        description: 'The pinnacle of luxury SUVs, offering unparalleled comfort and presence. Seats up to 4.',
        capacity: 4,
        luggage: 4,
        features: ['Starlight Headliner', 'Champagne Cooler', 'Rear Entertainment System'],
        image: <img  alt="An elegant white Rolls Royce Cullinan" className="w-full h-64 object-cover rounded-t-lg" src="https://storage.googleapis.com/hostinger-horizons-assets-prod/146a1b3c-9425-4b69-8a09-f6c2ecb3458d/5663ea4a54185aacf1e9f96e1b67db9b.jpg" />
      },
      {
        name: 'Cadillac XT6',
        description: 'Premium three-row luxury SUV combining style and functionality. Perfect for families or small groups. Seats up to 7.',
        capacity: 7,
        luggage: 6,
        features: ['Three-Row Seating', 'Premium Audio', 'Advanced Safety Features'],
        image: <img alt="A sophisticated black Cadillac XT6 luxury SUV" className="w-full h-64 object-cover rounded-t-lg" src="/Screen Shot 2025-08-10 at 7.08.53 PM copy copy copy copy.png" />
      },
    ];

    const Fleet = () => {
      return (
        <div className="bg-black text-white py-20">
          <Helmet>
            <title>Our Fleet | MLDLUXURY - Sedans, SUVs, Limousines</title>
            <meta name="description" content="Explore the MLDLUXURY fleet of high-end vehicles. Choose from luxury sedans, executive SUVs, stretch limousines, and more for your NYC transportation needs." />
          </Helmet>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="text-4xl md:text-5xl font-extrabold text-amber-400">Our Distinguished Fleet</h1>
              <p className="mt-4 text-lg text-neutral-300 max-w-3xl mx-auto">
                Meticulously maintained vehicles to suit every occasion and need.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {fleetData.map((vehicle, index) => (
                <motion.div
                  key={vehicle.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="bg-neutral-900 border-neutral-800 text-white overflow-hidden h-full flex flex-col">
                    <CardHeader className="p-0">
                      {vehicle.image}
                      <div className="p-6">
                        <CardTitle className="text-2xl text-amber-400">{vehicle.name}</CardTitle>
                        <CardDescription className="text-neutral-400 pt-1">{vehicle.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="p-6 pt-0 flex-grow">
                      <div className="flex items-center space-x-6 text-neutral-300 mb-4">
                        <span className="flex items-center"><User className="mr-2 text-amber-400" /> {vehicle.capacity} Passengers</span>
                        <span className="flex items-center"><Briefcase className="mr-2 text-amber-400" /> {vehicle.luggage} Bags</span>
                      </div>
                      <div>
                        <p className="font-semibold mb-2 text-neutral-200">Key Features:</p>
                        <ul className="list-disc list-inside text-neutral-400 space-y-1">
                          {vehicle.features.map(feature => <li key={feature}>{feature}</li>)}
                        </ul>
                      </div>
                    </CardContent>
                    <CardFooter className="p-6 pt-0">
                      <Button asChild className="w-full bg-amber-400 text-black hover:bg-amber-500 font-bold">
                        <Link to="/booking">Book This Vehicle</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div 
              className="text-center mt-20 p-10 bg-neutral-900 rounded-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h2 className="text-3xl font-bold text-amber-400">Need Something Special?</h2>
              <p className="text-neutral-300 mt-4 max-w-2xl mx-auto">
                We can source specialty vehicles upon request, including vintage cars or other exotic models. Contact us with your requirements.
              </p>
              <Button asChild variant="outline" size="lg" className="mt-6 border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-black">
                <Link to="/contact">Make a Special Request <Plus className="ml-2" /></Link>
              </Button>
            </motion.div>

          </div>
        </div>
      );
    };

    export default Fleet;