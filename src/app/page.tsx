'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/beauty/Navbar';
import Hero from '@/components/beauty/Hero';
import Marquee from '@/components/beauty/Marquee';
import About from '@/components/beauty/About';
import Services from '@/components/beauty/Services';
import Gallery from '@/components/beauty/Gallery';
import Pricing from '@/components/beauty/Pricing';
import Testimonials from '@/components/beauty/Testimonials';
import Booking from '@/components/beauty/Booking';
import Contact from '@/components/beauty/Contact';
import Footer from '@/components/beauty/Footer';
import FloatingDecorations from '@/components/beauty/FloatingDecorations';
import PromoBanner from '@/components/beauty/PromoBanner';
import ImageShowcase from '@/components/beauty/ImageShowcase';

export default function Home() {
  return (
    <AnimatePresence>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
        <FloatingDecorations />
        <Navbar />
        <Hero />
        <Marquee />

        {/* Promo 1: Yeni Müşteri */}
        <PromoBanner
          variant="rose"
          icon="gift"
          title="İlk Ziyaretinize %20 İndirim!"
          subtitle="Yeni müşterilerimize özel hoş geldin fırsatı."
          cta="Hemen Faydalan"
        />

        {/* Nail Art Görsel Vitrin */}
        <ImageShowcase
          images={[
            '/images/beauty/nail-art-blue.jpg',
            '/images/beauty/nail-art-pink.jpg',
          ]}
          title="Nail Art Tasarımları"
          subtitle="Sanatsal ve özgün tırnak tasarımları"
        />

        <About />

        {/* Promo 2: Kampanya */}
        <PromoBanner
          variant="gold"
          icon="percent"
          title="Bahar Kampanyası Başladı"
          subtitle="Saç boyama + kesim birlikte sadece 280₺"
          cta="Kampanyayı Gör"
        />

        <Services />

        {/* Promo 3: VIP */}
        <PromoBanner
          variant="plum"
          icon="star"
          title="VIP Üyelik Avantajları"
          subtitle="Her ay özel indirimler ve öncelikli randevu."
          cta="Üye Ol"
        />

        {/* Spa & Cilt Bakımı Görselleri */}
        <ImageShowcase
          images={[
            '/images/beauty/gallery-spa.jpg',
            '/images/beauty/gallery-makeup.jpg',
          ]}
          title="Spa & Güzellik"
          subtitle="Profesyonel cilt bakımı ve spa deneyimi"
          reversed
        />

        <Gallery />

        {/* Promo 4: Spa */}
        <PromoBanner
          variant="gradient"
          icon="sparkle"
          title="Spa & Wellness Paketi"
          subtitle="Full spa deneyimi + çay ikramı + 1 saat masaj."
          cta="Rezervasyon Yap"
        />

        <Pricing />
        <Testimonials />

        {/* Promo 5: Arkadaş */}
        <PromoBanner
          variant="rose"
          icon="gift"
          title="Arkadaşını Getir, Kazan!"
          subtitle="Her arkadaş daveti için 100₺ indirim kazanın."
          cta="Davet Et"
        />

        {/* Merkezimiz Görseli */}
        <ImageShowcase
          images={[
            '/images/beauty/interior-reception.jpg',
            '/images/beauty/gallery-hair.jpg',
          ]}
          title="Merkezimiz"
          subtitle="Lüks ve konforlu ortamımızda kendinizi özel hissedin"
        />

        <Booking />

        {/* Promo 6: Son */}
        <PromoBanner
          variant="gold"
          icon="clock"
          title="Hafta Sonu Özel Saatleri"
          subtitle="Cumartesi 10:00 - 18:00 arası ek randevu."
        />

        <Contact />
        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
