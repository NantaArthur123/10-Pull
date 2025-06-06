"use client";

import { createContext, useContext, useState } from "react";
import sidebaritems from "./interface/sidebaritem";

const SidebarContext = createContext<{
  sidebar: sidebaritems | null;
  setSidebar: (s: sidebaritems) => void;
}>({
  sidebar: null,
  setSidebar: () => {},
});

export function SidebarProvider({ children }: { children: React.ReactNode }) {
  const [sidebar, setSidebar] = useState<sidebaritems | null>(null);
  return (
    <SidebarContext.Provider value={{ sidebar, setSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

export function useSidebar() {
  return useContext(SidebarContext);
}
