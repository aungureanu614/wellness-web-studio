import { Button } from '@/components/ui/button';

import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-24 border-t">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Visual */}
          <Image
            src="/about_section_img.png"
            alt="Wellness Web Studio Logo"
            width={500}
            height={500}
            className="h-auto border rounded-2xl object-cover mx-auto"
            priority
          />

          {/* Copy */}
          <div>
            <p className="text-sm font-medium text-foreground/70">
              A little about me
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl">
              I build trustworthy websites that feel like you.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              I work with wellness coaches and practitioners who want a website
              that feels grounded, clear, and welcoming—not salesy or
              overwhelming.
            </p>

            <p className="mt-4 text-foreground/70 leading-relaxed">
              My approach is simple: we get your message clear, design a layout
              that feels warm and aligned with your work, and build a site that
              loads fast, works beautifully on mobile, and makes it easy for the
              right people to reach out.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-foreground/80">
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400/70" />
                <span>Friendly guidance on structure and copy</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400/70" />
                <span>Thoughtful design with lots of breathing room</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400/70" />
                <span>Clean build in Next.js for speed + SEO</span>
              </li>
            </ul>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a href="#contact">Work with me</a>
              </Button>

              <Button variant="outline" asChild>
                <a href="#services">See services</a>
              </Button>
            </div>

            <p className="mt-4 text-sm text-foreground/60">
              Want to keep it super simple? We can start with a starter site and
              grow later.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
