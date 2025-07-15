
import booksFeature from '@/assets/books-feature.jpg';
import borrowFeature from '@/assets/borrow-feature.jpg';
import { Badge } from '@/components/ui/badge';
import { CheckCircle } from 'lucide-react';

export default function BenefitsSection() {
    const benefits = [
        'Modern and intuitive interface',
        'Real-time book availability',
        'Comprehensive borrowing tracking',
        'Responsive design for all devices',
        'Fast and reliable performance',
        'Easy to use for librarians',
    ];
    return (
        <section className="bg-gradient-secondary py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <Badge variant="outline" className="mb-4 border-primary/20">
                            Why Choose ByteBooks
                        </Badge>
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">
                            Built for Modern Libraries
                        </h2>
                        <p className="text-xl text-muted-foreground mb-8">
                            Our system is designed with librarians in mind, providing an intuitive interface
                            and powerful features that make library management effortless.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center space-x-3">
                                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                                    <span className="text-foreground">{benefit}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="grid grid-cols-2 gap-4">
                            <img
                                src={booksFeature}
                                alt="Books management"
                                className="rounded-lg shadow-card hover:shadow-elegant transition-shadow animate-float"
                            />
                            <img
                                src={borrowFeature}
                                alt="Borrowing system"
                                className="rounded-lg shadow-card hover:shadow-elegant transition-shadow animate-float"
                                style={{ animationDelay: '1s' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
