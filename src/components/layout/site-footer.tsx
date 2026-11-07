import { Container } from "./container";
import { Wordmark } from "./wordmark";
import { TextLink } from "@/components/ui/cta-link";
import { navLinks, socialLinks, getWhatsAppHref } from "@/content/site-config";
import { footer } from "@/content/copy";

const YEAR = 2026;

export function SiteFooter() {
  return (
    <footer className="bg-ink py-14 text-cream">
      <Container>
        <div className="flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <Wordmark className="text-cream" markClassName="text-turquoise" />
            <p className="mt-3 max-w-[32ch] text-sm text-cream/60">{footer.blurb}</p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-cream/80 transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            ))}
            <TextLink
              href={getWhatsAppHref()}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-cream hover:text-cream"
            >
              WhatsApp
            </TextLink>
          </nav>
        </div>

        {socialLinks.length > 0 && (
          <div className="mt-8 flex gap-5">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-cream/70 hover:text-cream"
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        <div className="mt-10 border-t border-cream/10 pt-6 text-sm text-cream/60">
          © {YEAR} Español con Mate. Todos os direitos reservados.
        </div>
      </Container>
    </footer>
  );
}
