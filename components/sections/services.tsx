import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

const services = [
  {
    title: 'Starter Site',
    desc: 'A clear, welcoming website that helps people understand what you offer and feel comfortable reaching out.',
    bullets: [
      'A simple site with 1–3 pages (ex: Home, About, Contact)',
      'Easy to read and use on phones, tablets, and computers',
      'A contact form so potential clients can reach you easily',
      'Basic setup so people can find you through Google',
      'Light help refining wording so your message feels clear and natural',
    ],
    tag: 'Getting started',
  },
  {
    title: 'Growth Package',
    desc: 'A more complete setup designed to support bookings, reduce back-and-forth, and help your practice grow.',
    bullets: [
      'Everything included in the Starter Site',
      'A clear services page so clients understand what you offer',
      'Online booking so clients can schedule sessions themselves',
      'Automatic booking confirmations so clients know what to expect',
      'Payment setup so clients can pay online',
      'A dedicated space for testimonials or client feedback',
      'An intake form to collect important information before sessions',
    ],
    tag: 'Most popular',
    featured: true,
  },
  {
    title: 'Ongoing Support',
    desc: 'Continued support to keep your site updated, organized, and working smoothly as your practice evolves.',
    bullets: [
      'Content updates (new services, wording changes, announcements)',
      'Help adding new pages, forms, or features as needed',
      'Performance and speed checks',
      'Ongoing support as your offerings and business grow',
    ],
    tag: 'Support',
  },
];

export function Services() {
  return (
    <section id="services">
      <div className="mx-auto max-w-6xl py-5">
        {/* Hero-style box wrapper */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-[var(--warm-bg)]">
          {/* Radial glow overlay */}
          <div
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_circle_at_30%_0%,color-mix(in_oklch,var(--mist)_40%,transparent),transparent_60%),radial-gradient(1400px_circle_at_50%_100%,color-mix(in_oklch,var(--primary)_40%,transparent),transparent_50%)]
"
          />

          {/* Content */}
          <div className="relative p-8 md:p-12">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Services
              </h2>
              <p className="mt-4 text-lg text-foreground/70">
                Pick the level of support you need. We’ll keep it simple, and
                focused on helping the right clients find you.
              </p>
            </div>

            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {services.map(s => (
                <Card
                  key={s.title}
                  className={[
                    'rounded-2xl bg-card/80 backdrop-blur',
                    s.featured ? 'border-primary' : 'border-foreground/10',
                  ].join(' ')}
                >
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-xl">{s.title}</CardTitle>
                      <Badge
                        className={
                          s.featured
                            ? 'bg-primary text-white'
                            : 'bg-background text-foreground'
                        }
                        variant={s.featured ? 'default' : 'secondary'}
                      >
                        {s.tag}
                      </Badge>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                      {s.desc}
                    </p>
                  </CardHeader>

                  <CardContent className="flex flex-col justify-between flex-1">
                    <div>
                      <Separator className="mb-4" />
                      <ul className="space-y-3 text-sm text-foreground/80 list-disc marker:text-primary/70 ml-4">
                        {s.bullets.map(b => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8">
                      <Button
                        variant={s.featured ? 'default' : 'outline'}
                        className={`${s.featured ? 'text-white' : 'text-foreground'} w-full`}
                        asChild
                      >
                        <a href="#contact">Talk about this</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Flexibility + “What I can help with” */}
            <div className="mt-10 space-y-10">
              {/* Flexibility card */}
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card/80 p-6 backdrop-blur md:p-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="max-w-2xl">
                    <h3 className="text-lg font-semibold tracking-tight">
                      Not sure which package fits?
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      That’s totally okay. Think of these packages as starting
                      points. Tell me what you need (or what you’re trying to
                      improve), and we’ll shape a plan that fits.
                    </p>
                  </div>

                  <div className="flex flex-col gap-3 sm:flex-row">
                    <Button asChild className="text-white">
                      <a href="#contact">Book a free consult</a>
                    </Button>
                    <Button variant="outline" asChild>
                      <a href="#contact">Ask a question</a>
                    </Button>
                  </div>
                </div>

                {/* soft sage glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-primary/15 blur-3xl" />
              </div>

              {/* What I can help with */}
              <div>
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-semibold tracking-tight">
                    What I can help with
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Pick what matters most right now.
                  </p>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {[
                    'Online booking',
                    'Online payment setup',
                    'Intake forms',
                    'Service menu',
                    'Testimonials',
                    'Google visibility',
                    'Lead capture',
                    'Confirmations & reminders',
                    'Workshops / events',
                    'Packages & bundles',
                    'Email list sign-up',
                    'Updates & ongoing support',
                  ].map(label => (
                    <span
                      key={label}
                      className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-sm text-foreground/80 shadow-sm backdrop-blur"
                    >
                      {label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
          {/* end content */}
        </div>
      </div>
    </section>
  );
}
