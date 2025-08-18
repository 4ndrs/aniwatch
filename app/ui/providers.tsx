"use client";

import { anilistApi } from "@/app/lib/anilist-api";
import { ApiProvider } from "@reduxjs/toolkit/query/react";

const Providers = ({ children }: { children: React.ReactNode }) => (
  <ApiProvider api={anilistApi}>{children}</ApiProvider>
);

export default Providers;
