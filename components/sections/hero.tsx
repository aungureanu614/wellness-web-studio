import { Button } from '@/components/ui/button';
import Image from 'next/image';

export function Hero() {
  return (
    <section className="border-b bg-clay">
      <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
        <div className="grid overflow-hidden rounded-3xl border border-border md:grid-cols-2">
          {/* Left panel */}
          <div className="relative p-10 md:p-14 bg-[var(--warm-bg)]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_circle_at_30%_20%,color-mix(in_oklch,var(--mist)_55%,transparent),transparent_60%)]" />

            <div className="relative">
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight md:text-6xl">
                <span className="block">Modern websites</span>
                <span className="block">for wellness</span>
                <span className="block">
                  professionals<span className="text-primary">.</span>
                </span>
              </h1>

              <p className="mt-6 text-lg leading-relaxed text-foreground/70 max-w-xl">
                I help coaches and practitioners turn their work into a warm,
                trustworthy online presence—so the right clients feel confident
                reaching out.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button size="lg" asChild>
                  <a href="#contact">Book a free consult</a>
                </Button>

                <Button size="lg" variant="outline" asChild>
                  <a href="#services">View services</a>
                </Button>
              </div>

              <p className="mt-5 text-sm text-foreground/60">
                No pressure. Quick chat → clear plan → you decide.
              </p>
            </div>
          </div>

          {/* Right panel */}
          <div className="relative p-10 md:p-14 bg-[var(--eucalyptus)]">
            <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[var(--sage)]/25 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-[var(--clay)]/20 blur-3xl" />

            <div className="relative flex h-full items-center justify-center">
              <div className="relative w-full max-w-lg">
                <Image
                  src="/hero_img.png"
                  alt="Example of a calm wellness website layout"
                  width={900}
                  height={700}
                  className="h-auto w-full rounded-2xl object-cover shadow-xl ring-1 ring-white/10"
                  priority
                />

                <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[28px] bg-black/20 blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
