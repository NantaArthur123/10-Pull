"use client";

import { useSidebar } from "@/components/SidebarContext";
import { useEffect } from "react";

export default function page() {
  const { setSidebar } = useSidebar();

  useEffect(() => {
    setSidebar({
      search: true,
      group: [
        {
          group_name: "common.page-editor",
          items: [
            {
              name: "common.add-games",
              href: "/poll",
              icon: "/images/poll.svg",
            },
            {
              name: "common.add-items",
              href: "/poll",
              icon: "/images/poll.svg",
            },
            {
              name: "common.add-guides",
              href: "/poll",
              icon: "/images/poll.svg",
            },
            {
              name: "common.add-news",
              href: "/poll",
              icon: "/images/poll.svg",
            },
          ],
        },
      ],
    });
  }, [setSidebar]);

  return <div>page</div>;
}
