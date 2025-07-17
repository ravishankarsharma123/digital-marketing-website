"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageSquare, Target, BarChart3, Megaphone, Globe, Smartphone,
  ArrowRight, CheckCircle, Star, Users, TrendingUp, Clock,
  Play, Award, Zap, Heart
} from "lucide-react";
import Link from "next/link";

const OurServices = () => {
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      id: "social-media",
      title: "Social Media Marketing",
      shortDescription: "Boost your brand presence across all social platforms with engaging content and strategic campaigns.",
      fullDescription: "Transform your social media presence with our comprehensive social media marketing services. We create engaging content, manage communities, run targeted advertising campaigns, and provide detailed analytics across all major platforms including Facebook, Instagram, Twitter, LinkedIn, TikTok, and YouTube.",
      icon: <MessageSquare className="w-8 h-8" />,
      gradient: "from-pink-500 to-rose-600",
      badge: "Popular",
      price: "Starting from $1,500/month",
      features: [
        "Content Creation & Curation",
        "Community Management",
        "Paid Social Advertising",
        "Analytics & Reporting",
        "Influencer Partnerships",
        "Social Media Strategy",
        "Brand Voice Development",
        "Crisis Management"
      ],
      benefits: [
        "Increase brand awareness by 300%",
        "Boost engagement rates by 250%",
        "Generate qualified leads",
        "Build loyal community"
      ],
      processSteps: [
        "Social Media Audit",
        "Strategy Development",
        "Content Calendar Creation",
        "Campaign Execution",
        "Performance Monitoring"
      ]
    },
    {
      id: "seo",
      title: "SEO Optimization",
      shortDescription: "Improve your search rankings and drive organic traffic with our advanced SEO strategies.",
      fullDescription: "Drive organic traffic and improve your search engine rankings with our comprehensive SEO services. We optimize your website structure, content, and technical elements to ensure maximum visibility in search results and sustainable long-term growth.",
      icon: <Target className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-600",
      badge: "Essential",
      price: "Starting from $2,000/month",
      features: [
        "Keyword Research & Analysis",
        "On-Page Optimization",
        "Technical SEO",
        "Link Building",
        "Local SEO",
        "SEO Audits & Reporting",
        "Content Optimization",
        "Competitor Analysis"
      ],
      benefits: [
        "Increase organic traffic by 400%",
        "Improve search rankings",
        "Boost domain authority",
        "Higher conversion rates"
      ],
      processSteps: [
        "SEO Audit",
        "Keyword Strategy",
        "Technical Optimization",
        "Content Creation",
        "Link Building Campaign"
      ]
    },
    {
      id: "analytics",
      title: "Analytics & Insights",
      shortDescription: "Get detailed analytics and actionable insights to optimize your marketing performance.",
      fullDescription: "Make data-driven decisions with our comprehensive analytics and insights services. We track, analyze, and report on all your marketing activities to provide actionable insights that drive business growth and improve ROI.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-600",
      badge: "Pro",
      price: "Starting from $1,200/month",
      features: [
        "Website Traffic Analysis",
        "User Behavior Tracking",
        "Conversion Rate Optimization",
        "Custom Reporting",
        "A/B Testing",
        "Goal Setting & Tracking",
        "Marketing Attribution",
        "Performance Dashboards"
      ],
      benefits: [
        "Improve conversion rates by 150%",
        "Reduce customer acquisition cost",
        "Identify growth opportunities",
        "Optimize marketing spend"
      ],
      processSteps: [
        "Analytics Setup",
        "Data Collection",
        "Analysis & Insights",
        "Optimization",
        "Reporting"
      ]
    },
    {
      id: "advertising",
      title: "Digital Advertising",
      shortDescription: "Maximize ROI with targeted ad campaigns across Google, Facebook, and other platforms.",
      fullDescription: "Reach your target audience with precision through our digital advertising services. We create and manage effective ad campaigns across Google Ads, Facebook, Instagram, LinkedIn, and other platforms to drive traffic, leads, and conversions.",
      icon: <Megaphone className="w-8 h-8" />,
      gradient: "from-purple-500 to-violet-600",
      badge: "Growth",
      price: "Starting from $2,500/month",
      features: [
        "PPC Campaigns",
        "Social Media Ads",
        "Display Advertising",
        "Retargeting Campaigns",
        "Ad Performance Analytics",
        "Budget Management",
        "Creative Development",
        "Landing Page Optimization"
      ],
      benefits: [
        "Achieve 500% ROI on ad spend",
        "Reduce cost per acquisition",
        "Increase qualified leads",
        "Scale successful campaigns"
      ],
      processSteps: [
        "Campaign Strategy",
        "Ad Creation",
        "Targeting Setup",
        "Launch & Monitor",
        "Optimize & Scale"
      ]
    },
    {
      id: "web-development",
      title: "Website Development",
      shortDescription: "Create stunning, responsive websites that convert visitors into customers.",
      fullDescription: "Build powerful, conversion-optimized websites that represent your brand perfectly. Our web development services include custom design, responsive development, e-commerce solutions, and ongoing maintenance to ensure your website performs at its best.",
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-600",
      badge: "Custom",
      price: "Starting from $5,000",
      features: [
        "Custom Website Design",
        "Responsive Development",
        "E-commerce Solutions",
        "Content Management Systems",
        "Website Maintenance",
        "Performance Optimization",
        "Security Implementation",
        "Third-party Integrations"
      ],
      benefits: [
        "Increase conversions by 200%",
        "Improve user experience",
        "Mobile-optimized design",
        "Fast loading speeds"
      ],
      processSteps: [
        "Discovery & Planning",
        "Design & Wireframing",
        "Development",
        "Testing & Launch",
        "Ongoing Support"
      ]
    },
    {
      id: "mobile-marketing",
      title: "Mobile Marketing",
      shortDescription: "Reach your audience on mobile devices with optimized campaigns and app promotion.",
      fullDescription: "Connect with your audience where they spend most of their time - on mobile devices. Our mobile marketing services include app store optimization, mobile advertising, SMS marketing, and location-based targeting to maximize your mobile presence.",
      icon: <Smartphone className="w-8 h-8" />,
      gradient: "from-indigo-500 to-purple-600",
      badge: "Mobile",
      price: "Starting from $1,800/month",
      features: [
        "Mobile-Optimized Campaigns",
        "App Store Optimization",
        "Mobile Ads Management",
        "SMS Marketing",
        "Push Notifications",
        "Location-Based Marketing",
        "Mobile Analytics",
        "Cross-Platform Strategy"
      ],
      benefits: [
        "Reach 80% of your audience",
        "Higher engagement rates",
        "Improved app downloads",
        "Location-based targeting"
      ],
      processSteps: [
        "Mobile Audit",
        "Strategy Development",
        "Campaign Setup",
        "Execution",
        "Performance Tracking"
      ]
    }
  ];

  const stats = [
    { icon: <Users className="w-8 h-8" />, number: "500+", label: "Happy Clients" },
    { icon: <Award className="w-8 h-8" />, number: "850+", label: "Projects Completed" },
    { icon: <TrendingUp className="w-8 h-8" />, number: "300%", label: "Average ROI" },
    { icon: <Clock className="w-8 h-8" />, number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 pt-20 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 animate-pulse">
              <Zap className="w-3 h-3 mr-1" />
              Our Services
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Complete Digital Marketing
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                {" "}Solutions
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              From strategy to execution, we provide comprehensive digital marketing services that drive real results. 
              Choose from our full range of services or let us create a custom solution for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Get Started Today
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-4 w-4" />
                View Our Work
              </Button>
            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/10 rounded-full blur-xl animate-bounce"></div>
          <div className="absolute top-40 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl animate-bounce delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-pink-500/10 rounded-full blur-xl animate-bounce delay-500"></div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border-0 bg-gradient-to-br from-background to-muted/50"
                    onClick={() => setSelectedService(service)}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-br text-white ${service.gradient}`}>
                      {service.icon}
                    </div>
                    {service.badge && (
                      <Badge variant="secondary">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {service.title}
                  </CardTitle>
                  <p className="text-muted-foreground">
                    {service.shortDescription}
                  </p>
                  <div className="text-lg font-semibold text-primary">
                    {service.price}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="ml-2 h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={() => setSelectedService(null)}>
          <div className="bg-background rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-6">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br text-white ${selectedService.gradient}`}>
                    {selectedService.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold">{selectedService.title}</h2>
                    <p className="text-xl text-primary font-semibold">{selectedService.price}</p>
                  </div>
                </div>
                <Button variant="ghost" onClick={() => setSelectedService(null)}>
                  ✕
                </Button>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">About This Service</h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {selectedService.fullDescription}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Key Benefits</h3>
                    <div className="space-y-2">
                      {selectedService.benefits.map((benefit, idx) => (
                        <div key={idx} className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-2" />
                          <span className="text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold mb-3">Our Process</h3>
                    <div className="space-y-3">
                      {selectedService.processSteps.map((step, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-xs mr-3">
                            {idx + 1}
                          </div>
                          <span className="text-sm">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3">What's Included</h3>
                    <div className="space-y-2">
                      {selectedService.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-muted/50 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2">Ready to get started?</h4>
                    <p className="text-sm text-muted-foreground mb-4">
                      Contact us today for a free consultation and custom quote.
                    </p>
                    <div className="space-y-2  ">
                      <Link href="/contact" >
                        <Button className="w-full  ">
                          Get Free Consultation
                        </Button>
                      </Link>
                      <Link href="/contact" >
                        <Button variant="outline" className="w-full mt-2  ">
                          Contact Us Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Why Choose Us Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                {" "}Services
              </span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine expertise, innovation, and dedication to deliver exceptional results for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Users className="w-6 h-6" />, title: "Expert Team", desc: "Certified professionals with years of experience" },
              { icon: <Award className="w-6 h-6" />, title: "Proven Results", desc: "Track record of delivering measurable ROI" },
              { icon: <Heart className="w-6 h-6" />, title: "Client-Focused", desc: "Your success is our primary goal" },
              { icon: <Zap className="w-6 h-6" />, title: "Fast Delivery", desc: "Quick turnaround without compromising quality" }
            ].map((item, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                  {item.icon}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg  text-muted-foreground">
                Contact us today for a free consultation and custom quote for your project.
              </p>
            </div>
            
            <div className="space-y-4">
              <Link href="/contact">
                <Button size="lg" className="group px-8 py-6 text-lg">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground pt-4">
                Click the button above to fill out our contact form and get started with your project
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OurServices;
