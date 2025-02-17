import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/hooks/use-auth";
import { Link } from "wouter";
import type { Product } from "@shared/schema";

export function ProductCard({ product }: { product: Product }) {
  const { user } = useAuth();

  return (
    <Card className="overflow-hidden">
      <CardHeader className="relative aspect-square">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </CardHeader>
      <CardContent className="p-6">
        <CardTitle>{product.name}</CardTitle>
        <CardDescription className="mt-2">
          {product.description}
        </CardDescription>
        {user ? (
          <div className="mt-4 flex gap-2">
            <Button>Request Sample</Button>
            <Button variant="outline">Place Order</Button>
          </div>
        ) : (
          <Link href="/auth">
            <Button className="mt-4 w-full">
              Register to Order
            </Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
