// src/app/[locale]/[game]/characters/page.tsx

import { loadCharacters } from "@/lib/loadCharacters";
import { Character } from "@/types/character";
import { getTranslations } from "next-intl/server";

type Props = {
  params: {
    locale: string;
    game: string;
  };
};

export default async function CharacterListPage({ params }: Props) {
  const { locale, game } = params;
  const t = await getTranslations({ locale });

  let characters: Character[];

  try {
    characters = await loadCharacters(game);
  } catch (error) {
    return <div>{t("error.gameNotFound") || "Game not found"}</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        {t("characters.title", { game })}
      </h1>

      <ul className="grid grid-cols-2 gap-4">
        {characters.map((char) => (
          <li key={char.id} className="border p-2 rounded-lg shadow-sm">
            <a href={`/${locale}/${game}/characters/${char.id}`}>
              <h2 className="text-lg font-semibold">{char.name[locale]}</h2>

              <p>
                {char.role} · {char.element}
              </p>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
