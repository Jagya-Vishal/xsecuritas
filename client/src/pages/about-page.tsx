import { Layout } from "@/components/layout";

export default function AboutPage() {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-8">About Us</h1>
        
        <div className="prose prose-lg max-w-none">
          <p className="text-lg mb-6">
            Welcome to Shree Ganpati Handprint, a leading B2B textile printing service provider based in Surat, Gujarat.
            With decades of experience in traditional textile printing, we bring artisanal expertise to modern business needs.
          </p>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Heritage</h2>
          <p>
            Founded on the principles of quality and craftsmanship, we specialize in various printing techniques including:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Traditional Jari Work</li>
            <li>Sequence Work</li>
            <li>All-Over Printing</li>
            <li>Custom Design Solutions</li>
          </ul>

          <h2 className="text-2xl font-semibold mt-8 mb-4">Our Commitment</h2>
          <p>
            We are committed to providing wholesale buyers with:
          </p>
          <ul className="list-disc pl-6 mt-4 space-y-2">
            <li>Premium Quality Printing</li>
            <li>Competitive Wholesale Pricing</li>
            <li>Timely Delivery</li>
            <li>Customization Options</li>
            <li>Professional Support</li>
          </ul>
        </div>
      </div>
    </Layout>
  );
}
