import Link from "next/link";
import { cn } from "cn";
import { LogoMark } from "@/components/ui/logo-mark";

export function Wordmark({
  className,
  markClassName,
}: {
  className?: string;
  markClassName?: string;
}) {
  return (
    <Link
      href="#top"
      className={cn(
        "inline-flex items-center gap-2.5 font-display text-lg font-semibold tracking-tight",
        className
      )}
    >
      <LogoMark className={cn("size-7", markClassName)} />
      Español con Mate
    </Link>
  );
}
