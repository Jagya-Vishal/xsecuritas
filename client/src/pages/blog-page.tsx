import { Layout } from "@/components/layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const blogPosts = [
  {
    title: "Latest Trends in Textile Printing 2024",
    date: "February 15, 2024",
    excerpt: "Discover the emerging trends in textile printing that are shaping the industry this year.",
  },
  {
    title: "Understanding Different Printing Techniques",
    date: "February 10, 2024",
    excerpt: "A comprehensive guide to various textile printing techniques and their applications.",
  },
  {
    title: "Sustainable Practices in Textile Printing",
    date: "February 5, 2024",
    excerpt: "How we're incorporating eco-friendly practices in our textile printing processes.",
  },
];

export default function BlogPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">Blog</h1>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{post.title}</CardTitle>
                <p className="text-sm text-muted-foreground">{post.date}</p>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{post.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
}
