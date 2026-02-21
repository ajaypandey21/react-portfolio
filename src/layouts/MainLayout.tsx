import type { ReactNode } from "react";

interface MainLayoutProps {
  children: ReactNode;
}

/**
 * Main layout wrapper. Use for consistent max-width and padding.
 */
export function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      {children}
    </div>
  );
}
