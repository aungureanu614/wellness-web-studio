'use client';

import Image from 'next/image';
import { Menu } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b position sticky top-0 z-50 bg-background/70 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3">
          <Image
            src="/wellness_web_studio_logo.png"
            alt="Wellness Web Studio Logo"
            width={40}
            height={40}
            className="h-10 w-10"
            priority
          />
          <span className="font-semibold tracking-tight text-sm sm:text-base">
            Wellness Web Studio
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a
            className="text-foreground/70 hover:text-foreground"
            href="#services"
          >
            Services
          </a>
          <a className="text-foreground/70 hover:text-foreground" href="#about">
            About
          </a>
          <a
            className="text-foreground/70 hover:text-foreground"
            href="#contact"
          >
            Contact
          </a>
        </nav>

        {/* Mobile dropdown */}
        <div className="md:hidden flex items-center gap-2">
          <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                aria-label="Open menu"
                className="rounded-xl"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end" className="w-44">
              <DropdownMenuItem asChild>
                <a href="#services" onClick={() => setOpen(false)}>
                  Services
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#about" onClick={() => setOpen(false)}>
                  About
                </a>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <a href="#contact" onClick={() => setOpen(false)}>
                  Contact
                </a>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
