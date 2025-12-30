'use client';

import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* This wrapper keeps alignment consistent with the hero container */}
      <div>
        <div
          className={[
            'bg-[var(--sage)]/55 backdrop-blur-md',
            'border border-border/60',
            'shadow-[0_10px_30px_-20px_rgba(0,0,0,0.25)]',
            'supports-[backdrop-filter]:bg-[var(--sage)]/45',
          ].join(' ')}
        >
          <div className="flex items-center justify-between px-5 py-3 sm:px-6 sm:py-4">
            {/* Brand */}
            <a href="#" className="flex items-center gap-3">
              <div className="rounded-full bg-white/60 p-1 shadow-sm ring-1 ring-border/60">
                <Image
                  src="/wellness_web_studio_logo.png"
                  alt="Wellness Web Studio Logo"
                  width={36}
                  height={36}
                  className="h-9 w-9"
                  priority
                />
              </div>
              <span className="text-sm font-semibold tracking-tight sm:text-base">
                Wellness Web Studio
              </span>
            </a>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-2 md:flex">
              {navLinks.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm text-foreground/70 transition hover:bg-foreground/5 hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile menu button */}
            <div className="relative md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="flex h-10 w-10 items-center justify-center rounded-2xl bg-background/60 shadow-sm backdrop-blur transition hover:bg-background/80"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-5 w-5" />
                ) : (
                  <Menu className="h-5 w-5" />
                )}
              </button>

              {/* Mobile dropdown menu */}
              {isMobileMenuOpen && (
                <div className="absolute right-0 top-full mt-2 w-48 rounded-2xl border border-border bg-background p-2 shadow-lg">
                  {navLinks.map(link => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block rounded-lg px-3 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
