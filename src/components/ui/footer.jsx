"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Instagram, Twitter, Linkedin, Facebook, Youtube, Mail, Phone, MapPin, ArrowUp } from "lucide-react"
import Link from "next/link"

export function AnimatedFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-background border-t">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="font-bold text-xl">DigitalAgency</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Transforming businesses through innovative digital marketing strategies. 
              We help brands grow their online presence and achieve remarkable results.
            </p>
            <div className="flex space-x-3">
              <Button variant="ghost" size="sm" className="hover:scale-110 transition-transform">
                <Instagram className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:scale-110 transition-transform">
                <Twitter className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:scale-110 transition-transform">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:scale-110 transition-transform">
                <Facebook className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="sm" className="hover:scale-110 transition-transform">
                <Youtube className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <div className="space-y-2">
              {[
                "Social Media Marketing",
                "SEO Optimization", 
                "Digital Advertising",
                "Website Development",
                "Analytics & Insights",
                "Mobile Marketing"
              ].map((service, index) => (
                <Link 
                  key={index}
                  href="#" 
                  className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
                >
                  {service}
                </Link>
              ))}
            </div>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Company</h3>
            <div className="space-y-2">
              {[
                "About Us",
                "Our Team",
                "Careers",
                "Case Studies",
                "Blog",
                "Contact"
              ].map((item, index) => (
                <Link 
                  key={index}
                  href="#" 
                  className="block text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 transform duration-200"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 group">
                <Mail className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-muted-foreground text-sm">hello@digitalagency.com</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <Phone className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-muted-foreground text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3 group">
                <MapPin className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-muted-foreground text-sm">123 Marketing St, Digital City</span>
              </div>
            </div>
            
            {/* Newsletter */}
            <div className="pt-4">
              <h4 className="font-medium mb-2">Newsletter</h4>
              <div className="flex space-x-2">
                <input 
                  type="email" 
                  placeholder="Enter email" 
                  className="flex-1 px-3 py-2 text-sm border rounded-lg bg-background"
                />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>© 2024 DigitalAgency. All rights reserved.</span>
              <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
              <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
            </div>
            
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={scrollToTop}
              className="group"
            >
              <ArrowUp className="w-4 h-4 mr-2 group-hover:-translate-y-1 transition-transform" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
