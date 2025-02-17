import { Button } from "@/components/ui/button";
import { Link } from "wouter";

export function HeroSection() {
  return (
    <div className="relative py-24 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Traditional Textile Printing
            <span className="block text-primary">for Modern Business</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Premium textile printing services including jari, bits, sequence, and garment work.
            Trusted by wholesale buyers across India and international markets.
          </p>
          <div className="mt-10 flex items-center gap-x-6">
            <Link href="/auth">
              <Button size="lg">
                Register Now
              </Button>
            </Link>
            <a href="#products" className="text-sm font-semibold leading-6">
              View Products <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
