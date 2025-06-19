// Data query filter :DDD

import { comboboxtypes } from "@/components/interface/comboboxtype";

export function filterPls(options: comboboxtypes[], query: string): comboboxtypes[] {
  if (!query) return options;
  return options.filter((option) =>
    option.name.toLowerCase().includes(query.toLowerCase())
  );
}
