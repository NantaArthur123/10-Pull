// app/[locale]/[game]/page.tsx
import LanguageSwitcher from "@/components/LangSwitcher";
import { notFound } from "next/navigation";
import GameHomeClient from "./GameHomeClient";

const validGames = ["wutheringwaves", "genshin", "arknights"];

export default async function GameHomePage({
  params,
}: {
  params: { game: string };
}) {
  const { game } = await params; // ✅ await `params`

  if (!validGames.includes(game)) return notFound();

  return (
    <div>
      <GameHomeClient game={game} />
      <LanguageSwitcher />
    </div>
  );
}
