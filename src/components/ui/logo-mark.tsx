import Image from "next/image";
import { cn } from "cn";

/**
 * Official brand mark (mate gourd + bombilla), background removed.
 * Source: /public/brand/mate-icon.png — never redrawn or distorted,
 * only scaled via object-contain.
 */
type LogoMarkProps = Omit<
  React.ComponentProps<typeof Image>,
  "src" | "alt" | "width" | "height"
>;

export function LogoMark({ className, ...props }: LogoMarkProps) {
  return (
    <Image
      src="/brand/mate-icon.png"
      alt=""
      width={353}
      height={498}
      className={cn("h-7 w-auto object-contain", className)}
      {...props}
    />
  );
}
