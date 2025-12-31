import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';

export function Contact() {
  return (
    <section id="contact">
      <div className="mx-auto max-w-6xl py-5">
        {/* Hero-style box wrapper */}
        <div className="relative overflow-hidden rounded-3xl border border-border bg-warm-bg">
          {/* Radial glow overlay */}
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_circle_at_80%_80%,color-mix(in_oklch,var(--mist)_55%,transparent),transparent_60%)]" />

          {/* Content */}
          <div className="relative p-8 md:p-12">
            <div className="grid gap-12 md:grid-cols-2 md:items-start">
              {/* Left: Copy */}
              <div>
                <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                  Let&apos;s talk about your site
                </h2>
                <p className="mt-4 text-lg leading-relaxed">
                  Tell me a little about what you do and what you&apos;d love
                  your website to help with. I&apos;ll reply with next steps and
                  a few options.
                </p>

                <div className="mt-8 rounded-2xl border border-white/20 bg-[var(--eucalyptus)]/20 backdrop-blur p-6">
                  <p className="text-sm font-medium ">What happens next</p>
                  <ol className="mt-4 space-y-3 text-sm">
                    <li className="flex gap-3">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--sage)]" />
                      <span>We schedule a quick, free, no-pressure call.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--sage)]" />
                      <span>You get a clear plan + timeline.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[var(--sage)]" />
                      <span>If it feels right, we build it together.</span>
                    </li>
                  </ol>

                  <p className="mt-6 text-sm">
                    Prefer email?{' '}
                    <a
                      className="underline underline-offset-4"
                      href="mailto:hello@wellnesswebstudio.com"
                    >
                      hello@wellnesswebstudio.com
                    </a>
                  </p>
                </div>
              </div>

              {/* Right: Form */}
              <Card className="rounded-2xl bg-card/90 backdrop-blur border-white/20">
                <CardHeader>
                  <CardTitle>Send a message</CardTitle>
                  <p className="text-sm text-foreground/70">
                    I usually reply within 1–2 business days.
                  </p>
                </CardHeader>

                <CardContent>
                  {/* For now: form posts nowhere. We'll wire to Formspree/Resend later. */}
                  <form className="space-y-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        autoComplete="name"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="website">Website (optional)</Label>
                      <Input
                        id="website"
                        placeholder="https://"
                        autoComplete="url"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">What are you looking for?</Label>
                      <Textarea
                        id="message"
                        placeholder="A short note is perfect—what do you do, and what do you want your website to help with?"
                        className="h-32 py-3 resize-none !field-sizing-fixed max-w-full overflow-wrap-anywhere"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full text-white cursor-pointer"
                    >
                      Send message
                    </Button>

                    <p className="text-xs text-foreground/60">
                      By sending, you&apos;re okay with me contacting you back
                      about this request. No spam ever!
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
          {/* end content */}
        </div>
      </div>
    </section>
  );
}
