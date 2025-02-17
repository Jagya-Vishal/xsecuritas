import { Link } from "wouter";

export function Footer() {
  return (
    <footer className="border-t bg-[#F5F6F2] dark:bg-primary/5 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4 text-primary">Shree Ganpati Handprint</h3>
            <p className="text-sm text-muted-foreground">
              Premium textile printing services for wholesale buyers across India and international markets.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary/90">Our Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Jari Work</li>
              <li>Sequence Work</li>
              <li>All-Over Print</li>
              <li>Custom Orders</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary/90">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/auth">Get Started</Link></li>
              <li><a href="#products">Products</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-primary/90">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Phone: +91 99999 99999</li>
              <li>Email: info@shreeganpatihandprint.com</li>
              <li>Address: Textile Market, Surat, Gujarat</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary/10 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Shree Ganpati Handprint. All rights reserved.
        </div>
      </div>
    </footer>
  );
}