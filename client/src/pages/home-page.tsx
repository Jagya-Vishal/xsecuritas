import { useQuery } from "@tanstack/react-query";
import { ProductCatalog } from "@/components/product-catalog";
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
      {products && <ProductCatalog products={products} />}
    </Layout>
  );
}