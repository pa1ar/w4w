import { Container } from "@/components/ui/container";
import { TypographyH1, TypographyH2, TypographyLead, TypographyMuted } from "@/components/ui/typography";
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <main className="min-h-screen">
      <div className="py-16">
        <Container>
        <div className="mx-auto max-w-3xl">
          <TypographyH1 className="mb-4">Privacy Policy</TypographyH1>
          <TypographyLead className="mb-8">
            How we collect, use, and protect your information in the Wheels4Wheels project.
          </TypographyLead>

          <div className="prose prose-gray max-w-none">
            <TypographyH2>Information We Collect</TypographyH2>
            <p className="text-muted-foreground">
              We collect information to provide better accessibility mapping services. This includes:
            </p>
            <ul className="text-muted-foreground">
              <li>Public accessibility data contributed to OpenStreetMap</li>
              <li>Anonymous usage analytics to improve our services</li>
              <li>Contact information when you reach out to us</li>
            </ul>

            <TypographyH2>How We Use Your Information</TypographyH2>
            <p className="text-muted-foreground">
              We use collected information to:
            </p>
            <ul className="text-muted-foreground">
              <li>Improve accessibility mapping accuracy</li>
              <li>Develop better tools for the community</li>
              <li>Respond to your inquiries and feedback</li>
              <li>Analyze usage patterns to enhance user experience</li>
            </ul>

            <TypographyH2>Data Sharing</TypographyH2>
            <p className="text-muted-foreground">
              We share accessibility data with the OpenStreetMap community and other researchers 
              working on accessibility initiatives. All data sharing follows open data principles 
              and contributes to the public good.
            </p>

            <TypographyH2>Contact Us</TypographyH2>
            <p className="text-muted-foreground">
              If you have questions about this privacy policy, please contact us through our 
              <a href="/contact" className="text-foreground hover:underline"> contact page</a>.
            </p>

            <TypographyMuted className="mt-8">
              Last updated: {new Date().toLocaleDateString()}
            </TypographyMuted>
          </div>
        </div>
      </Container>
      </div>
      <Footer />
    </main>
  );
}
