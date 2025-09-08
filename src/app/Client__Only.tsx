"use client";

import { useEffect, useState } from "react";

/**
 * Ensures children only render on the client.
 * Ideal for dynamic content that changes frequently
 * and would break SSR hydration.
 */
export default function ClientOnly({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  return <>{children}</>;
}
