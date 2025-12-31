'use client';

import Image from 'next/image';
import { Menu } from 'lucide-react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import Link from 'next/link';

export function Navbar() {
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
              <div className="rounded-full bg-[var(--eucalyptus)] p-1 shadow-sm ring-1 ring-border/60 h-12 w-12">
                <Image
                  src="/wellness_web_studio_logo.png"
                  alt="Wellness Web Studio Logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 rounded-full object-cover"
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
            <NavigationMenu className="md:hidden" viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="[&>svg:last-child]:hidden">
                    <Menu className="h-5 w-5" />
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="right-0 left-auto min-w-[150px] w-auto">
                    <div className="flex flex-col p-2 gap-1">
                      <NavigationMenuLink asChild>
                        <Link
                          href="#services"
                          className="px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground"
                        >
                          Services
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="#about"
                          className="px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground"
                        >
                          About
                        </Link>
                      </NavigationMenuLink>
                      <NavigationMenuLink asChild>
                        <Link
                          href="#contact"
                          className="px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground"
                        >
                          Contact
                        </Link>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </header>
  );
}
