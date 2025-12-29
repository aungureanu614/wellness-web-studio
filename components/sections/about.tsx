import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function About() {
  return (
    <section id="about">
      <div className="mx-auto max-w-6xl py-14 md:py-10">
        {/* Hero-style box wrapper */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-[var(--eucalyptus)]">
          {/* Radial glow overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_circle_at_70%_20%,color-mix(in_oklch,var(--primary)_35%,transparent),transparent_60%),radial-gradient(1400px_circle_at_20%_80%,color-mix(in_oklch,var(--mist)_45%,transparent),transparent_50%)]" />

          {/* Content */}
          <div className="relative p-8 md:p-12">
            <div className="grid gap-12 md:grid-cols-2 md:items-center">
              {/* Visual */}
              <div className="relative">
                <Image
                  src="/about_section_img.png"
                  alt="Example wellness website layouts across devices"
                  width={500}
                  height={500}
                  className="h-auto w-full rounded-2xl object-cover shadow-xl ring-1 ring-white/10"
                  priority
                />
                <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] bg-black/20 blur-2xl" />
              </div>

              {/* Copy */}
              <div>
                <p className="text-sm font-medium text-foreground/70 text-white">
                  A little about me
                </p>

                <h2 className="mt-4 text-3xl font-semibold tracking-tight md:text-4xl text-white">
                  I build websites that help the right people find you — and
                  feel comfortable reaching out.
                </h2>

                <p className="mt-6 text-lg leading-relaxed text-foreground/70 text-white">
                  I work with wellness coaches and practitioners who want a
                  website that feels grounded, clear, and welcoming.
                </p>

                <p className="mt-4 text-foreground/70 leading-relaxed text-white">
                  My approach is simple: we start by getting clear on what you
                  do and who you want to help, then build a site that reflects
                  your work, looks beautiful on every device, and makes it easy
                  for people to take the next step.
                </p>

                <p className="mt-4 text-foreground/70 leading-relaxed text-white">
                  Whether you&apos;re just getting started, ready to grow, or
                  want ongoing support as your business evolves, we&apos;ll
                  choose a path that fits what you need right now — and leave
                  room to grow later.
                </p>

                <div className="mt-8 rounded-2xl border border-foreground/10 bg-card/80 backdrop-blur p-6">
                  <p className="text-sm font-medium mb-4">What you get</p>
                  <ul className="space-y-3 text-sm text-foreground/80 list-disc marker:text-primary/70 ml-4">
                    <li>Clear guidance to shape your message and content</li>
                    <li>Thoughtful design with plenty of breathing room</li>
                    <li>
                      A fast, reliable site that works beautifully on phones,
                      tablets, and computers
                    </li>
                    <li>
                      Easy ways for people to contact you, book sessions, and
                      fill out intake forms
                    </li>
                    <li>
                      Basic setup so your site can be found through Google
                    </li>
                  </ul>
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Button asChild>
                    <a href="#contact">Work with me</a>
                  </Button>

                  <Button variant="outline" asChild>
                    <a href="#services">See services</a>
                  </Button>
                </div>

                <p className="mt-5 text-sm text-foreground/60 text-white">
                  Want to keep it simple? We can start with a small site and
                  grow from there.
                </p>
              </div>
            </div>
          </div>
          {/* end content */}
        </div>
      </div>
    </section>
  );
}
