"use client";

import { createContext, useContext } from "react";
import { CenterData } from "@/types";

type CenterContextType = {
  center: string;
  centerData?: CenterData;
};

const CenterContext = createContext<CenterContextType | null>(null);

export function CenterProvider({
  center,
  centerData,
  children,
}: {
  center: string;
  centerData?: CenterData;
  children: React.ReactNode;
}) {
  return (
    <CenterContext.Provider value={{ center, centerData }}>
      {children}
    </CenterContext.Provider>
  );
}

export function useCenter() {
  const context = useContext(CenterContext);
  if (!context) {
    throw new Error("useCenter must be used within a CenterProvider");
  }
  return context;
}
