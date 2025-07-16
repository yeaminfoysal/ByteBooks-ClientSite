
import { BookOpen, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router';
import { ModeToggle } from '../mode-toggle';

export function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const navigation = [
        { name: 'Home', href: '/' },
        { name: 'All Books', href: '/books' },
        { name: 'Add Book', href: '/create-book' },
        { name: 'Borrow Summary', href: '/borrow-summary' },
    ];

    const isActive = (path: string) => location.pathname === path;

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-gradient-card backdrop-blur-sm border-primary/20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                        <div className="p-2 bg-gradient-primary rounded-lg shadow-glow">
                            <BookOpen className="h-6 w-6 text-white" />
                        </div>
                        <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                            ByteBooks
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={cn(
                                    'px-3 py-2 text-sm font-medium transition-all duration-200 hover:scale-105',
                                    isActive(item.href)
                                        ? 'text-primary bg-primary/10 rounded-lg shadow-sm'
                                        : 'text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg'
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <ModeToggle />
                        <Button asChild className="bg-gradient-primary hover:shadow-glow transition-all duration-300">
                            <Link to="/create-book">Add Book</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center space-x-2">
                        <ModeToggle />
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="hover:bg-primary/10"
                        >
                            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden animate-slide-up">
                        <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-card rounded-lg border border-primary/20 mt-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={cn(
                                        'block px-3 py-2 text-base font-medium transition-all duration-200',
                                        isActive(item.href)
                                            ? 'text-primary bg-primary/10 rounded-lg'
                                            : 'text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg'
                                    )}
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-2">
                                <Button asChild className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300">
                                    <Link to="/create-book" onClick={() => setIsMenuOpen(false)}>
                                        Add Book
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
}