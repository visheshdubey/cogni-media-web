import React from "react";
import Link from "next/link";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    const services = [
        { name: "Digital Marketing", href: "/services/digital-marketing" },
        { name: "Web Development", href: "/services/web-development" },
        { name: "Content Creation", href: "/services/content-creation" },
        { name: "SEO Optimization", href: "/services/seo" },
        { name: "Social Media Management", href: "/services/social-media" },
        { name: "Brand Strategy", href: "/services/brand-strategy" },
    ];

    const industries = [
        { name: "Healthcare", href: "/industries/healthcare" },
        { name: "Technology", href: "/industries/technology" },
        { name: "Finance", href: "/industries/finance" },
        { name: "Education", href: "/industries/education" },
        { name: "Retail", href: "/industries/retail" },
        { name: "Manufacturing", href: "/industries/manufacturing" },
    ];

    const siteLinks = [
        { name: "Home", href: "/" },
        { name: "About Us", href: "/about" },
        { name: "Services", href: "/services" },
        { name: "Industries", href: "/industries" },
        { name: "Contact", href: "/contact" },
        { name: "Careers", href: "/careers" },
    ];

    const socialLinks = [
        { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
        { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
        { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
        { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
        { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
    ];

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Logo and Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex gap-2 items-center mb-6">
                            <div className="size-6 rounded-full bg-blue-400"></div>
                            <h2 className="text-2xl font-bold font-bricolage">CogniMedia</h2>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            Empowering businesses with innovative digital solutions. We transform ideas into impactful digital experiences.
                        </p>

                        {/* Contact Info */}
                        <div className="space-y-3 mb-6">
                            <div className="flex items-center gap-3 text-gray-300">
                                <Mail className="size-4 text-blue-400" />
                                <span className="text-sm">hello@cognimedia.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Phone className="size-4 text-blue-400" />
                                <span className="text-sm">+1 (555) 123-4567</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <MapPin className="size-4 text-blue-400" />
                                <span className="text-sm">123 Digital Street, Tech City, TC 12345</span>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="flex gap-4">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    className="size-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 transition-colors duration-300"
                                    aria-label={social.label}
                                >
                                    <social.icon className="size-5" />
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold mb-6 text-white">Services</h3>
                        <div className="grid grid-cols-1 gap-3">
                            {services.map((service) => (
                                <Link key={service.name} href={service.href} className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                                    {service.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Industries */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold mb-6 text-white">Industries</h3>
                        <div className="grid grid-cols-1 gap-3">
                            {industries.map((industry) => (
                                <Link key={industry.name} href={industry.href} className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                                    {industry.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Site Links */}
                    <div className="lg:col-span-1">
                        <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
                        <div className="grid grid-cols-1 gap-3">
                            {siteLinks.map((link) => (
                                <Link key={link.name} href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors duration-300 text-sm">
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 py-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-gray-400 text-sm">© 2024 CogniMedia. All rights reserved.</p>
                        <div className="flex gap-6 text-sm">
                            <Link href="/privacy" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                Privacy Policy
                            </Link>
                            <Link href="/terms" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                Terms of Service
                            </Link>
                            <Link href="/cookies" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                Cookie Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
