// app/[locale]/[game]/GameHomeClient.tsx
"use client";

import { useSidebar } from "@/components/SidebarContext";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

type Props = {
  game: string;
};

function formatGameName(game: string) {
  return game
    .split(/[\s-]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default function GameHomeClient({ game }: Props) {
  const t = useTranslations();
  const { setSidebar } = useSidebar();

  useEffect(() => {
    setSidebar({
      search: true,
      group: [
        {
          group_name: "common.codex",
          items: [
            {
              name: "wutheringwaves.resonators",
              href: "/poll",
              icon: "/images/poll.svg",
            },
            {
              name: "wutheringwaves.echoes",
              href: "/poll",
              icon: "/images/poll.svg",
            },
            { name: "common.weapons", href: "/poll", icon: "/images/poll.svg" },
            { name: "common.items", href: "/poll", icon: "/images/poll.svg" },
          ],
        },
        {
          group_name: "common.community",
          items: [
            {
              name: "wutheringwaves.resonators-tier-list",
              href: "/post",
              icon: "/images/poll.svg",
            },
            {
              name: "wutheringwaves.resonator-polls",
              href: "/post",
              icon: "/images/poll.svg",
            },
            {
              name: "common.post",
              href: "/post",
              icon: "/images/poll.svg",
            },
            {
              name: "common.guide",
              href: "/post",
              icon: "/images/poll.svg",
            },
          ],
        },
      ],
    });
  }, [setSidebar]);

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold">
        {t("homepage.title", { game: formatGameName(game) })}
      </h1>
    </main>
  );
}
