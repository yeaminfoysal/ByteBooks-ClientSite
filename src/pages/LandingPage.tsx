import HeroSection from '@/components/landingPage/HeroSection';
import FeaturesSection from '@/components/landingPage/FeaturesSection';
import BenefitsSection from '@/components/landingPage/BenefitsSection';
import StatsSection from '@/components/landingPage/StatsSection';
import CTASection from '@/components/landingPage/CTASection';
import Books from '@/components/landingPage/Books';

export default function Home() {


  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      <Books/>
      {/* Benefits Section */}
      <BenefitsSection />

      {/* Stats Section */}
      <StatsSection />

      {/* CTA Section */}
      <CTASection />
    </div>
  );
}
// </>
// )
// }
