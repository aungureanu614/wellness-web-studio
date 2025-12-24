import { Services } from '@/components/sections/services';
import { Hero } from '@/components/sections/hero';
import { Contact } from '@/components/sections/contact';
import { About } from '@/components/sections/about';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Contact />
    </main>
  );
}
