import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, CheckCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
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
        'template_ummak3s', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          to_email: 'info@mldluxury.com'
        },
        'EGOCLKVYBJ8Oczz1K' // Replace with your EmailJS public key
      );

      console.log('Email sent successfully:', result);
      setIsSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      console.error('Email send failed:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-black text-white py-20">
      <Helmet>
        <title>Contact Us | MLDLUXURY</title>
        <meta name="description" content="Get in touch with MLDLUXURY for inquiries, bookings, or special requests. Contact us via phone, email, or our contact form." />
      </Helmet>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-amber-400">Get In Touch</h1>
          <p className="mt-4 text-lg text-neutral-300 max-w-3xl mx-auto">
            We're here to assist you 24/7. Whether you have a question or want to make a booking, don't hesitate to reach out.
          </p>
        </motion.div>
        
        {isSuccess && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 max-w-md w-full mx-4 p-6 bg-green-900/90 backdrop-blur-sm border border-green-500/50 rounded-lg text-center shadow-2xl"
          >
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-green-400 mb-2">Message Sent Successfully!</h3>
            <p className="text-neutral-300">
              Thank you for contacting MLDLUXURY. We'll get back to you soon.
            </p>
          </motion.div>
        )}

        <div className="grid md:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 text-amber-400">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Your Name" 
                  required 
                  className="mt-2 bg-neutral-800 border-neutral-700 text-white"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com" 
                  required 
                  className="mt-2 bg-neutral-800 border-neutral-700 text-white"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  type="tel" 
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="(123) 456-7890" 
                  required 
                  className="mt-2 bg-neutral-800 border-neutral-700 text-white"
                />
              </div>
              <div>
                <Label htmlFor="subject">Subject</Label>
                <Input 
                  id="subject" 
                  name="subject" 
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="e.g., Booking Inquiry" 
                  required 
                  className="mt-2 bg-neutral-800 border-neutral-700 text-white"
                />
              </div>
              <div>
                <Label htmlFor="message">Message</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  rows={5} 
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your message here..." 
                  required 
                  className="mt-2 bg-neutral-800 border-neutral-700 text-white"
                />
              </div>
              <Button 
                type="submit" 
                size="lg" 
                disabled={isSubmitting}
                className="w-full bg-amber-400 text-black hover:bg-amber-500 font-bold"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Message'
                )}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
             <h2 className="text-3xl font-bold mb-6 text-amber-400">Contact Information</h2>
             <div className="space-y-6 text-lg">
                 <div className="flex items-start">
                    <Mail className="w-8 h-8 text-amber-400 mr-4 mt-1"/>
                    <div>
                        <p className="font-semibold">Email Us</p>
                        <a href="mailto:info@mldluxury.com" className="text-neutral-400 hover:text-amber-300 transition">info@mldluxury.com</a>
                    </div>
                </div>
                 <div className="flex items-start">
                    <Phone className="w-8 h-8 text-amber-400 mr-4 mt-1"/>
                    <div>
                        <p className="font-semibold">Call Us</p>
                        <a href="tel:+19170000000" className="text-neutral-400 hover:text-amber-300 transition">(917) 000-0000</a>
                    </div>
                </div>
                <div className="mt-8">
                  <img 
                    src="/NYC Evening.jpg" 
                    alt="New York City evening skyline" 
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                </div>
             </div>
          </motion.div>

        </div>

      </div>
    </div>
  );
};

export default Contact;