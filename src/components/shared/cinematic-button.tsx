import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";

type CinematicButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export function CinematicButton({
  href,
  label,
  variant = "primary",
}: CinematicButtonProps) {
  return (
    <Button
      asChild
      className={cn(
        "btn-pill h-12 px-7 text-sm font-semibold transition duration-300",
        variant === "primary"
          ? "bg-gradient-to-r from-[#ff6b4a] to-[#7c3aed] text-white shadow-[0_12px_30px_-18px_rgba(124,58,237,0.8)] hover:scale-[1.02]"
          : "border border-white/40 bg-white/50 text-[#061b4d] backdrop-blur-xl hover:scale-[1.02] dark:border-white/20 dark:bg-white/5 dark:text-white"
      )}
    >
      <Link href={href}>{label}</Link>
    </Button>
  );
}
