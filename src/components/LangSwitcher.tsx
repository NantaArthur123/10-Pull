// components/LanguageSwitcher.tsx
"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import "flag-icons";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useRef, useState } from "react";
import { BiChevronDown } from "react-icons/bi";

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const router = useRouter();
  const [isOpen, setOpen] = useState(false);
  const t = useTranslations();
  const locale = useLocale();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const flagMap: Record<string, string> = {
    cn: "cn",
    en: "gb",
    id: "id",
    jp: "jp",
    kr: "kr",
    th: "th",
  };
  // Flag getter for current language
  const currentFlag = flagMap[locale] ?? locale;
  // Dropdown handler
  const handleChanges = (locale: string) => {
    router.replace(pathname, { locale });
    setOpen(false);
  };
  //  QOL STUFF (For closing when clicking outside of the box)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="group text-white w-full h-8">
        <button
          onClick={() => setOpen(!isOpen)}
          className="inline-flex group-hover:bg-midnight-400 w-full h-full items-center justify-center content-center"
        >
          <span className={`fi fi-${currentFlag} rounded`}></span>
          <BiChevronDown />
        </button>
      </div>
      {isOpen && (
        <div className="absolute left-0 mt-1 w-32 origin-top-left rounded-md shadow-lg bg-midnight-800 border border-midnight-500 z-20 text-white">
          <div className="py-1 flex flex-col">
            {routing.locales.map((locale) => {
              const flag = flagMap[locale] ?? locale;
              return (
                <button
                  key={locale}
                  onClick={() => handleChanges(locale)}
                  className="hover:bg-midnight-400 text-left p-0.5 m-1"
                >
                  <span
                    className={`fi fi-${flagMap[locale]} mr-1 rounded`}
                  ></span>
                  {t("language." + locale)}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
