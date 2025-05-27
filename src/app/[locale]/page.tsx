import LanguageSwitcher from "@/components/LangSwitcher";
import Sidebar from "@/components/Sidebar";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function HomePage() {
  const t = useTranslations("HomePage");

  return (
    <div className="flex bg-midnight-500">
      <Sidebar />
      <main className="flex-1 p-4 ml-48">
        <h1 className="text-2xl font-bold">{t("title")}</h1>
        <Link href="/about" className="text-blue-600 underline">
          {t("about")}
        </Link>

        <div className="mt-4">
          <LanguageSwitcher />
        </div>
      </main>
    </div>
  );
}
