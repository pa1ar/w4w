import { Container } from "@/components/ui/container";
import { TypographyH1, TypographyH2, TypographyLead, TypographyMuted } from "@/components/ui/typography";
import Footer from '@/components/Footer';

export default function AccessibilityPage() {
  return (
    <main className="min-h-screen">
      <div className="py-16">
        <Container>
        <div className="mx-auto max-w-3xl">
          <TypographyH1 className="mb-4">Accessibility Statement</TypographyH1>
          <TypographyLead className="mb-8">
            Our commitment to digital accessibility and inclusive design.
          </TypographyLead>

          <div className="prose prose-gray max-w-none">
            <TypographyH2>Our Commitment</TypographyH2>
            <p className="text-muted-foreground">
              Wheels4Wheels is committed to ensuring digital accessibility for people with disabilities. 
              We are continually improving the user experience for everyone, and applying the relevant 
              accessibility standards to achieve these goals.
            </p>

            <TypographyH2>Accessibility Standards</TypographyH2>
            <p className="text-muted-foreground">
              We aim to conform to the Web Content Accessibility Guidelines (WCAG) 2.1 level AA. 
              These guidelines help make web content more accessible to people with disabilities, 
              and user-friendly for everyone.
            </p>

            <TypographyH2>Accessibility Features</TypographyH2>
            <ul className="text-muted-foreground">
              <li>Keyboard navigation support</li>
              <li>Screen reader compatibility</li>
              <li>High contrast mode support</li>
              <li>Alternative text for images</li>
              <li>Semantic HTML structure</li>
              <li>Focus indicators for interactive elements</li>
            </ul>

            <TypographyH2>Feedback</TypographyH2>
            <p className="text-muted-foreground">
              We welcome your feedback on the accessibility of Wheels4Wheels. Please let us know if you 
              encounter accessibility barriers. Contact us through our 
              <a href="/contact" className="text-foreground hover:underline"> contact page</a>.
            </p>

            <TypographyH2>Assistive Technology</TypographyH2>
            <p className="text-muted-foreground">
              We support users with various assistive technologies including screen readers, 
              voice recognition software, and alternative input devices. Our interactive map 
              is designed to be accessible through keyboard navigation and screen reader support.
            </p>

            <TypographyH2>Continuous Improvement</TypographyH2>
            <p className="text-muted-foreground">
              Accessibility is an ongoing effort. We regularly review and test our website to 
              ensure it remains accessible as we add new features and content.
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
