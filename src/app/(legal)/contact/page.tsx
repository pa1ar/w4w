import { Container } from "@/components/ui/container";
import { TypographyH1, TypographyH2, TypographyLead, TypographyMuted } from "@/components/ui/typography";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Footer from '@/components/Footer';

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <div className="py-16">
        <Container>
        <div className="mx-auto max-w-4xl">
          <TypographyH1 className="mb-4">Contact Us</TypographyH1>
          <TypographyLead className="mb-12">
            Get in touch with the Wheels4Wheels team. We'd love to hear from you!
          </TypographyLead>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Information */}
            <div className="space-y-6">
              <TypographyH2>Get in Touch</TypographyH2>
              <p className="text-muted-foreground">
                Have questions about our research? Want to contribute to the project? 
                Or need help with accessibility mapping? We're here to help!
              </p>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">GitHub Issues</CardTitle>
                    <CardDescription>
                      Report bugs, request features, or ask technical questions
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <a 
                        href="https://github.com/pa1ar/w4w/issues" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Open an Issue
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Research Collaboration</CardTitle>
                    <CardDescription>
                      Interested in collaborating on accessibility research?
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <a 
                        href="mailto:research@wheels4wheels.org" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Email Research Team
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Community Support</CardTitle>
                    <CardDescription>
                      Join our community discussions and get help from other contributors
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <a 
                        href="https://github.com/pa1ar/w4w/discussions" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Join Discussions
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Project Partners */}
            <div className="space-y-6">
              <TypographyH2>Our Partners</TypographyH2>
              <p className="text-muted-foreground">
                Wheels4Wheels is made possible through collaboration with leading organizations 
                in accessibility and open data.
              </p>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Serviceplan House of Communication</CardTitle>
                    <CardDescription>
                      Strategic partner for accessibility research and community outreach
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <a 
                        href="https://serviceplan.com/en/house-of-communication/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">1ar labs</CardTitle>
                    <CardDescription>
                      Technical development and data analysis expertise
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <a 
                        href="https://1arlabs.com" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </a>
                    </Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Bolt Mobility</CardTitle>
                    <CardDescription>
                      Data partnership for mobility and accessibility insights
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <a 
                        href="https://bolt.eu" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        Visit Website
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <TypographyMuted>
              We typically respond to inquiries within 2-3 business days. 
              For urgent accessibility issues, please use our GitHub issues for faster response.
            </TypographyMuted>
          </div>
        </div>
      </Container>
      </div>
      <Footer />
    </main>
  );
}
