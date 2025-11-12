"use client";

import { fetchCenter } from "@/lib/api";
import { CenterData } from "@/types";
import { useQuery } from "@tanstack/react-query";

export function useCenterData(center: string) {
  return useQuery<CenterData>({
    queryKey: ["center", center],
    queryFn: () => fetchCenter(center),
    staleTime: 1000 * 60,
  })
}