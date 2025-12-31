import Image from 'next/image';
import { SiInstagram, SiLinkedin } from 'react-icons/si';
import { LogoImage } from '../logo-image';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[var(--sage)]/45">
      <div className="mx-auto max-w-6xl px-6 py-8">
        {/* Main row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          {/* Brand */}
          <div className="flex-col gap-3">
            <LogoImage
              src="/wellness_web_studio_logo.png"
              alt="Wellness Web Studio Logo"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover"
            />
          </div>

          {/* Contact + social */}
          <div className="flex flex-col gap-3 md:items-end">
            <div className="flex flex-col gap-1 text-sm text-foreground/70 md:text-right">
              <a
                className="underline underline-offset-4 hover:text-foreground"
                href="mailto:hello@wellnesswebstudio.com"
              >
                hello@wellnesswebstudio.com
              </a>
              <p className="text-xs text-foreground/60">California, USA</p>
            </div>

            <div className="flex items-center gap-3 md:justify-end">
              <a
                href="https://instagram.com/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 text-foreground/70 shadow-sm transition hover:bg-background hover:text-foreground"
              >
                <SiInstagram className="h-4.5 w-4.5" />
              </a>

              <a
                href="https://linkedin.com/in/yourhandle"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-background/60 text-foreground/70 shadow-sm transition hover:bg-background hover:text-foreground"
              >
                <SiLinkedin className="h-4.5 w-4.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="mt-6 flex flex-col gap-2 border-t border-border pt-4 text-xs text-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>© {year} Wellness Web Studio</p>
          <p className="hidden md:block">All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
