
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export default function StatsSection() {
    const stats = [
        { label: 'Books Managed', value: '10,000+' },
        { label: 'Active Borrowers', value: '500+' },
        { label: 'Daily Transactions', value: '100+' },
        { label: 'User Satisfaction', value: '99%' },
    ];
    return (
        <section className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
                <Badge variant="outline" className="mb-4 border-primary/20">
                    Our Impact
                </Badge>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Trusted by Libraries Worldwide
                </h2>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                    <Card key={index} className="text-center bg-gradient-card border-primary/20 hover:shadow-elegant transition-all duration-300">
                        <CardContent className="pt-6">
                            <div className="text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
                                {stat.value}
                            </div>
                            <div className="text-muted-foreground">{stat.label}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    )
}
