"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
	ArrowRight,
	Users,
	Target,
	TrendingUp,
	Award,
	Heart,
	Zap,
	Globe,
	CheckCircle,
	Star,
	Quote,
	Calendar,
	Coffee,
	Lightbulb,
	MessageSquare,
	BarChart3,
	Megaphone,
	Smartphone,
} from "lucide-react";
import Link from "next/link";

const About = () => {
	const teamMembers = [
		{
			name: "John Anderson",
			role: "CEO & Founder",
			experience: "10+ years",
			expertise: "Digital Strategy & Leadership",
			avatar: "JA",
			gradient: "from-blue-500 to-purple-600",
		},
		{
			name: "Sarah Mitchell",
			role: "Head of Marketing",
			experience: "8+ years",
			expertise: "Social Media & Content Strategy",
			avatar: "SM",
			gradient: "from-pink-500 to-rose-600",
		},
		{
			name: "Mike Johnson",
			role: "Technical Director",
			experience: "12+ years",
			expertise: "Web Development & SEO",
			avatar: "MJ",
			gradient: "from-green-500 to-emerald-600",
		},
		{
			name: "Emma Davis",
			role: "Analytics Manager",
			experience: "6+ years",
			expertise: "Data Analytics & Optimization",
			avatar: "ED",
			gradient: "from-purple-500 to-violet-600",
		},
	];

	const achievements = [
		{
			number: "500+",
			label: "Happy Clients",
			icon: <Users className="w-8 h-8" />,
		},
		{
			number: "850+",
			label: "Projects Completed",
			icon: <CheckCircle className="w-8 h-8" />,
		},
		{
			number: "300%",
			label: "Average ROI",
			icon: <TrendingUp className="w-8 h-8" />,
		},
		{
			number: "15+",
			label: "Industry Awards",
			icon: <Award className="w-8 h-8" />,
		},
		{
			number: "8",
			label: "Years of Excellence",
			icon: <Calendar className="w-8 h-8" />,
		},
		{
			number: "24/7",
			label: "Customer Support",
			icon: <Heart className="w-8 h-8" />,
		},
	];

	const whyChooseUs = [
		{
			title: "Proven Expertise",
			description:
				"Over 8 years of experience helping businesses grow their digital presence with measurable results.",
			icon: <Award className="w-6 h-6" />,
			gradient: "from-blue-500 to-cyan-600",
		},
		{
			title: "Client-Centric Approach",
			description:
				"We put your success first. Every strategy is tailored to your unique business goals and challenges.",
			icon: <Heart className="w-6 h-6" />,
			gradient: "from-pink-500 to-rose-600",
		},
		{
			title: "Data-Driven Results",
			description:
				"All our decisions are backed by comprehensive analytics and market research for optimal performance.",
			icon: <BarChart3 className="w-6 h-6" />,
			gradient: "from-green-500 to-emerald-600",
		},
		{
			title: "Innovative Solutions",
			description:
				"We stay ahead of digital trends and use cutting-edge tools to give you a competitive advantage.",
			icon: <Lightbulb className="w-6 h-6" />,
			gradient: "from-purple-500 to-violet-600",
		},
		{
			title: "Transparent Communication",
			description:
				"Regular updates, clear reporting, and open communication throughout your entire journey with us.",
			icon: <MessageSquare className="w-6 h-6" />,
			gradient: "from-orange-500 to-red-600",
		},
		{
			title: "Full-Service Support",
			description:
				"From strategy to execution, we provide end-to-end digital marketing solutions under one roof.",
			icon: <Globe className="w-6 h-6" />,
			gradient: "from-indigo-500 to-purple-600",
		},
	];

	const clientTestimonials = [
		{
			company: "TechStart Inc.",
			industry: "Technology",
			result: "400% increase in social media engagement",
			testimonial:
				"The team's expertise in digital marketing transformed our online presence completely.",
			avatar: "TS",
			gradient: "from-blue-500 to-purple-600",
		},
		{
			company: "FashionCo",
			industry: "Fashion & Retail",
			result: "500% ROI on advertising spend",
			testimonial:
				"Outstanding results! They really understand our target market and deliver consistent results.",
			avatar: "FC",
			gradient: "from-pink-500 to-rose-600",
		},
		{
			company: "EcoSolutions",
			industry: "Environmental",
			result: "300% increase in organic traffic",
			testimonial:
				"Their SEO strategies helped us rank #1 for our main keywords.",
			avatar: "ES",
			gradient: "from-green-500 to-emerald-600",
		},
	];

	return (
		<div className="min-h-screen bg-background">
			{/* Hero Section */}
			<section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 pt-20 pb-16">
				<div className="container mx-auto px-4">
					<div className="text-center max-w-4xl mx-auto">
						<Badge variant="secondary" className="mb-4 animate-pulse">
							<Heart className="w-3 h-3 mr-1" />
							About Us
						</Badge>

						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
							We Are Digital Marketing
							<span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
								{" "}
								Experts
							</span>
						</h1>

						<p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
							Passionate about helping businesses grow through innovative digital
							strategies.
							<br className="hidden sm:block" /> We combine creativity,
							technology, and data to deliver exceptional results that matter.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/contact">
								<Button size="lg" className="group">
									Work With Us
									<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Button>
							</Link>
							<Link href="/ourservices">
								<Button variant="outline" size="lg">
									Our Services
								</Button>
							</Link>
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

			{/* Who We Are Section */}
			<section className="py-12">
				<div className="container mx-auto px-4">
					<div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
						<div className="space-y-6">
							<div>
								<Badge variant="secondary" className="mb-4">
									Who We Are
								</Badge>
								<h2 className="text-3xl md:text-4xl font-bold mb-4">
									Digital Marketing Agency
									<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
										{" "}
										Since 2016
									</span>
								</h2>
							</div>

							<p className="text-lg text-muted-foreground leading-relaxed">
								We are a team of passionate digital marketing professionals
								dedicated to helping businesses
								<br className="hidden sm:block" /> thrive in the digital
								landscape. Founded in 2016, we've grown from a small startup to a
								leading digital marketing agency.
							</p>

							<p className="text-muted-foreground leading-relaxed">
								Our expertise spans across social media marketing, SEO, digital
								advertising, web development,
								<br className="hidden sm:block" /> and analytics. We believe in
								the power of data-driven strategies combined with creative
								excellence to deliver outstanding results for our clients.
							</p>

							<div className="grid grid-cols-2 gap-4">
								<div className="text-center p-4 bg-muted/50 rounded-lg">
									<Coffee className="w-8 h-8 text-orange-500 mx-auto mb-2" />
									<div className="text-2xl font-bold">1000+</div>
									<div className="text-sm text-muted-foreground">
										Cups of Coffee
									</div>
								</div>
								<div className="text-center p-4 bg-muted/50 rounded-lg">
									<Zap className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
									<div className="text-2xl font-bold">99%</div>
									<div className="text-sm text-muted-foreground">
										Client Satisfaction
									</div>
								</div>
							</div>
						</div>

						<div className="relative">
							<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-20"></div>
							<div className="relative bg-card p-8 rounded-lg border">
								<h3 className="text-2xl font-bold mb-6">Our Mission</h3>
								<div className="space-y-4">
									<div className="flex items-start space-x-3">
										<Target className="w-5 h-5 text-primary mt-1" />
										<div>
											<h4 className="font-semibold">Empower Businesses</h4>
											<p className="text-sm text-muted-foreground">
												Help businesses of all sizes achieve their digital marketing
												goals
											</p>
										</div>
									</div>
									<div className="flex items-start space-x-3">
										<TrendingUp className="w-5 h-5 text-primary mt-1" />
										<div>
											<h4 className="font-semibold">Drive Growth</h4>
											<p className="text-sm text-muted-foreground">
												Deliver measurable results that contribute to business growth
											</p>
										</div>
									</div>
									<div className="flex items-start space-x-3">
										<Lightbulb className="w-5 h-5 text-primary mt-1" />
										<div>
											<h4 className="font-semibold">Innovate Continuously</h4>
											<p className="text-sm text-muted-foreground">
												Stay ahead with cutting-edge digital marketing strategies
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Our Goals Section */}
			<section className="py-12 bg-muted/30">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<Badge variant="secondary" className="mb-4">
							Our Vision & Goals
						</Badge>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Our Goals &
							<span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
								{" "}
								Future Vision
							</span>
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							We're committed to continuous growth and innovation in the digital
							marketing space.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
						<Card className="text-center p-6 hover:shadow-lg transition-shadow">
							<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
								<Target className="w-8 h-8" />
							</div>
							<h3 className="text-xl font-semibold mb-3">2024 Goals</h3>
							<ul className="text-left space-y-2 text-sm text-muted-foreground">
								<li>• Serve 1000+ businesses</li>
								<li>• Launch AI-powered tools</li>
								<li>• Expand to new markets</li>
								<li>• Achieve carbon neutrality</li>
							</ul>
						</Card>

						<Card className="text-center p-6 hover:shadow-lg transition-shadow">
							<div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
								<Globe className="w-8 h-8" />
							</div>
							<h3 className="text-xl font-semibold mb-3">Future Vision</h3>
							<ul className="text-left space-y-2 text-sm text-muted-foreground">
								<li>• Global digital presence</li>
								<li>• Industry thought leadership</li>
								<li>• Advanced automation</li>
								<li>• Sustainable practices</li>
							</ul>
						</Card>

						<Card className="text-center p-6 hover:shadow-lg transition-shadow">
							<div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
								<Heart className="w-8 h-8" />
							</div>
							<h3 className="text-xl font-semibold mb-3">Core Values</h3>
							<ul className="text-left space-y-2 text-sm text-muted-foreground">
								<li>• Client success first</li>
								<li>• Transparency always</li>
								<li>• Continuous learning</li>
								<li>• Ethical practices</li>
							</ul>
						</Card>
					</div>
				</div>
			</section>

			{/* Achievements Section */}
			<section className="py-12">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<Badge variant="secondary" className="mb-4">
							Our Achievements
						</Badge>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Milestones &
							<span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
								{" "}
								Achievements
							</span>
						</h2>
					</div>

					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
						{achievements.map((achievement, index) => (
							<div key={index} className="text-center group">
								<div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-3 text-white group-hover:scale-110 transition-transform duration-300">
									{achievement.icon}
								</div>
								<div className="text-2xl md:text-3xl font-bold mb-1">
									{achievement.number}
								</div>
								<div className="text-sm text-muted-foreground">
									{achievement.label}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Team Section */}
			<section className="py-12 bg-muted/30">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<Badge variant="secondary" className="mb-4">
							Our Team
						</Badge>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Meet Our
							<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								{" "}
								Expert Team
							</span>
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Our diverse team of specialists brings together years of experience
							and expertise.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
						{teamMembers.map((member, index) => (
							<Card
								key={index}
								className="text-center p-6 hover:shadow-lg transition-shadow group"
							>
								<div
									className={`w-20 h-20 bg-gradient-to-br ${member.gradient} rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold group-hover:scale-110 transition-transform duration-300`}
								>
									{member.avatar}
								</div>
								<h3 className="text-lg font-semibold mb-1">{member.name}</h3>
								<p className="text-primary font-medium mb-2">{member.role}</p>
								<p className="text-sm text-muted-foreground mb-2">
									{member.experience}
								</p>
								<p className="text-xs text-muted-foreground">
									{member.expertise}
								</p>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section className="py-12">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<Badge variant="secondary" className="mb-4">
							Why Choose Us
						</Badge>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Why Customers
							<span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
								{" "}
								Join Us
							</span>
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Discover what makes us the preferred choice for businesses looking to
							grow digitally.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
						{whyChooseUs.map((item, index) => (
							<Card key={index} className="p-6 hover:shadow-lg transition-shadow group">
								<div
									className={`w-12 h-12 bg-gradient-to-br ${item.gradient} rounded-lg flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}
								>
									{item.icon}
								</div>
								<h3 className="text-xl font-semibold mb-3">{item.title}</h3>
								<p className="text-muted-foreground">{item.description}</p>
							</Card>
						))}
					</div>
				</div>
			</section>

			{/* Client Showcase Section */}
			<section className="py-12 bg-muted/30">
				<div className="container mx-auto px-4">
					<div className="text-center mb-12">
						<Badge variant="secondary" className="mb-4">
							Client Success Stories
						</Badge>
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Our Clients
							<span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
								{" "}
								Love Us
							</span>
						</h2>
						<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
							Real results from real businesses. See how we've helped companies
							achieve their goals.
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
						{clientTestimonials.map((client, index) => (
							<div key={index} className="group relative">
								<div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
								<div className="relative bg-card p-6 rounded-lg border border-border/50 backdrop-blur-sm">
									<div className="flex items-center mb-4">
										<div
											className={`w-12 h-12 bg-gradient-to-br ${client.gradient} rounded-full flex items-center justify-center mr-3 text-white font-bold`}
										>
											{client.avatar}
										</div>
										<div>
											<h4 className="font-semibold">{client.company}</h4>
											<p className="text-sm text-muted-foreground">
												{client.industry}
											</p>
										</div>
									</div>

									<div className="mb-4">
										<div className="text-2xl font-bold text-primary mb-1">
											{client.result}
										</div>
									</div>

									<Quote className="w-6 h-6 text-muted-foreground mb-2" />
									<p className="text-muted-foreground italic">
										"{client.testimonial}"
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* CTA Section */}
			<section className="py-12">
				<div className="container mx-auto px-4">
					<div className="text-center max-w-3xl mx-auto">
						<h2 className="text-3xl md:text-4xl font-bold mb-4">
							Ready to Join Our
							<span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
								{" "}
								Success Stories?
							</span>
						</h2>
						<p className="text-lg text-muted-foreground mb-8">
							Let's work together to transform your digital presence and achieve
							remarkable growth.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center">
							<Link href="/contact">
								<Button size="lg" className="group">
									Start Your Journey
									<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
								</Button>
							</Link>
							<Link href="/ourservices">
								<Button variant="outline" size="lg">
									Explore Our Services
								</Button>
							</Link>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default About;