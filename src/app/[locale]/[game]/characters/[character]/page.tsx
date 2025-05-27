// src/app/[locale]/[game]/characters/[character]/page.tsx

import { Character } from "@/types/character";
import { getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";

type Params = {
  params: {
    locale: string;
    game: string;
    character: string;
  };
};

export default async function CharacterPage({ params }: Params) {
  const { locale, game, character } = params;
  const t = await getTranslations({ locale });

  let data: Character[];

  try {
    data = await import(`@/characters/${game}.json`).then((m) => m.default);
  } catch {
    notFound();
  }

  const char = data.find((c) => c.id === character);
  if (!char) notFound();

  return (
    <main>
      <h1>{char.name[locale] || char.name.en}</h1>
      <img src={char.image} alt={char.name.en} />
      <p>
        {t("element")}: {char.element}
      </p>
      <p>
        {t("role")}: {char.role}
      </p>

      <h2>{t("skills")}</h2>
      <ul>
        {char.skills.map((skill, i) => (
          <li key={i}>
            <strong>{skill.name[locale] || skill.name.en}</strong>
            <p>{skill.description[locale] || skill.description.en}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
