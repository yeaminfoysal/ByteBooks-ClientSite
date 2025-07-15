
import { Button } from '../ui/button'
import { Link } from 'react-router'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
    return (
        <section className="bg-gradient-primary py-20">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-3xl mx-auto text-white">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6">
                        Ready to Transform Your Library?
                    </h2>
                    <p className="text-xl text-purple-100 mb-8">
                        Join thousands of libraries already using our modern management system.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-white text-purple-600 hover:bg-purple-50 shadow-glow transition-all duration-300 hover:scale-105"
                        >
                            <Link to="/books">
                                Get Started
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="border-white text-white hover:bg-white/10"
                        >
                            <Link to="/borrow-summary">View Demo</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
