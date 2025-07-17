"use client"

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Play, Star, Users, TrendingUp, Zap, Target, BarChart3, Megaphone, Globe, Smartphone, MessageSquare, CheckCircle, Instagram, Twitter, Quote, Mail, Phone, MapPin, Award, Coffee, Clock, Heart, Linkedin, Youtube, Facebook } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatedCard } from "@/components/ui/animated-card";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Link from "next/link";


export default function Home() {
  const [selectedService, setSelectedService] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const services = [
    {
      title: "Social Media Marketing",
      description: "Boost your brand presence across all social platforms with engaging content and strategic campaigns.",
      icon: <MessageSquare className="w-6 h-6" />,
      gradient: "from-pink-500 to-rose-600",
      badge: "Popular",
      details: {
        fullDescription: "Our comprehensive social media marketing service helps you build a strong online presence across all major platforms including Facebook, Instagram, Twitter, LinkedIn, and TikTok. We create engaging content, manage your communities, run targeted advertising campaigns, and provide detailed analytics to track your growth.",
        features: ["Content Creation & Curation", "Community Management", "Paid Social Advertising", "Analytics & Reporting", "Influencer Partnerships", "Social Media Strategy"]
      }
    },
    {
      title: "SEO Optimization",
      description: "Improve your search rankings and drive organic traffic with our advanced SEO strategies.",
      icon: <Target className="w-6 h-6" />,
      gradient: "from-green-500 to-emerald-600",
      badge: "Essential",
      details: {
        fullDescription: "Drive organic traffic and improve your search engine rankings with our comprehensive SEO services. We optimize your website structure, content, and technical elements to ensure maximum visibility in search results.",
        features: ["Keyword Research & Analysis", "On-Page Optimization", "Technical SEO", "Link Building", "Local SEO", "SEO Audits & Reporting"]
      }
    },
    {
      title: "Analytics & Insights",
      description: "Get detailed analytics and actionable insights to optimize your marketing performance.",
      icon: <BarChart3 className="w-6 h-6" />,
      gradient: "from-blue-500 to-cyan-600",
      badge: "Pro",
      details: {
        fullDescription: "Our Analytics & Insights service provides you with in-depth analysis of your website and marketing performance. We use advanced tracking and reporting tools to deliver actionable insights that help you make data-driven decisions.",
        features: ["Website Traffic Analysis", "User Behavior Tracking", "Conversion Rate Optimization", "Custom Reporting", "A/B Testing", "Goal Setting & Tracking"]
      }
    },
    {
      title: "Digital Advertising",
      description: "Maximize ROI with targeted ad campaigns across Google, Facebook, and other platforms.",
      icon: <Megaphone className="w-6 h-6" />,
      gradient: "from-purple-500 to-violet-600",
      badge: "Growth",
      details: {
        fullDescription: "Our Digital Advertising service helps you reach your target audience with precision. We create and manage effective ad campaigns on Google, Facebook, Instagram, and other platforms to drive traffic and conversions.",
        features: ["PPC Campaigns", "Social Media Ads", "Display Advertising", "Retargeting Campaigns", "Ad Performance Analytics", "Budget Management"]
      }
    },
    {
      title: "Website Development",
      description: "Create stunning, responsive websites that convert visitors into customers.",
      icon: <Globe className="w-6 h-6" />,
      gradient: "from-orange-500 to-red-600",
      badge: "Custom",
      details: {
        fullDescription: "We design and develop custom websites tailored to your business needs. Our websites are not only visually appealing but also optimized for performance and conversions.",
        features: ["Custom Website Design", "Responsive Design", "E-commerce Solutions", "Content Management Systems", "Website Maintenance", "Performance Optimization"]
      }
    },
    {
      title: "Mobile Marketing",
      description: "Reach your audience on mobile devices with optimized campaigns and app promotion.",
      icon: <Smartphone className="w-6 h-6" />,
      gradient: "from-indigo-500 to-purple-600",
      badge: "Mobile",
      details: {
        fullDescription: "Our Mobile Marketing service ensures that your business reaches customers on their mobile devices. We optimize your campaigns for mobile and offer app promotion services to increase your app's visibility and downloads.",
        features: ["Mobile-Optimized Campaigns", "App Store Optimization", "Mobile Ads Management", "SMS Marketing", "Push Notifications", "Location-Based Marketing"]
      }
    }
  ];

  const handleShowDetails = (service) => {
    const fullService = services.find(s => s.title === service.title);
    setSelectedService(fullService);
    setIsDialogOpen(true);
  };

  return (
    <main>
      <div className="container mx-auto">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 pt-8 pb-10 lg:pt-10 lg:pb-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
              {/* Badge */}
              <Badge variant="secondary" className="animate-pulse">
                <Zap className="w-3 h-2 mr-1" />
                #1 Digital Marketing Agency
              </Badge>

              {/* Main Heading */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight animate-in slide-in-from-bottom-5 duration-1000">
                Grow Your Brand with
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent animate-pulse">
                  {" "}Digital Magic
                </span>
              </h1>

              {/* Subtitle */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-in slide-in-from-bottom-5 duration-1000 delay-200">
                Transform your social media presence and boost your business with our 
                data-driven digital marketing strategies. Get results that matter. 
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 animate-in slide-in-from-bottom-5 duration-1000 delay-300">
                <Button size="lg" className="group">
                  Start Growing Today
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button variant="outline" size="lg" className="group">
                  <Play className="mr-2 h-4 w-4" />
                  Watch Demo
                </Button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 animate-in slide-in-from-bottom-5 duration-1000 delay-500">
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex items-center space-x-1">
                    <Users className="h-5 w-5 text-blue-500" />
                    <span className="text-2xl font-bold">500K+</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="h-5 w-5 text-green-500" />
                    <span className="text-2xl font-bold">300%</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Growth Rate</p>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-yellow-500" />
                    <span className="text-2xl font-bold">4.9/5</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Client Rating</p>
                </div>
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

        {/* Services Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Our Services
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Everything You Need to 
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}Succeed Online
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From strategy to execution, we provide comprehensive digital marketing solutions 
                that drive real results for your business.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <AnimatedCard 
                  key={index} 
                  {...service} 
                  className="h-auto"
                  onShowDetails={handleShowDetails}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Cards Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-center mb-8">Why Choose Us?</h3>
            <div className="grid md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              <AnimatedCard
                title="Expert Team"
                description="Our certified digital marketing experts have years of experience driving success."
                icon={<Users className="w-6 h-6" />}
                gradient="from-emerald-500 to-teal-600"
              />
              <AnimatedCard
                title="Proven Results"
                description="Track record of delivering measurable ROI and business growth for our clients."
                icon={<TrendingUp className="w-6 h-6" />}
                gradient="from-amber-500 to-orange-600"
              />
              <AnimatedCard
                title="24/7 Support"
                description="Round-the-clock support to ensure your campaigns run smoothly at all times."
                icon={<Zap className="w-6 h-6" />}
                gradient="from-violet-500 to-purple-600"
              />
              <AnimatedCard
                title="Data-Driven"
                description="Every strategy is backed by comprehensive analytics and market research for optimal performance."
                icon={<BarChart3 className="w-6 h-6" />}
                gradient="from-blue-500 to-indigo-600"
              />
              <AnimatedCard
                title="Custom Solutions"
                description="Tailored marketing strategies designed specifically for your industry and business goals."
                icon={<Target className="w-6 h-6" />}
                gradient="from-rose-500 to-pink-600"
              />
              <AnimatedCard
                title="Transparent Pricing"
                description="No hidden fees or surprises. Clear, competitive pricing with detailed reporting on every dollar spent."
                icon={<Star className="w-6 h-6" />}
                gradient="from-cyan-500 to-blue-600"
              />
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Our Process
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                How We Work & Deliver
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}Effectiveness
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our proven 4-step process ensures maximum ROI and measurable results for your digital marketing campaigns.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <div className="absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-600 hidden lg:block transform translate-x-8"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Discovery & Analysis</h3>
                <p className="text-muted-foreground">We analyze your business, competitors, and target audience to create a customized strategy.</p>
              </div>

              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <div className="absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-purple-500 to-pink-600 hidden lg:block transform translate-x-8"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Strategy Development</h3>
                <p className="text-muted-foreground">We develop comprehensive marketing strategies tailored to your specific goals and budget.</p>
              </div>

              <div className="text-center group">
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <div className="absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-pink-500 to-red-600 hidden lg:block transform translate-x-8"></div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Implementation</h3>
                <p className="text-muted-foreground">Our expert team executes the strategy across all digital channels with precision and care.</p>
              </div>

              <div className="text-center group">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">Optimize & Scale</h3>
                <p className="text-muted-foreground">We continuously monitor, optimize, and scale your campaigns for maximum effectiveness.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Media Showcase Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Social Media Portfolio
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Follow Our
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  {" "}Social Presence
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Check out our latest work and connect with us on social media platforms.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
              {/* Instagram Posts */}
              <div className="bg-gradient-to-br from-pink-500 to-purple-600 p-1 rounded-lg group hover:scale-105 transition-transform duration-300">
                <div className="bg-background rounded-lg p-4 h-64 flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-3">
                    <Instagram className="w-5 h-5 text-pink-500" />
                    <span className="text-sm font-medium">@yourdigitalagency</span>
                  </div>
                  <div className="bg-gradient-to-br from-pink-100 to-purple-100 dark:from-pink-900/20 dark:to-purple-900/20 rounded-lg flex-1 flex items-center justify-center mb-3">
                    <div className="text-center">
                      <Instagram className="w-12 h-12 text-pink-500 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Latest Campaign</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>❤️ 1.2K</span>
                    <span>💬 45</span>
                    <span>📤 23</span>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-purple-500 to-blue-600 p-1 rounded-lg group hover:scale-105 transition-transform duration-300">
                <div className="bg-background rounded-lg p-4 h-64 flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-3">
                    <Instagram className="w-5 h-5 text-purple-500" />
                    <span className="text-sm font-medium">@yourdigitalagency</span>
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 rounded-lg flex-1 flex items-center justify-center mb-3">
                    <div className="text-center">
                      <TrendingUp className="w-12 h-12 text-purple-500 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Growth Analytics</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>❤️ 2.1K</span>
                    <span>💬 78</span>
                    <span>📤 34</span>
                  </div>
                </div>
              </div>

              {/* Twitter Posts */}
              <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-1 rounded-lg group hover:scale-105 transition-transform duration-300">
                <div className="bg-background rounded-lg p-4 h-64 flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-3">
                    <Twitter className="w-5 h-5 text-blue-500" />
                    <span className="text-sm font-medium">@yourdigitalagency</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-sm mb-3">"Just launched an amazing campaign for our client! 🚀 300% increase in engagement in just 2 weeks. #DigitalMarketing #Success"</p>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>🔄 45</span>
                    <span>❤️ 123</span>
                    <span>💬 12</span>
                  </div>
                </div>
              </div>

              {/* LinkedIn Post */}
              <div className="bg-gradient-to-br from-blue-700 to-blue-900 p-1 rounded-lg group hover:scale-105 transition-transform duration-300">
                <div className="bg-background rounded-lg p-4 h-64 flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-3">
                    <Linkedin className="w-5 h-5 text-blue-700" />
                    <span className="text-sm font-medium">Digital Marketing Agency</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-sm mb-3">"Proud to announce our B2B marketing campaign achieved 500% ROI for our manufacturing client. Strategy matters! 💼 #B2BMarketing"</p>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>👍 89</span>
                    <span>💬 23</span>
                    <span>🔄 15</span>
                  </div>
                </div>
              </div>

              {/* YouTube */}
              <div className="bg-gradient-to-br from-red-500 to-red-700 p-1 rounded-lg group hover:scale-105 transition-transform duration-300">
                <div className="bg-background rounded-lg p-4 h-64 flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-3">
                    <Youtube className="w-5 h-5 text-red-600" />
                    <span className="text-sm font-medium">Digital Marketing Tips</span>
                  </div>
                  <div className="bg-gradient-to-br from-red-100 to-orange-100 dark:from-red-900/20 dark:to-orange-900/20 rounded-lg flex-1 flex items-center justify-center mb-3">
                    <div className="text-center">
                      <Play className="w-12 h-12 text-red-600 mx-auto mb-2" />
                      <p className="text-sm text-muted-foreground">Video Tutorial</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>👀 5.2K</span>
                    <span>👍 234</span>
                    <span>💬 67</span>
                  </div>
                </div>
              </div>

              {/* Facebook */}
              <div className="bg-gradient-to-br from-blue-600 to-indigo-700 p-1 rounded-lg group hover:scale-105 transition-transform duration-300">
                <div className="bg-background rounded-lg p-4 h-64 flex flex-col justify-between">
                  <div className="flex items-center gap-2 mb-3">
                    <Facebook className="w-5 h-5 text-blue-600" />
                    <span className="text-sm font-medium">Digital Marketing Pro</span>
                  </div>
                  <div className="flex-1 flex flex-col justify-center">
                    <p className="text-sm mb-3">"Behind the scenes of our latest photoshoot for a lifestyle brand. Creative content drives engagement! 📸 #CreativeMarketing"</p>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span>👍 156</span>
                    <span>💬 34</span>
                    <span>🔄 28</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="flex flex-wrap gap-4 justify-center">
                <Button variant="outline" size="lg">
                  <Instagram className="mr-2 h-4 w-4" />
                  Follow on Instagram
                </Button>
                <Button variant="outline" size="lg">
                  <Twitter className="mr-2 h-4 w-4" />
                  Follow on Twitter
                </Button>
                <Button variant="outline" size="lg">
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Customer Reviews
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                What Our Clients
                <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}Say About Us
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Don't just take our word for it. Here's what our satisfied clients have to say about our services.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Enhanced Review Cards with Magic UI Style */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-card p-6 rounded-lg border border-border/50 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-primary mr-3" />
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Outstanding results! Our social media engagement increased by 400% in just 3 months. The team is professional and delivers exactly what they promise."
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-semibold">JS</span>
                      </div>
                      <div>
                        <p className="font-semibold">John Smith</p>
                        <p className="text-sm text-muted-foreground">CEO, TechStart Inc.</p>
                      </div>
                    </div>
                    <Link href="/contact">
                      <Button size="sm" variant="outline">
                        Contact
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-red-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-card p-6 rounded-lg border border-border/50 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-primary mr-3" />
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "The ROI we've seen from their digital advertising campaigns is incredible. They really understand our target market and deliver consistent results."
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-semibold">MJ</span>
                      </div>
                      <div>
                        <p className="font-semibold">Maria Johnson</p>
                        <p className="text-sm text-muted-foreground">Marketing Director, FashionCo</p>
                      </div>
                    </div>
                    <Link href="/contact">
                      <Button size="sm" variant="outline">
                        Contact
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-card p-6 rounded-lg border border-border/50 backdrop-blur-sm">
                  <div className="flex items-center mb-4">
                    <Quote className="w-8 h-8 text-primary mr-3" />
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    "Their SEO strategies helped us rank #1 for our main keywords. Our organic traffic has tripled, and we're getting more qualified leads than ever."
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mr-3">
                        <span className="text-white font-semibold">DW</span>
                      </div>
                      <div>
                        <p className="font-semibold">David Wilson</p>
                        <p className="text-sm text-muted-foreground">Founder, EcoSolutions</p>
                      </div>
                    </div>
                    <Link href="/contact">
                      <Button size="sm" variant="outline">
                        Contact
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-8">
              <Button size="lg" className="group">
                Read More Reviews
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </section>

        {/* Who I Am Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <Badge variant="secondary" className="mb-4">
                  About Me
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Who
                  <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {" "}I Am
                  </span>
                </h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg blur opacity-20"></div>
                    <div className="relative bg-card p-8 rounded-lg border">
                      <h3 className="text-2xl font-bold mb-4">Digital Marketing Expert</h3>
                      <p className="text-muted-foreground leading-relaxed mb-4">
                        With over 8 years of experience in digital marketing, I've helped hundreds of businesses transform their online presence and achieve remarkable growth. My passion lies in creating data-driven strategies that deliver real, measurable results.
                      </p>
                      <p className="text-muted-foreground leading-relaxed">
                        I specialize in social media marketing, SEO, and digital advertising. My approach combines creativity with analytics to ensure every campaign not only looks great but also performs exceptionally.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-card rounded-lg border">
                      <Award className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold">8+</div>
                      <div className="text-sm text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="text-center p-4 bg-card rounded-lg border">
                      <Users className="w-8 h-8 text-blue-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold">500+</div>
                      <div className="text-sm text-muted-foreground">Clients Served</div>
                    </div>
                    <div className="text-center p-4 bg-card rounded-lg border">
                      <Coffee className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold">1000+</div>
                      <div className="text-sm text-muted-foreground">Cups of Coffee</div>
                    </div>
                    <div className="text-center p-4 bg-card rounded-lg border">
                      <Heart className="w-8 h-8 text-red-500 mx-auto mb-2" />
                      <div className="text-2xl font-bold">99%</div>
                      <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Projects, Clients, Benefits */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Our Achievements
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Projects Completed &
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  {" "}Happy Clients
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <CheckCircle className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">850+</div>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <p className="text-muted-foreground">Happy Clients</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-yellow-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Award className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <p className="text-muted-foreground">Industry Awards</p>
              </div>

              <div className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold mb-2">300%</div>
                <p className="text-muted-foreground">Average ROI</p>
              </div>
            </div>

            {/* Key Benefits */}
            <div className="mt-16">
              <h3 className="text-2xl font-bold text-center mb-8">Key Benefits of Working With Us</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="flex items-start space-x-3 p-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Faster Time to Market</h4>
                    <p className="text-sm text-muted-foreground">Launch campaigns 50% faster with our streamlined processes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Cost-Effective Solutions</h4>
                    <p className="text-sm text-muted-foreground">Save up to 40% on marketing costs while improving results</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3 p-4">
                  <CheckCircle className="w-6 h-6 text-green-500 mt-1" />
                  <div>
                    <h4 className="font-semibold mb-1">Scalable Growth</h4>
                    <p className="text-sm text-muted-foreground">Strategies that grow with your business and adapt to market changes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Us Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">
                Get In Touch
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Contact
                <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  {" "}Us
                </span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Ready to transform your digital presence? Let's discuss how we can help your business grow.
              </p>
            </div>

            <div className="max-w-4xl mx-auto text-center">
              {/* Contact Info Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email Us</h3>
                    <p className="text-sm text-muted-foreground">hello@digitalagency.com</p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Call Us</h3>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Visit Us</h3>
                    <p className="text-sm text-muted-foreground">123 Marketing Street</p>
                  </div>
                </div>

                <div className="flex flex-col items-center space-y-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Business Hours</h3>
                    <p className="text-sm text-muted-foreground">Mon - Fri: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Contact Button */}
              <div className="space-y-4">
                <Link href="/contact">
                  <Button size="lg" className="group px-8 py-6 text-lg">
                    Get In Touch With Us
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <p className="text-sm text-muted-foreground pt-4">
                  Click the button above to fill out our contact form and get a free consultation
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Service Details Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <div className="flex items-center gap-3 mb-2">
              {selectedService?.icon && (
                <div className={`p-2 rounded-lg bg-gradient-to-br text-white ${selectedService.gradient}`}>
                  {selectedService.icon}
                </div>
              )}
              <div>
                <DialogTitle className="text-2xl">{selectedService?.title}</DialogTitle>
                {selectedService?.badge && (
                  <Badge variant="secondary" className="mt-1">
                    {selectedService.badge}
                  </Badge>
                )}
              </div>
            </div>
            <DialogDescription className="text-base leading-relaxed">
              {selectedService?.details?.fullDescription}
            </DialogDescription>
          </DialogHeader>
          
          {selectedService?.details?.features && (
            <div className="mt-6">
              <h4 className="font-semibold mb-3">What's Included:</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {selectedService.details.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          <div className="flex gap-3 mt-6">
            <Link href="/contact" className="flex-1">
              <Button className="w-full">Get Started</Button>
            </Link>
            <Link href="/ourservices" className="flex-1">
              <Button variant="outline" className="w-full">Learn More</Button>
            </Link>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}