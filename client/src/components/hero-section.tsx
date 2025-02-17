import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function HeroSection() {
  return (
    <div 
      className="relative min-h-[600px] flex items-center bg-no-repeat bg-cover bg-center" 
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/images/textile-bg.jpg")'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Traditional Textile Printing
            <span className="block text-primary">for Modern Business</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-200">
            Premium textile printing services including jari, bits, sequence, and garment work.
            Trusted by wholesale buyers across India and international markets.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link href="/auth">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Register to View
              </Button>
            </Link>
            <a href="#products" className="text-sm font-semibold leading-6 text-white hover:text-primary transition-colors">
              View Products <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}