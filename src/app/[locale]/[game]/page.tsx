import { useTranslations } from "next-intl";
import { notFound } from "next/navigation";
const validGames = ["wutheringwaves", "genshin", "arknights"];

export default function GameHomePage({ params }: { params: { game: string } }) {
  const { game } = params;
  const t = useTranslations();

  if (!validGames.includes(game)) return notFound();

  return (
    <main className="p-4">
      <h1 className="text-3xl font-bold">
        {t("title", { game: params.game })}
      </h1>
    </main>
  );
}
