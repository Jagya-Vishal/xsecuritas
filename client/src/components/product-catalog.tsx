import { useState } from "react";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { ProductCard } from "./product-card";
import type { Product } from "@shared/schema";

export function ProductCatalog({ products }: { products: Product[] }) {
  const [category, setCategory] = useState<string>("all");

  const filteredProducts = category === "all" 
    ? products 
    : products.filter(p => p.category === category);

  return (
    <section id="products" className="py-16">
      <h2 className="text-3xl font-bold text-center mb-8">Product Catalog</h2>
      
      <Tabs defaultValue="all" className="w-full" onValueChange={setCategory}>
        <div className="flex justify-center mb-8">
          <TabsList className="grid grid-cols-4 w-full max-w-2xl">
            <TabsTrigger value="all">All</TabsTrigger>
            <TabsTrigger value="jari">Jari Work</TabsTrigger>
            <TabsTrigger value="sequence">Sequence</TabsTrigger>
            <TabsTrigger value="all-over">All-Over</TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </TabsContent>

        {["jari", "sequence", "all-over"].map((cat) => (
          <TabsContent key={cat} value={cat} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </section>
  );
}
