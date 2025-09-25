import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar, Clock, Users, MapPin, Mail, Phone, MessageCircle, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Booking = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    pickup_date: '',
    pickup_time: '',
    passengers: '',
    pickup_location: '',
    dropoff_location: '',
    name: '',
    email: '',
    phone: '',
    special_requests: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        'service_60kdwsj', // Replace with your EmailJS service ID
        'template_7q0dj3e', // Replace with your EmailJS booking template ID
        {
          pickup_date: formData.pickup_date,
          pickup_time: formData.pickup_time,
          passengers: formData.passengers,
          pickup_location: formData.pickup_location,
          dropoff_location: formData.dropoff_location,
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          special_requests: formData.special_requests,
          to_email: 'info@mldluxury.com'
        },
        'EGOCLKVYBJ8Oczz1K' // Replace with your EmailJS public key
      );

      console.log('Booking email sent successfully:', result);
      setIsSuccess(true);
      setFormData({
        pickup_date: '',
        pickup_time: '',
        passengers: '',
        pickup_location: '',
        dropoff_location: '',
        name: '',
        email: '',
        phone: '',
        special_requests: ''
      });
    } catch (error) {
      console.error('Booking email send failed:', error);
      alert('Failed to submit booking request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-neutral-900 text-white py-20">
      <Helmet>
        <title>Book Your Ride | MLDLUXURY</title>
        <meta name="description" content="Secure your luxury transportation in NYC with our simple and fast booking form. Reserve your vehicle today." />
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-400">Reserve Your Vehicle</h1>
          <p className="mt-4 text-lg text-neutral-300 max-w-3xl mx-auto">
            Complete the form below to request your booking. We'll confirm availability shortly.
          </p>
        </motion.div>
        
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 max-w-md w-full mx-4 p-6 bg-green-900/90 backdrop-blur-sm border border-green-500/50 rounded-lg text-center shadow-2xl"
          >
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-400 mb-2">Booking Request Submitted!</h3>
            <p className="text-neutral-300">
              Thank you for choosing MLDLUXURY. We'll contact you soon to confirm your reservation.
            </p>
          </motion.div>
        )}

        <Card className="max-w-4xl mx-auto bg-black border-neutral-800">
          <CardHeader>
            <CardTitle className="text-amber-400 text-2xl">Booking Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Trip Details */}
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="date" className="flex items-center"><Calendar className="mr-2 h-4 w-4 text-amber-400" />Pickup Date</Label>
                    <Input 
                      id="date" 
                      name="pickup_date" 
                      type="date" 
                      value={formData.pickup_date}
                      onChange={handleInputChange}
                      required 
                      className="bg-neutral-800 border-neutral-700 text-white" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="time" className="flex items-center"><Clock className="mr-2 h-4 w-4 text-amber-400" />Pickup Time</Label>
                    <Input 
                      id="time" 
                      name="pickup_time" 
                      type="time" 
                      value={formData.pickup_time}
                      onChange={handleInputChange}
                      required 
                      className="bg-neutral-800 border-neutral-700 text-white" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="passengers" className="flex items-center"><Users className="mr-2 h-4 w-4 text-amber-400" />Number of Passengers</Label>
                    <Input 
                      id="passengers" 
                      name="passengers" 
                      type="number" 
                      min="1" 
                      value={formData.passengers}
                      onChange={handleInputChange}
                      placeholder="e.g., 2" 
                      required 
                      className="bg-neutral-800 border-neutral-700 text-white" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="pickup" className="flex items-center"><MapPin className="mr-2 h-4 w-4 text-amber-400" />Pickup Location</Label>
                    <Input 
                      id="pickup" 
                      name="pickup_location" 
                      value={formData.pickup_location}
                      onChange={handleInputChange}
                      placeholder="e.g., 123 Main St, New York, NY" 
                      required 
                      className="bg-neutral-800 border-neutral-700 text-white" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="dropoff" className="flex items-center"><MapPin className="mr-2 h-4 w-4 text-amber-400" />Drop-off Location</Label>
                    <Input 
                      id="dropoff" 
                      name="dropoff_location" 
                      value={formData.dropoff_location}
                      onChange={handleInputChange}
                      placeholder="e.g., JFK Airport" 
                      required 
                      className="bg-neutral-800 border-neutral-700 text-white" 
                    />
                  </div>
                </div>
                {/* Personal Details */}
                <div className="space-y-6">
                   <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center"><Users className="mr-2 h-4 w-4 text-amber-400" />Full Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe" 
                      required 
                      className="bg-neutral-800 border-neutral-700 text-white" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center"><Mail className="mr-2 h-4 w-4 text-amber-400" />Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john.doe@example.com" 
                      required 
                      className="bg-neutral-800 border-neutral-700 text-white" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone" className="flex items-center"><Phone className="mr-2 h-4 w-4 text-amber-400" />Phone Number</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      type="tel" 
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="(123) 456-7890" 
                      required 
                      className="bg-neutral-800 border-neutral-700 text-white" 
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="notes" className="flex items-center"><MessageCircle className="mr-2 h-4 w-4 text-amber-400" />Special Requests</Label>
                    <Textarea 
                      id="notes" 
                      name="special_requests" 
                      value={formData.special_requests}
                      onChange={handleInputChange}
                      placeholder="e.g., Child seat needed, specific route preference." 
                      className="bg-neutral-800 border-neutral-700 text-white" 
                    />
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full bg-amber-400 text-black hover:bg-amber-500 font-bold text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    'Submit Booking Request'
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Booking;