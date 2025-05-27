"use client";

import { useState } from "react";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-row">
      <div
        className={`top-0 left-0 z-40 w-10 h-screen transition-transform shadow-lg bg-midnight-900 border-r-amber-300/30 border`}
        aria-label="Sidebar"
      >
        1
      </div>
      <div
        className={`w-64 h-screen transition-transform shadow-lg bg-midnight-800`}
        aria-label="Sidebar"
      >
        2
      </div>
    </div>
  );
}
