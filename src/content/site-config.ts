/**
 * Operational / business configuration.
 *
 * Everything in this file is a real-world detail the business owner must
 * confirm before launch (contact channel, enrollment link, pricing,
 * schedules, instructor identity). Nothing here is fabricated — values
 * marked TODO are placeholders in the correct *format* only.
 */

export const siteConfig = {
  name: "Español con Mate",
  tagline: "Tu guía de español",

  // TODO(content): replace with the real WhatsApp number (digits only,
  // country + area code, e.g. 55 11 91234-5678 -> "5511912345678").
  whatsappNumber: "5511999999999",
  whatsappMessage: "Olá! Quero saber mais sobre as aulas do Español con Mate.",
} as const;

export function getWhatsAppHref(message = siteConfig.whatsappMessage) {
  const params = new URLSearchParams({ text: message });
  return `https://wa.me/${siteConfig.whatsappNumber}?${params.toString()}`;
}

export const navLinks = [
  { label: "Método", href: "#metodo" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Sobre", href: "#sobre" },
  { label: "Dúvidas", href: "#duvidas" },
] as const;

// TODO(content): add verified social links once confirmed. Leave empty
// until then — no placeholder URLs ship to production.
export const socialLinks: { label: string; href: string }[] = [];
