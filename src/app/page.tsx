import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Products } from '@/components/Products';
import { Pricing } from '@/components/Pricing';
import { Technologies } from '@/components/Technologies';
import { Portfolio } from '@/components/Portfolio';
import { WhyChooseUs } from '@/components/WhyChooseUs';
import { Testimonials } from '@/components/Testimonials';
import { Contact } from '@/components/Contact';
import { fetchSheetsData } from '@/lib/sheets';
import { defaultProjects, defaultTestimonials } from '@/data/fallback';

export default async function Home() {
  const { projects, testimonials } = await fetchSheetsData();
  const projectsData = projects.length > 0 ? projects : defaultProjects;
  const testimonialsData = testimonials.length > 0 ? testimonials : defaultTestimonials;

  return (
    <>
      <Hero />
      <About />
      <Services />
      <Products />
      <Pricing />
      <Technologies />
      <Portfolio projects={projectsData} />
      <WhyChooseUs />
      <Testimonials testimonials={testimonialsData} />
      <Contact />
    </>
  );
}
