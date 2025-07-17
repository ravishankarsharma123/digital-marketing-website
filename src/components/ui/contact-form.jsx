"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, CheckCircle } from "lucide-react";

export function ContactForm({ 
  title = "Send us a Message",
  subtitle = "Fill out the form below and we'll get back to you within 24 hours.",
  compact = false,
  showCard = true,
  className = "",
  fields = {
    firstName: true,
    lastName: true,
    email: true,
    phone: true,
    company: true,
    service: true,
    budget: true,
    message: true
  },
  onSubmit = null,
  buttonText = "Send Message"
}) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (onSubmit) {
      try {
        await onSubmit(formData);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            budget: '',
            message: ''
          });
        }, 3000);
      } catch (error) {
        console.error('Form submission error:', error);
      } finally {
        setIsSubmitting(false);
      }
    } else {
      // Default simulation
      setTimeout(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            company: '',
            service: '',
            budget: '',
            message: ''
          });
        }, 3000);
      }, 2000);
    }
  };

  const FormContent = () => (
    <>
      {/* Only show title/subtitle when NOT using card wrapper */}
      {!showCard && (title || subtitle) && (
        <div className="mb-6">
          {title && <h3 className="text-2xl font-bold mb-2">{title}</h3>}
          {subtitle && <p className="text-muted-foreground">{subtitle}</p>}
        </div>
      )}
      
      {isSubmitted ? (
        <div className="text-center py-12">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
          <p className="text-muted-foreground">
            Thank you for reaching out. We'll get back to you soon.
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Fields */}
          {(fields.firstName || fields.lastName) && (
            <div className={`grid ${compact || !fields.lastName ? 'grid-cols-1' : 'md:grid-cols-2'} gap-4`}>
              {fields.firstName && (
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John"
                  />
                </div>
              )}
              {fields.lastName && !compact && (
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Doe"
                  />
                </div>
              )}
            </div>
          )}

          {/* Contact Fields */}
          {(fields.email || fields.phone) && (
            <div className={`grid ${compact || !fields.phone ? 'grid-cols-1' : 'md:grid-cols-2'} gap-4`}>
              {fields.email && (
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              )}
              {fields.phone && !compact && (
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              )}
            </div>
          )}

          {/* Company & Service - Only show in full form */}
          {!compact && (fields.company || fields.service) && (
            <div className="grid md:grid-cols-2 gap-4">
              {fields.company && (
                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your Company"
                  />
                </div>
              )}
              {fields.service && (
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Interested In
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                  >
                    <option value="">Select a service</option>
                    <option value="social-media">Social Media Marketing</option>
                    <option value="seo">SEO Optimization</option>
                    <option value="advertising">Digital Advertising</option>
                    <option value="web-dev">Website Development</option>
                    <option value="analytics">Analytics & Insights</option>
                    <option value="mobile">Mobile Marketing</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              )}
            </div>
          )}

          {/* Budget - Only show in full form */}
          {!compact && fields.budget && (
            <div>
              <label htmlFor="budget" className="block text-sm font-medium mb-2">
                Budget Range
              </label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={handleInputChange}
                className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              >
                <option value="">Select budget range</option>
                <option value="under-5k">Under $5,000</option>
                <option value="5k-15k">$5,000 - $15,000</option>
                <option value="15k-50k">$15,000 - $50,000</option>
                <option value="50k-100k">$50,000 - $100,000</option>
                <option value="over-100k">$100,000+</option>
              </select>
            </div>
          )}

          {/* Message */}
          {fields.message && (
            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                required
                rows={compact ? 4 : 6}
                className="w-full p-3 border border-border rounded-lg bg-background focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your project, goals, and how we can help you achieve them..."
              />
            </div>
          )}

          {/* Submit Button */}
          <Button 
            type="submit" 
            size="lg" 
            className="w-full group"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                Sending Message...
              </>
            ) : (
              <>
                {buttonText}
                <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </Button>
        </form>
      )}
    </>
  );

  if (showCard) {
    return (
      <Card className={`border-0 shadow-2xl ${className}`}>
        <CardHeader>
          <CardTitle className="text-2xl">{title}</CardTitle>
          <p className="text-muted-foreground">{subtitle}</p>
        </CardHeader>
        <CardContent>
          <FormContent />
        </CardContent>
      </Card>
    );
  }

  return (
    <div className={className}>
      <FormContent />
    </div>
  );
}

// Export preset configurations for easy reuse
export const ContactFormPresets = {
  // Full contact form (default)
  full: {},
  
  // Compact form for homepage/sidebar
  compact: {
    compact: true,
    title: "Quick Contact",
    subtitle: "Send us a quick message",
    fields: {
      firstName: true,
      lastName: false,
      email: true,
      phone: false,
      company: false,
      service: false,
      budget: false,
      message: true
    }
  },
  
  // Newsletter signup
  newsletter: {
    compact: true,
    title: "Subscribe to Newsletter",
    subtitle: "Stay updated with our latest news",
    buttonText: "Subscribe",
    fields: {
      firstName: true,
      lastName: false,
      email: true,
      phone: false,
      company: false,
      service: false,
      budget: false,
      message: false
    }
  },
  
  // Quote request
  quote: {
    title: "Request a Quote",
    subtitle: "Tell us about your project",
    buttonText: "Get Quote",
    fields: {
      firstName: true,
      lastName: true,
      email: true,
      phone: true,
      company: true,
      service: true,
      budget: true,
      message: true
    }
  },
  
  // Simple contact (no card wrapper)
  simple: {
    showCard: false,
    title: "",
    subtitle: "",
    fields: {
      firstName: true,
      lastName: false,
      email: true,
      phone: false,
      company: false,
      service: false,
      budget: false,
      message: true
    }
  }
};
