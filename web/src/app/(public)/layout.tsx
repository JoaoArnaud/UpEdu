import type { ReactNode } from "react";

import {
  Sidebar,
  SIDEBAR_OPEN_BY_DEFAULT,
} from "../../components/layout/sidebar";

type PublicLayoutProps = Readonly<{
  children: ReactNode;
}>;

export default function PublicLayout({ children }: PublicLayoutProps) {
  return (
    <div className="relative min-h-screen bg-[radial-gradient(circle_at_top,_rgba(148,163,184,0.24),_transparent_45%),linear-gradient(180deg,_#f8fafc_0%,_#e2e8f0_100%)]">
      <Sidebar defaultOpen={SIDEBAR_OPEN_BY_DEFAULT} />
      {children}
    </div>
  );
}
