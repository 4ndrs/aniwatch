"use client";

import { Suspense } from "react";
import { anilistApi } from "@/app/lib/anilist-api";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

const Providers = ({ children }: { children: React.ReactNode }) => (
  <Suspense>
    <ApiProvider api={anilistApi}>{children}</ApiProvider>
  </Suspense>
);

export default Providers;
