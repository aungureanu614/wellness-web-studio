'use client';

import Image from 'next/image';
import { Menu } from 'lucide-react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

export function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      {/* This wrapper keeps alignment consistent with the hero container */}
      <div>
        <div
          className={[
            // surface
            'bg-[var(--sage)]/55 backdrop-blur-md',
            'border border-border/60',
            'shadow-[0_10px_30px_-20px_rgba(0,0,0,0.25)]',
            // subtle "blend" tint so it relates to the page palette
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
              {[
                { label: 'Services', href: '#services' },
                { label: 'About', href: '#about' },
                { label: 'Contact', href: '#contact' },
              ].map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  className="rounded-full px-4 py-2 text-sm text-foreground/70 transition hover:bg-foreground/5 hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Mobile navigation using NavigationMenu */}
            <nav className="md:hidden">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="h-10 w-10 rounded-2xl bg-background/60 shadow-sm backdrop-blur p-0">
                      <Menu className="h-5 w-5" />
                    </NavigationMenuTrigger>
                    {/* TODO: implement mobile nav */}
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
