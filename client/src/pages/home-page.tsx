import { useQuery } from "@tanstack/react-query";
import { ProductCard } from "@/components/product-card";
import { HeroSection } from "@/components/hero-section";
import { Layout } from "@/components/layout";
import type { Product } from "@shared/schema";

export default function HomePage() {
  const { data: products } = useQuery<Product[]>({
    queryKey: ["/api/products"],
  });

  return (
    <Layout>
      <HeroSection />
      
      <section id="products" className="py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
