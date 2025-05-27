// src/lib/loadCharacters.ts
import { Character } from '@/types/character';

export async function loadCharacters(game: string): Promise<Character[]> {
  switch (game) {
    case 'wutheringwaves':
      return (await import('@/database/wutheringwaves.json')).default;
    // case 'genshin':
    //   return (await import('@/database/genshin.json')).default;
    // Add more games as needed
    default:
      throw new Error(`Unsupported game: ${game}`);
  }
}
