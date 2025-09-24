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
import { Section } from "@/components/ui/section";
import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyLead,
  TypographyMuted,
} from "@/components/ui/typography";
// import MapboxMap from '@/components/MapboxMap';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Section variant="hero">
        <Container className="text-center">
          <TypographyH1 className="mb-6 text-gray-900">
            Wheels4Wheels
          </TypographyH1>
          <TypographyLead className="mb-8 max-w-3xl mx-auto text-gray-700">
            Mapping wheelchair accessibility through data-driven insights and
            community collaboration. Join us in creating a more inclusive world,
            one route at a time.
          </TypographyLead>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="px-8">
              <Link href="/docs">Explore the Research</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="px-8">
              <Link href="/docs/Photo-Telemetry_File_Correlation">
                View Interactive Map
              </Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Interactive Map Section */}
      <Section variant="map">
        <Container>
          <TypographyH2 className="text-center mb-8 text-gray-900">
            Accessibility in Action
          </TypographyH2>
          <Card className="p-4">
            <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
              <div className="text-center">
                <TypographyH3 className="mb-2 text-gray-700">
                  Interactive Map
                </TypographyH3>
                <TypographyMuted className="text-gray-600">
                  Map temporarily disabled for build testing
                </TypographyMuted>
              </div>
            </div>
          </Card>
          <TypographyMuted className="text-center mt-4 max-w-2xl mx-auto text-gray-600">
            Our interactive map shows wheelchair accessibility data collected
            through photo-telemetry correlation and surface smoothness analysis.
          </TypographyMuted>
        </Container>
      </Section>

      {/* Research Highlights */}
      <Section variant="highlights">
        <Container>
          <TypographyH2 className="text-center mb-12 text-gray-900">
            Research Highlights
          </TypographyH2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>OpenStreetMap Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Leveraging OpenStreetMap data to identify and map wheelchair
                  accessibility attributes.
                </CardDescription>
                <Button
                  asChild
                  variant="link"
                  className="p-0 h-auto text-blue-600 font-semibold"
                >
                  <Link href="/docs/Attributes_on_OpenStreetMaps">
                    Learn More →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Surface Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Advanced analysis of surface smoothness to identify
                  wheelchair-friendly routes.
                </CardDescription>
                <Button
                  asChild
                  variant="link"
                  className="p-0 h-auto text-blue-600 font-semibold"
                >
                  <Link href="/docs/Surface_Smoothness_Analysis">
                    Learn More →
                  </Link>
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Photo-Telemetry Correlation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="mb-4">
                  Correlating visual data with telemetry to create comprehensive
                  accessibility maps.
                </CardDescription>
                <Button
                  asChild
                  variant="link"
                  className="p-0 h-auto text-blue-600 font-semibold"
                >
                  <Link href="/docs/Photo-Telemetry_File_Correlation">
                    Learn More →
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Call to Action */}
      <Section variant="cta">
        <Container className="text-center">
          <TypographyH2 className="mb-6 text-white">
            Join the Movement
          </TypographyH2>
          <TypographyLead className="mb-8 max-w-2xl mx-auto opacity-90 text-white">
            Help us build a comprehensive database of wheelchair accessibility
            information for communities worldwide.
          </TypographyLead>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="px-8 bg-white text-blue-600 hover:bg-gray-100"
            >
              <Link href="/docs/wheels4wheels_for_HoC">Get Involved</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="px-8 border-white text-white hover:bg-white hover:text-blue-600"
            >
              <Link href="/docs">Read Documentation</Link>
            </Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}
