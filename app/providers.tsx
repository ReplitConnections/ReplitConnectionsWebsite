"use client";
import { RootProvider } from "fumadocs-ui/provider";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <RootProvider
      theme={{
        enabled: true,
      }}
    >
      {children}
    </RootProvider>
  );
}
