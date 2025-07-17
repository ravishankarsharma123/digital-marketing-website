"use client"

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageCircle, Calendar } from "lucide-react";
import { ContactForm } from "@/components/ui/contact-form";

const Contact = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 pt-20 pb-16">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto">
                        <Badge variant="secondary" className="mb-4 animate-pulse">
                            <MessageCircle className="w-3 h-3 mr-1" />
                            Get In Touch
                        </Badge>
                        
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                            Let's Start Your
                            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                                {" "}Digital Journey
                            </span>
                        </h1>
                        
                        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
                            Ready to transform your business? We're here to help you achieve your digital marketing goals.
                            Let's discuss how we can grow your brand together.
                        </p>
                    </div>
                </div>

                {/* Background Elements */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-bounce"></div>
                    <div className="absolute top-40 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-bounce delay-1000"></div>
                    <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-bounce delay-500"></div>
                </div>
            </section>

            {/* Contact Content */}
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
                        {/* Contact Information */}
                        <div className="lg:col-span-1 space-y-8">
                            <div>
                                <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                                <p className="text-muted-foreground mb-8">
                                    We're always ready to help and answer any questions you might have.
                                </p>
                            </div>

                            {/* Contact Cards */}
                            <div className="space-y-6">
                                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <Mail className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold mb-1">Email Us</h3>
                                                <p className="text-muted-foreground text-sm mb-2">Send us an email anytime</p>
                                                <div className="space-y-1">
                                                    <a href="mailto:hello@digitalagency.com" className="block text-sm hover:text-primary transition-colors">
                                                        hello@digitalagency.com
                                                    </a>
                                                    <a href="mailto:support@digitalagency.com" className="block text-sm hover:text-primary transition-colors">
                                                        support@digitalagency.com
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <Phone className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold mb-1">Call Us</h3>
                                                <p className="text-muted-foreground text-sm mb-2">Mon-Fri from 9am to 6pm</p>
                                                <div className="space-y-1">
                                                    <a href="tel:+15551234567" className="block text-sm hover:text-primary transition-colors">
                                                        +1 (555) 123-4567
                                                    </a>
                                                    <a href="tel:+15559876543" className="block text-sm hover:text-primary transition-colors">
                                                        +1 (555) 987-6543
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <MapPin className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold mb-1">Visit Us</h3>
                                                <p className="text-muted-foreground text-sm mb-2">Come say hello at our office</p>
                                                <div className="text-sm">
                                                    <p>123 Marketing Street</p>
                                                    <p>Digital City, DC 12345</p>
                                                    <p>United States</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                                    <CardContent className="p-6">
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                <Clock className="w-6 h-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="font-semibold mb-1">Business Hours</h3>
                                                <p className="text-muted-foreground text-sm mb-2">When we're available</p>
                                                <div className="text-sm space-y-1">
                                                    <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                                                    <p>Saturday: 10:00 AM - 4:00 PM</p>
                                                    <p>Sunday: Closed</p>
                                                </div>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Quick Actions */}
                            <div className="space-y-4">
                                <h3 className="font-semibold">Quick Actions</h3>
                                <div className="space-y-3">
                                    <Button variant="outline" className="w-full justify-start">
                                        <Calendar className="w-4 h-4 mr-2" />
                                        Schedule a Call
                                    </Button>
                                    <Button variant="outline" className="w-full justify-start">
                                        <MessageCircle className="w-4 h-4 mr-2" />
                                        Live Chat Support
                                    </Button>
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <ContactForm 
                              title="Send us a Message"
                              subtitle="Fill out the form below and we'll get back to you within 24 hours."
                              compact={false}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section (Optional) */}
            <section className="py-20 bg-muted/30">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">Find Us</h2>
                        <p className="text-muted-foreground">Visit our office or get directions</p>
                    </div>
                    
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-muted/50 to-muted rounded-lg h-96 flex items-center justify-center">
                            <div className="text-center">
                                <MapPin className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Interactive Map</h3>
                                <p className="text-muted-foreground">
                                    Map integration can be added here
                                    <br />
                                    123 Marketing Street, Digital City, DC 12345
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Contact;