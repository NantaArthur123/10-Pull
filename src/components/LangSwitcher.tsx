// components/LanguageSwitcher.tsx
"use client";

import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <div className="flex gap-2">
      {routing.locales.map((locale) => (
        <Link
          key={locale}
          href={pathname}
          locale={locale}
          className="underline text-blue-500 hover:text-blue-700"
        >
          {locale.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
