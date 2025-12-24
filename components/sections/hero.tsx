import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="border-b">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight md:text-6xl">
              Modern websites for wellness professionals.
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-foreground/70">
              I help coaches and practitioners turn their work into a warm,
              trustworthy online presence—so the right clients feel confident
              reaching out.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button size="lg">Book a free consult</Button>

              <Button size="lg" variant="outline" asChild>
                <a href="#services">View services</a>
              </Button>
            </div>

            <p className="mt-4 text-sm text-foreground/60">
              No pressure. Quick chat → clear plan → you decide.
            </p>
          </div>

          {/* Visual */}
          <div className="relative">
            <Image
              src="/hero_img.png"
              alt="Example of a calm wellness website layout"
              width={900}
              height={700}
              className="h-auto w-full rounded-2xl object-cover mx-auto"
              priority
            />

            {/* Accent glow */}
            <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] bg-emerald-200/20 blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
