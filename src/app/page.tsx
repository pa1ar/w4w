import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyLead,
  TypographyMuted,
} from "@/components/ui/typography";
import MapboxMap from '@/components/MapboxMap';
import Footer from '@/components/Footer';
import { HomeLayout } from "fumadocs-ui/layouts/home";
import { baseOptions } from "@/lib/layout.shared";

export default function HomePage() {
  return (
    <HomeLayout {...baseOptions()}>
      <main className="min-h-screen">
      {/* Hero Section with Fumadocs-style gradient */}
      <section className="relative py-24 lg:py-32">
        <div className="absolute inset-0 fumadocs-gradient opacity-20" />
        <Container className="relative text-center">
          <TypographyH1 className="mb-6 text-foreground text-4xl lg:text-6xl font-bold">
            Wheels4Wheels
          </TypographyH1>
          <TypographyLead className="mb-8 max-w-3xl mx-auto text-muted-foreground text-lg">
            Mapping wheelchair accessibility through data-driven insights and
            community collaboration.
          </TypographyLead>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/docs">How it works</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#interactive-map">
                Interactive Map
              </Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Interactive Map Section - Fumadocs-style container */}
      <section id="interactive-map" className="py-16 lg:py-24">
        <Container>
          <div className="relative">
            <div className="absolute inset-0 bg-card rounded-2xl shadow-lg" />
            <div className="relative p-8">
              <TypographyH2 className="text-center mb-8 text-foreground">
                Accessibility in Action
              </TypographyH2>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <MapboxMap className="h-[500px] lg:h-[600px]" />
              </div>
              <TypographyMuted className="text-center mt-6 max-w-2xl mx-auto">
                Our interactive map shows wheelchair accessibility data collected
                through photo-telemetry correlation and surface smoothness analysis.
              </TypographyMuted>
            </div>
          </div>
        </Container>
      </section>

      {/* Research Highlights - Minimal design */}
      <section className="py-16 lg:py-24">
        <Container>
          <TypographyH2 className="text-center mb-12 text-foreground">
            Research Highlights
          </TypographyH2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">OpenStreetMap Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Leveraging OpenStreetMap data to identify and map wheelchair
                  accessibility attributes.
                </CardDescription>
                <Button
                  asChild
                  variant="link"
                  className="p-0 h-auto font-medium"
                >
                  <Link href="/docs/Attributes_on_OpenStreetMaps">
                    Learn More →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Surface Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Advanced analysis of surface smoothness to identify
                  wheelchair-friendly routes.
                </CardDescription>
                <Button
                  asChild
                  variant="link"
                  className="p-0 h-auto font-medium"
                >
                  <Link href="/docs/Surface_Smoothness_Analysis">
                    Learn More →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm">
              <CardHeader>
                <CardTitle className="text-lg">Photo-Telemetry Correlation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Correlating visual data with telemetry to create comprehensive
                  accessibility maps.
                </CardDescription>
                <Button
                  asChild
                  variant="link"
                  className="p-0 h-auto font-medium"
                >
                  <Link href="/docs/Photo-Telemetry_File_Correlation">
                    Learn More →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      {/* Call to Action - Minimal design */}
      <section className="py-16 lg:py-24">
        <Container className="text-center">
          <TypographyH2 className="mb-6 text-foreground">
            Join the Movement
          </TypographyH2>
          <TypographyLead className="mb-8 max-w-2xl mx-auto text-muted-foreground">
            Help us build a comprehensive database of wheelchair accessibility
            information for communities worldwide.
          </TypographyLead>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/docs/contribute">Get Involved</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/docs">Read Documentation</Link>
            </Button>
          </div>
        </Container>
      </section>

      {/* Footer */}
      <Footer />
      </main>
    </HomeLayout>
  );
}
