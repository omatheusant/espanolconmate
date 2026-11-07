import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "cn";

const ctaVariants = cva(
  "inline-flex touch-manipulation items-center justify-center gap-2 rounded-full font-display font-semibold transition-[background-color,transform,box-shadow] duration-200 ease-[var(--ease-brand)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-turquoise-deep focus-visible:ring-offset-2 focus-visible:ring-offset-cream hover:-translate-y-0.5 active:translate-y-0",
  {
    variants: {
      variant: {
        primary:
          "bg-orange text-ink hover:bg-orange-deep hover:shadow-[0_14px_28px_-10px_rgba(38,59,60,0.45)]",
        inverse:
          "bg-cream text-ink hover:bg-white hover:shadow-[0_14px_28px_-10px_rgba(38,59,60,0.3)]",
        outline: "border border-ink/25 text-ink hover:border-ink/50 hover:bg-ink/5",
      },
      size: {
        default: "h-13 px-7 text-base",
        lg: "h-14 px-8 text-base sm:text-lg",
      },
    },
    defaultVariants: { variant: "primary", size: "default" },
  }
);

type CtaLinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof ctaVariants>;

export function CtaLink({ className, variant, size, href = "#", ...props }: CtaLinkProps) {
  const isExternal = /^https?:\/\//.test(href);
  return (
    <a
      href={href}
      className={cn(ctaVariants({ variant, size, className }))}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      {...props}
    />
  );
}

export function TextLink({
  className,
  children,
  icon,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement> & { icon?: React.ReactNode }) {
  return (
    <a
      className={cn(
        "group/link inline-flex items-center gap-1.5 font-medium text-ink transition-colors",
        className
      )}
      {...props}
    >
      <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1.5px] bg-left-bottom bg-no-repeat pb-0.5 transition-[background-size] duration-[var(--duration-base)] ease-[var(--ease-brand)] group-hover/link:bg-[length:100%_1.5px]">
        {children}
      </span>
      {icon && (
        <span className="transition-transform duration-[var(--duration-base)] ease-[var(--ease-brand)] group-hover/link:translate-x-1">
          {icon}
        </span>
      )}
    </a>
  );
}
