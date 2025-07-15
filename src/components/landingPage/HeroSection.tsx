import { Button } from '../ui/button'
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'
import { Badge } from '../ui/badge'
import heroImage from '@/assets/hero-library.jpg';

export default function HeroSection() {
    return (
        <section className="relative overflow-hidden bg-gradient-hero">
            <div className="absolute inset-0 bg-black/20"></div>
            <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{ backgroundImage: `url(${heroImage})` }}
            ></div>

            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <Badge variant="secondary" className="mb-4 bg-white/20 text-white border-white/30">
                        Modern Library Management
                    </Badge>

                    <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                        Streamline Your Library
                        <span className="block bg-gradient-to-r from-purple-200 to-pink-200 bg-clip-text text-transparent">
                            Management System
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl mb-8 text-purple-100 max-w-2xl mx-auto animate-slide-up">
                        A comprehensive, modern solution for managing books, tracking borrowers, and optimizing library operations.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-purple-600 hover:bg-purple-50 shadow-glow transition-all duration-300 hover:scale-105"
                        >
                            <Link to="/books">
                                Explore Books
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>

                        <Button
                            asChild
                            size="lg"
                            className="bg-transparent text-white border border-white hover:bg-white/10 transition-all duration-300"
                        >
                            <Link to="/create-book">Add New Book</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}

