import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import { Hero } from '@/components/sections/hero';
import { Stats } from '@/components/sections/stats';
import { Services } from '@/components/sections/services';
import { WhyChooseUs } from '@/components/sections/why-choose-us';
import { BeforeAfterGallery } from '@/components/sections/before-after-gallery';
import { AiRecommender } from '@/components/sections/ai-recommender';
import WhatsAppButton from '@/components/ui/whatsapp-button';

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1">
        <Hero />
        <Stats />
        <Services />
        <WhyChooseUs />
        <BeforeAfterGallery />
        <AiRecommender />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
