import { Container } from "@/components/ui/container";
import { TypographyH1, TypographyH2, TypographyLead, TypographyMuted } from "@/components/ui/typography";
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <main className="min-h-screen">
      <div className="py-16">
        <Container>
        <div className="mx-auto max-w-3xl">
          <TypographyH1 className="mb-4">Terms of Service</TypographyH1>
          <TypographyLead className="mb-8">
            Terms and conditions for using the Wheels4Wheels platform and contributing to our research.
          </TypographyLead>

          <div className="prose prose-gray max-w-none">
            <TypographyH2>Acceptance of Terms</TypographyH2>
            <p className="text-muted-foreground">
              By accessing and using Wheels4Wheels, you accept and agree to be bound by the terms 
              and provision of this agreement.
            </p>

            <TypographyH2>Use License</TypographyH2>
            <p className="text-muted-foreground">
              Permission is granted to temporarily use Wheels4Wheels for personal, non-commercial 
              transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="text-muted-foreground">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
            </ul>

            <TypographyH2>Contributions</TypographyH2>
            <p className="text-muted-foreground">
              By contributing data, code, or other materials to Wheels4Wheels, you grant us a 
              non-exclusive, royalty-free license to use, modify, and distribute your contributions 
              for the purpose of improving accessibility mapping.
            </p>

            <TypographyH2>Open Source</TypographyH2>
            <p className="text-muted-foreground">
              Wheels4Wheels is built on open source principles. Our code is available on GitHub 
              and contributions are welcome. All accessibility data is shared with the OpenStreetMap 
              community under open data licenses.
            </p>

            <TypographyH2>Disclaimer</TypographyH2>
            <p className="text-muted-foreground">
              The materials on Wheels4Wheels are provided on an 'as is' basis. Wheels4Wheels makes 
              no warranties, expressed or implied, and hereby disclaims and negates all other warranties 
              including without limitation, implied warranties or conditions of merchantability, fitness 
              for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <TypographyH2>Contact Information</TypographyH2>
            <p className="text-muted-foreground">
              Questions about the Terms of Service should be sent to us via our 
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
