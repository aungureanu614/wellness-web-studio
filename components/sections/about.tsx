import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function About() {
  return (
    <section id="about" className="py-24 border-t bg-muted">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          {/* Visual */}
          <Image
            src="/about_section_img.png"
            alt="Example wellness website layouts across devices"
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
              I build websites that help the right people find you — and feel
              comfortable reaching out.
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              I work with wellness coaches and practitioners who want a website
              that feels grounded, clear, and welcoming.
            </p>

            <p className="mt-4 text-foreground/70 leading-relaxed">
              My approach is simple: we start by getting clear on what you do
              and who you want to help, then build a site that reflects your
              work, looks beautiful on every device, and makes it easy for
              people to take the next step.
            </p>

            <p className="mt-4 text-foreground/70 leading-relaxed">
              Whether you’re just getting started, ready to grow, or want
              ongoing support as your business evolves, we’ll choose a path that
              fits what you need right now — and leave room to grow later.
            </p>

            <ul className="mt-8 space-y-3 text-sm text-foreground/80">
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400/70" />
                <span>Clear guidance to shape your message and content</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400/70" />
                <span>Thoughtful design with plenty of breathing room</span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400/70" />
                <span>
                  A fast, reliable site that works beautifully on phones,
                  tablets, and computers
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400/70" />
                <span>
                  Easy ways for people to contact you, book sessions, and fill
                  out intake forms
                </span>
              </li>
              <li className="flex gap-3">
                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-400/70" />
                <span>
                  Basic setup so your site can be found through Google
                </span>
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
              Want to keep it simple? We can start with a small site and grow
              from there.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
