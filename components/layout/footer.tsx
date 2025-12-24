import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-2">
          {/* Brand */}
          <div>
            <p className="text-base font-semibold">Wellness Web Studio</p>
            <p className="mt-3 text-sm leading-relaxed text-foreground/70">
              Modern websites for wellness professionals—built with care,
              clarity, and a little breathing room.
            </p>

            <div className="mt-6 flex gap-3">
              <Button size="sm" asChild>
                <a href="#contact">Book a free consult</a>
              </Button>
              <Button size="sm" variant="outline" asChild>
                <a href="#services">Services</a>
              </Button>
            </div>
          </div>

          {/* Contact */}
          <div>
            <p className="text-sm font-medium text-foreground/80">
              Get in touch
            </p>
            <p className="mt-4 text-sm text-foreground/70">
              Email:{' '}
              <a
                className="underline underline-offset-4 hover:text-foreground"
                href="mailto:hello@wellnesswebstudio.com"
              >
                hello@wellnesswebstudio.com
              </a>
            </p>

            <p className="mt-3 text-sm text-foreground/70">
              Based in California · Working remotely
            </p>

            <div className="mt-6 rounded-2xl border border-foreground/10 p-4">
              <p className="text-sm font-medium">Quick note</p>
              <p className="mt-2 text-sm text-foreground/70">
                If you’re not sure what you need yet, that’s totally okay. We’ll
                figure it out together on a short consult.
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-10" />

        <div className="flex flex-col gap-3 text-sm text-foreground/60 md:flex-row md:items-center md:justify-between">
          <p>© {year} Wellness Web Studio. All rights reserved.</p>
          <div className="flex gap-6">
            {/* Swap these for real links later */}
            <a className="hover:text-foreground" href="#">
              Instagram
            </a>
            <a className="hover:text-foreground" href="#">
              LinkedIn
            </a>
            <a className="hover:text-foreground" href="#">
              Privacy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
