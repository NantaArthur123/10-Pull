// types/character.ts
export type Skill = {
  name: Record<string, string>;
  description: Record<string, string>;
};

export type Character = {
  id: string;
  name: Record<string, string>;
  element?: string;
  role?: string;
  rarity?: number;
  image?: string;
  skills: Skill[];
};
