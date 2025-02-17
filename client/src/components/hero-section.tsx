import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function HeroSection() {
  return (
    <div 
      className="relative min-h-[600px] flex items-center bg-no-repeat bg-cover bg-center" 
      style={{ 
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("/images/textile-bg.jpg")'
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white drop-shadow-2xl">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight sm:text-6xl drop-shadow-lg">
            Traditional Textile Printing
            <span className="block text-primary font-extrabold mt-2">for Modern Business</span>
          </h1>
          <p className="mt-6 text-base md:text-lg leading-8 text-gray-100 drop-shadow-lg">
            Premium textile printing services including jari, bits, sequence, and garment work.
            Trusted by wholesale buyers across India and international markets.
          </p>
          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 sm:gap-x-6">
            <Link href="/auth">
              <Button size="lg" className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 dark:text-white shadow-lg">
                Get Started
              </Button>
            </Link>
            <a 
              href="#products" 
              className="flex items-center justify-center text-sm font-semibold leading-6 text-white hover:text-primary transition-colors drop-shadow-lg"
            >
              View Products <span aria-hidden="true" className="ml-2">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}