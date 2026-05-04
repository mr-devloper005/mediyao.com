"use client";

import { Suspense } from "react";
import { Navbar } from "@/components/shared/navbar";
import { PresswireHeader } from "@/components/shared/presswire-header";
import { getFactoryState } from "@/design/factory/get-factory-state";

export function NavbarShell() {
  const { recipe } = getFactoryState();
  const isPresswireProduct = recipe.primaryTask === 'mediaDistribution';

  return (
    <Suspense fallback={null}>
      {isPresswireProduct && <PresswireHeader />}
     
    </Suspense>
  );
}
