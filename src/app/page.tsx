import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Hero } from "@/components/sections/hero";
import { BrandExpression } from "@/components/sections/brand-expression";
import { WhyLearn } from "@/components/sections/why-learn";
import { HowItWorks } from "@/components/sections/how-it-works";
import { MeetMate } from "@/components/sections/meet-mate";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { IconDivider } from "@/components/ui/icon-divider";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <Hero />
        <BrandExpression />
        <WhyLearn />
        <HowItWorks />
        <IconDivider />
        <MeetMate />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </>
  );
}
