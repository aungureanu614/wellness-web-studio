import Image from 'next/image';
import { SiInstagram, SiLinkedin } from 'react-icons/si';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-12">
        {/* Top row */}
        <div className="grid gap-10 md:grid-cols-2 md:items-start">
          {/* Brand (left) */}
          <div className="flex items-center gap-3">
            <Image
              src="/wellness_web_studio_logo.png"
              alt="Wellness Web Studio Logo"
              width={40}
              height={40}
              className="h-10 w-10"
              priority
            />
            <p className="text-base font-semibold leading-none">
              Wellness Web Studio
            </p>
          </div>

          {/* Contact (right) */}
          <div className="md:text-right">
            <p className="text-sm font-medium text-foreground/80">
              Get in touch
            </p>

            <p className="mt-4 text-sm text-foreground/70">
              Email:{' '}
              <a
                className="underline underline-offset-4 hover:text-foreground"
                href="mailto:hello@wellnesswebstudio.com"
              >
                hello@wellnesswebstudio.com
              </a>
            </p>

            <p className="mt-3 text-sm text-foreground/70">
              Based in California, USA
            </p>

            {/* Social icons */}
            <div className="mt-4 flex items-center gap-4 md:justify-end">
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="text-foreground/60"
              >
                <SiInstagram className="h-5 w-5" />
              </a>

              <a
                href="https://linkedin.com/in/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-chart-3"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col gap-2 border-t pt-6 text-sm text-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>© {year} Wellness Web Studio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
