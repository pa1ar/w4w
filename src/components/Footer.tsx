import Link from "next/link";
import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-4">
          {/* Project Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-full bg-foreground" />
              <span className="text-lg font-semibold">Wheels4Wheels</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Mapping wheelchair accessibility through data-driven insights and
              community collaboration. Building a more inclusive world, one route at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link 
                  href="/docs" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Documentation
                </Link>
              </li>
              <li>
                <Link 
                  href="/docs/contribute" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contribute
                </Link>
              </li>
              <li>
                <Link 
                  href="/docs/Attributes_on_OpenStreetMaps" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  OpenStreetMap Guide
                </Link>
              </li>
              <li>
                <Link 
                  href="/docs/Surface_Smoothness_Analysis" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Research
                </Link>
              </li>
            </ul>
          </div>

          {/* Collaborators & Partners */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Collaborators & Partners</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link 
                  href="https://bolt.eu" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Bolt Scooter Service
                </Link>
              </li>
              <li>
                <Link 
                  href="https://serviceplan.com/en/house-of-communication/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Serviceplan HoC
                </Link>
              </li>
              <li>
                <Link 
                  href="https://1arlabs.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  1ar labs
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.geofabrik.de/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Geofabrik
                </Link>
              </li>
              <li>
                <Link 
                  href="https://www.openstreetmap.org/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  OpenStreetMap
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Support */}
          <div>
            <h3 className="text-sm font-semibold text-foreground">Legal & Support</h3>
            <ul className="mt-4 space-y-3">
              <li>
                <Link 
                  href="/privacy" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link 
                  href="/terms" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  href="/accessibility" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Accessibility Statement
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  href="https://github.com/pa1ar/w4w" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  GitHub Repository
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8" />

        {/* Bottom section */}
        <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Wheels4Wheels. All rights reserved.
          </p>
          <div className="flex items-center space-x-6">
            <p className="text-sm text-muted-foreground">
              Created with ❤️ for accessibility by{" "}
              <a
                href="https://www.serviceplan.com/en/hoc.html"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                Serviceplan HoC
              </a>
              {" & "}
              <a
                href="https://1ar.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
              >
                1ar labs
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
