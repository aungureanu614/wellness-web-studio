import Image from 'next/image';

export function About() {
  return (
    <section id="about">
      <div className="mx-auto max-w-6xl py-5">
        {/* Hero-style box wrapper */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-[var(--eucalyptus)]">
          {/* Radial glow overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_40%,color-mix(in_oklch,var(--primary)_80%,transparent),transparent_100%),radial-gradient(1400px_circle_at_20%_80%,color-mix(in_oklch,var(--mist)_80%,transparent),transparent_100%)]" />

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
                  I build websites that feel intuitive, and easy to say yes to.
                </h2>

                <p className="mt-4 text-foreground/70 leading-relaxed text-white">
                  I work with wellness coaches and practitioners whose work is
                  relational, and deeply human—and who want an online presence
                  that reflects that.
                </p>

                <p className="mt-4 text-foreground/70 leading-relaxed text-white">
                  Many wellness websites look polished but feel manufactured,
                  confusing to navigate, or hard to book from. My role is to
                  translate your work into a digital experience that feels
                  grounded, intuitive, and respectful—built on modern,
                  lightweight hosting that allows for flexibility and longevity
                  without the boxed-in feel of templates or unnecessary monthly
                  costs.
                </p>

                <p className="mt-4 text-foreground/70 leading-relaxed text-white">
                  We start by getting clear on what you do and who you want to
                  help, then build a site that reflects your values, works
                  beautifully on every device, and gently guides people toward
                  the next step—without popups, pressure, or urgency tactics.
                </p>

                <div className="mt-8 rounded-2xl border border-foreground/10 bg-card/80 backdrop-blur p-6">
                  <p className="text-sm font-medium mb-4">What you get</p>
                  <ul className="space-y-3 text-sm text-foreground/80 list-disc marker:text-primary/70 ml-4">
                    <li>
                      Clear, grounded messaging that helps people understand
                      your value
                    </li>
                    <li>Thoughtful design with plenty of breathing room</li>
                    <li>
                      A fast, reliable site that works beautifully on phones,
                      tablets, and computers
                    </li>
                    <li>
                      Simple ways for people to contact you, book sessions, and
                      receive clear confirmation
                    </li>
                    <li>
                      Basic setup so your site can be found through Google
                    </li>
                  </ul>
                </div>

                <p className="mt-5 text-sm text-foreground/60 text-white">
                  No pressure—just a quick chat, a clear recommendation, and
                  space to decide.
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
