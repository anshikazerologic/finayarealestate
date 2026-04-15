import React, { useState, useEffect } from 'react';
import { ArrowRight, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';
import { Link, useLocation } from 'react-router-dom';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(location.pathname);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setActiveLink(location.pathname);
    }, [location]);

    const navLinks = [
        { name: 'Buy', href: '/' },
        { name: 'Sell', href: '/sell' },
        { name: 'Learn', href: '/learn' },
        { name: 'Insure', href: '/insure' },
        { name: 'Get Loan', href: '/getloan' },
    ];

    return (
        <nav
            className={cn(
                'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-5 md:px-10 lg:px-20 py-2',
                isScrolled || location.pathname === '/learn' ? 'bg-teal-700  ' : 'bg-teal-700/20'
            )}
        >
            <div className=" mx-auto flex items-center justify-between">

                <Link
                    to="/"
                    className="flex items-center "
                    onClick={() => setActiveLink('/')}
                >
                    <img
                        src="/assets/finaya_logo.png"
                        alt="finaya"
                        className="h-11 w-auto object-contain"
                    />
                </Link>

               
                <div className="hidden md:flex items-center gap-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            onClick={() => setActiveLink(link.href)}
                            className={cn(
                                "text-sm font-medium font-inter transition-all  px-4 lg:px-8 py-1 hover:opacity-70",
                                isScrolled || location.pathname === '/learn' ? "text-white" : "text-white",
                                activeLink === link.href && " outline-1  outline-offset-1 rounded-full",
                                activeLink === link.href && (isScrolled || location.pathname === '/learn' ? "outline-white" : "outline-white")
                            )}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="hidden md:block">
                    <button className={cn(
                        "flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium  transition-all",
                        isScrolled || location.pathname === '/learn'
                            ? "bg-white text-teal-700  "
                            : "bg-white text-teal-700 outline-1 outline-teal-700 hover:bg-gray-100"
                    )}>
                        Contact Us
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <X className={isScrolled || location.pathname === '/learn' ? "text-white" : "text-white"} />
                    ) : (
                        <Menu className={isScrolled || location.pathname === '/learn' ? "text-white" : "text-white"} />
                    )}
                </button>
            </div>


            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white shadow-xl p-6 flex flex-col gap-4 md:hidden animate-in fade-in slide-in-from-top-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={link.href}
                            className={cn(
                                "text-lg font-medium text-gray-800 border-b border-gray-100 pb-2",
                                activeLink === link.href && "text-brand"
                            )}
                            onClick={() => {
                                setActiveLink(link.href);
                                setIsMobileMenuOpen(false);
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button className="flex items-center justify-center  bg-teal-700 gap-2 px-6 py-3 rounded-full bg-brand text-white text-sm font-medium mt-4">
                        Contact Us
                        <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            )}
        </nav>
    );
}
