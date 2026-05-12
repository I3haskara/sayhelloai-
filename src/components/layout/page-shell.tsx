import { ReactNode } from "react";
import { SiteFooter } from "@/components/footer/site-footer";
import { SiteNavbar } from "@/components/navbar/site-navbar";

type PageShellProps = {
  children: ReactNode;
};

export function PageShell({ children }: PageShellProps) {
  return (
    <div className="theme-fade relative min-h-screen">
      <SiteNavbar />
      <main className="pt-28 md:pt-32">{children}</main>
      <SiteFooter />
    </div>
  );
}
