import {
    BookOpen,
    Users,
    // Zap,
    // Shield,
    Search,
    BarChart3,
} from 'lucide-react';
import { Badge } from '../ui/badge';
import booksFeature from '@/assets/books-feature.jpg';
import borrowFeature from '@/assets/borrow-feature.jpg';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';

export default function FeaturesSection() {
    const features = [
        {
            icon: BookOpen,
            title: 'Book Management',
            description: 'Complete CRUD operations for managing your library collection with ease.',
            image: booksFeature,
        },
        {
            icon: Users,
            title: 'Borrowing System',
            description: 'Simple and efficient book borrowing with due date tracking.',
            image: borrowFeature,
        },
        {
            icon: Search,
            title: 'Smart Search',
            description: 'Find books instantly with intelligent search and filtering.',
            image: booksFeature,
        },
        {
            icon: BarChart3,
            title: 'Analytics',
            description: 'Track borrowing patterns and library usage statistics.',
            image: borrowFeature,
        },
    ];
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 border-primary/20">
                    Features
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Everything You Need to Manage Your Library
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                    From book cataloging to borrower management, our system provides all the tools you need.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {features.map((feature, index) => (
                    <Card
                        key={index}
                        className="group hover:shadow-elegant transition-all duration-300 hover:scale-105 bg-gradient-card border-primary/20"
                    >
                        <CardHeader className="pb-4">
                            <div className="relative mb-4">
                                <img
                                    src={feature.image}
                                    alt={feature.title}
                                    className="w-full h-48 object-cover rounded-lg opacity-80 group-hover:opacity-100 transition-opacity"
                                />
                                <div className="absolute -bottom-4 left-4 p-3 bg-gradient-primary rounded-lg shadow-glow">
                                    <feature.icon className="h-6 w-6 text-white" />
                                </div>
                            </div>
                            <CardTitle className="text-lg">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">{feature.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
