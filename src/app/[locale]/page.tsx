"use client";

import { useSidebar } from "@/components/SidebarContext";
import { useTranslations } from "next-intl";
import { useEffect } from "react";

export default function HomePage() {
  const t = useTranslations();
  const { setSidebar } = useSidebar();
  useEffect(() => {
    setSidebar({
      search: true,
      group: [
        {
          group_name: "Polls",
          items: [
            {
              name: "common.characters-ranking",
              href: "/poll",
              icon: "/images/poll.svg",
            },
            {
              name: "common.game-ranking",
              href: "/poll",
              icon: "/images/star.svg",
            },
            {
              name: "common.vote-now",
              href: "/poll",
              icon: "/images/poll.svg",
            },
          ],
        },
        {
          group_name: "Post",
          items: [
            {
              name: "common.general-post",
              href: "/post",
              icon: "/images/poll.svg",
            },
          ],
        },
      ],
    });
  }, [setSidebar]);

  return (
    <main className="flex-1 p-4">
      <section className="mb-8">
        <div className="relative overflow-hidden">
          {/* Top 1 */}
          <div className="relative z-11 pointer-events-none">
            <div className="relative left-1/2 -translate-x-1/2">
              {/* Top 1 Name */}
              <div className="absolute text-white md:top-0 top-20 left-1/2 -translate-x-1/2 z-0 -translate-y-20">
                <h1 className="md:text-[250px] text-[30vw] uppercase bg-gradient-to-bl from-blue-300 via-red-300 to-blue-500 bg-clip-text text-transparent">
                  {t("wutheringwaves.characters.zanni")}
                </h1>
                <span className="md:text-5xl text-[5vw] italic absolute md:bottom-10 bottom-6">
                  {t("game.wutheringwaves")}
                </span>
              </div>
              {/* Top 1 voted */}
              <img
                src="/images/wutheringwaves/characters/zanni.webp"
                alt="Male Rover"
                className="relative object-cover h-[700px] object-center z-10 left-1/2 -translate-x-1/2 hover:scale-105 transition-transform pointer-events-auto"
              />
            </div>
          </div>
          {/* Top 2 */}
          <div className="absolute bottom-0 left-10 z-10 hidden xl:block">
            <div className="relative ">
              {/* Top 2 Name */}
              <div className="absolute text-white -top-40 left-10 z-0 rotate-90 origin-left">
                <h1 className="text-[100px] uppercase">
                  {t("wutheringwaves.characters.phoebe")}
                </h1>
                <span className="text-3xl italic absolute bottom-0">
                  {t("game.wutheringwaves")}
                </span>
              </div>
              {/* Top 2 voted */}
              <img
                src="/images/wutheringwaves/characters/phoebe.webp"
                alt="Phoebe"
                className="relative object-cover h-[600px] object-center left-1/2 -translate-x-1/2 z-10 
                hover:scale-105 transition-transform"
              />
            </div>
          </div>
          {/* Top 3 */}
          <div className="absolute bottom-0 right-10 z-10 hidden xl:block transition-all">
            <div className="relative">
              {/* Top 3 Name */}
              <div className="absolute text-white -top-37 -right-68 z-0 rotate-90 origin-left">
                <h1 className="text-[100px]  uppercase">
                  {t("wutheringwaves.characters.encore")}
                </h1>
                <span className="text-3xl italic absolute bottom-0">
                  {t("game.wutheringwaves")}
                </span>
              </div>
              {/* Top 3 voted */}
              <img
                src="/images/wutheringwaves/characters/anko.webp"
                alt="Anko"
                className="relative object-cover h-[600px] object-center left-1/2 -translate-x-1/2 z-10 hover:scale-105 transition-transform"
              />
            </div>
          </div>
          {/* decoration */}
          {/* <div className="absolute top-0 z-[-2] h-[2000px] w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]"></div> */}
          <div
            className="absolute w-330 h-140 bottom-0 left-1/2 -translate-x-1/2
          bg-dot"
          ></div>
        </div>
      </section>
      <section className="p-4 bg-midnight-800 rounded">
        <div className="flex items-center mb-4">
          <span className="text-white text-3xl font-bold">Supported Games</span>
          <div className="flex-grow h-px bg-midnight-100 ml-4"></div>
        </div>
        <div className="grid gap-8 grid-cols-[repeat(auto-fit,_minmax(80px,_1fr))] m-8">
          <div className="aspect-square not-hover:opacity-80 rounded  overflow-hidden">
            <a href="">
              <img
                src="/images/wutheringwaves/icon.webp"
                alt=""
                className="rounded hover:scale-105 transition-transform"
              />
            </a>
          </div>
          <div className="aspect-square not-hover:opacity-80 rounded  overflow-hidden">
            <a href="">
              <img
                src="/images/ananta/icon.webp"
                alt=""
                className="rounded hover:scale-105 transition-transform"
              />
            </a>
          </div>
          <div className="aspect-square not-hover:opacity-80 rounded  overflow-hidden">
            <a href="">
              <img
                src="/images/endfield/icon.webp"
                alt=""
                className="rounded hover:scale-105 transition-transform"
              />
            </a>
          </div>
          <div className="aspect-square not-hover:opacity-80 rounded  overflow-hidden">
            <a href="">
              <img
                src="/images/genshin/icon.webp"
                alt=""
                className="rounded hover:scale-105 transition-transform"
              />
            </a>
          </div>
          <div className="aspect-square not-hover:opacity-80 rounded  overflow-hidden">
            <a href="">
              <img
                src="/images/nte/icon.webp"
                alt=""
                className="rounded hover:scale-105 transition-transform"
              />
            </a>
          </div>
          <div className="aspect-square not-hover:opacity-80 rounded  overflow-hidden">
            <a href="">
              <img
                src="/images/silverpalace/icon.webp"
                alt=""
                className="rounded hover:scale-105 transition-transform"
              />
            </a>
          </div>
          <div className="aspect-square not-hover:opacity-80 rounded  overflow-hidden">
            <a href="">
              <img
                src="/images/starrail/icon.webp"
                alt=""
                className="rounded hover:scale-105 transition-transform"
              />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
