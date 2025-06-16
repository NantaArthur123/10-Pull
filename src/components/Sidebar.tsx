"use client";

import { useTranslations } from "next-intl";
import { useRef, useState } from "react";
import LanguageSwitcher from "./LangSwitcher";
import { useSidebar } from "./SidebarContext";

export default function Sidebar() {
  const t = useTranslations();
  const { sidebar } = useSidebar();
  const menuRef = useRef<HTMLDivElement>(null);
  const [isMenu, setMenu] = useState(false);
  if (!sidebar) return null;

  return (
    <div>
      {/* Desktop View */}
      <div className="fixed top-0 h-screen z-50">
        <div className="md:flex flex-row hidden">
          {/* Favourite Game list */}
          <div
            className={`top-0 left-0 z-40 w-12 h-screen transition-transform shadow-lg bg-midnight-900 border-r-blue-50/10 border flex-col`}
            aria-label="Sidebar"
          >
            <div>
              <LanguageSwitcher />
            </div>
            <div className="flex flex-col gap-2 p-1 items-center justify-center h-full">
              <a href="/endfield">
                <img
                  src="/images/endfield/icon.webp"
                  alt="arknight endfield"
                  className="rounded not-hover:opacity-60"
                />
              </a>
              <a href="/wutheringwaves">
                <img
                  src="/images/wutheringwaves/icon.webp"
                  alt="wuthering waves"
                  className="rounded not-hover:opacity-60"
                />
              </a>
              <a href="/silverpalace">
                <img
                  src="/images/silverpalace/icon.webp"
                  alt="silver palace"
                  className="rounded not-hover:opacity-60"
                />
              </a>
              <a href="/ananta">
                <img
                  src="/images/ananta/icon.webp"
                  alt="ananta"
                  className="rounded not-hover:opacity-60"
                />
              </a>
              <a href="/genshin">
                <img
                  src="/images/genshin/icon.webp"
                  alt="genshin impact"
                  className="rounded not-hover:opacity-60"
                />
              </a>
            </div>
          </div>
          {/* Sidebar */}
          <div
            className={`w-64 h-screen transition-transform shadow-lg bg-midnight-800`}
            aria-label="Sidebar"
          >
            <div className="flex flex-col h-full">
              <div className=" px-4 py-2 m-2 bg-midnight-400 rounded flex-none">
                <div className="flex flex-row gap-4 ">
                  <img
                    src="/images/wutheringwaves/icon.webp"
                    alt=""
                    className="rounded-full h-12"
                  />
                  <div className="h-full w-full">
                    <h1 className="text-white truncate max-w-36">より良い</h1>
                    <div className="text-midnight-200 text-sm w-full">
                      Supporter
                    </div>
                  </div>
                </div>
                <div className="text-white p-2 flex flex-row gap-4 items-center justify-center">
                  <button className="bg-amber-800 px-2 py-1 rounded cursor-pointer">
                    {t("auth.login")}
                  </button>
                  <button className="bg-amber-800 px-2 py-1 rounded cursor-pointer">
                    {t("auth.sign-up")}
                  </button>
                </div>
              </div>
              <div
                className=" grow overflow-y-auto
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-midnight-100
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-midnight-300
            dark:[&::-webkit-scrollbar-track]:bg-midnight-900
            dark:[&::-webkit-scrollbar-thumb]:bg-midnight-400"
              >
                {sidebar.group?.map((group) => (
                  <div key={group.group_name} className="p-2">
                    {group.group_name && (
                      <h2 className="text-white font-bold">
                        {group.group_name}
                      </h2>
                    )}
                    <ul className="mt-2 space-y-2">
                      {group.items?.map((item) => (
                        <li key={item.name}>
                          <div className="bg-midnight-400 m-1 rounded overflow-hidden not-hover:opacity-90 transition-opacity">
                            <a
                              href={item.href}
                              className="relative flex items-center text-white group py-2 max-h-10"
                            >
                              {/* Icon behind text */}
                              {item.icon && (
                                <div
                                  className="absolute w-20 h-20 bg-midnight-500 group-hover:bg-white
                                        transition-all duration-300 ease-in-out opacity-10 group-hover:opacity-80
                                        mask mask-center mask-no-repeat mask-contain -translate-x-5 group-hover:-translate-x-3"
                                  style={{
                                    maskImage: `url(${item.icon})`,
                                    WebkitMaskImage: `url(${item.icon})`,
                                  }}
                                />
                              )}
                              {/* Text above the icon */}
                              <div className="relative z-10 ml-7  group-hover:ml-8  transition-all">
                                <span>{t(item.name || "")}</span>
                              </div>
                            </a>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {sidebar.search && (
                  <div className="text-white m-2 p-1 flex-col">
                    <form>
                      <div className="relative w-full">
                        <input
                          type="text"
                          id="search"
                          className="bg-midnight-500 rounded border border-midnight-200/30 p-1 w-full"
                          placeholder={t("common.search-placeholder")}
                        />
                        <button
                          type="submit"
                          className="absolute top-0 end-0 h-full rounded-e bg-midnight-400 p-2"
                        >
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg>
                        </button>
                      </div>
                    </form>
                    <div className="bg-midnight-900 w-full h-64 border border-amber-50/10 rounded my-4"></div>
                  </div>
                )}
                <div className="text-center m-2 p-1">
                  <h1 className="text-white italic text-sm">
                    {t("common.copyright-notice")}
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative" ref={menuRef}>
        <div className="h-15 w-32 fixed bottom-3 z-20 left-1/2 -translate-x-1/2">
          <div
            className={`flex rounded-lg  border border-midnight-100/10 h-full transition-colors ${
              isMenu ? "bg-midnight-400" : "bg-midnight-500"
            }`}
          >
            <button
              className="flex-col m-2 text-white text-center flex justify-center items-center w-full"
              onClick={() => setMenu(!isMenu)}
            >
              <div className="h-5 w-5 mb-1 flex justify-center items-center">
                <div
                  className={`bg-midnight-100 rounded transition-all ${
                    isMenu ? "h-5 w-5" : "h-3 w-3"
                  }`}
                ></div>
              </div>
              <span className="text-xs">MENU</span>
            </button>
          </div>
        </div>
        {/* Menu Open */}
        <div className="">
          <div
            className={`z-19 flex border border-midnight-300/10 fixed bg-midnight-500 pb-20 rounded left-1/2 -translate-x-1/2 w-[400px] max-w-[calc(100%-2rem)] ${
              isMenu ? "bottom-0" : "-bottom-full"
            } transition-all`}
          >
            <div className="">
              <div className="flex-col items-center mx-4 my-2 flex">
                {sidebar.group?.map((group) => (
                  <div key={group.group_name}>
                    {group.group_name && (
                      <div className="flex-col mt-4">
                        <h2 className="text-white font-bold">
                          {group.group_name}
                        </h2>
                        <div className="grid gap-2 grid-cols-5">
                          {group.items?.map((item) => (
                            <a href={item.href} key={item.name}>
                              <div className="relative  aspect-square rounded  overflow-hidden p-2">
                                {item.icon && (
                                  <img
                                    src={item.icon}
                                    alt=""
                                    className="rounded transition-transform bg-midnight-100"
                                  />
                                )}
                              </div>
                              {item.name && (
                                <h1 className="text-xs bottom-0  left-0 right-0 text-white text-center">
                                  {t(item.name)}
                                </h1>
                              )}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                {sidebar.search && (
                  <div className="flex-col mt-4 w-full">
                    <h2 className="text-white font-bold">Search</h2>
                    <form className="p-2">
                      <div className="relative flex">
                        <input
                          type="text"
                          id="search"
                          className="bg-midnight-500 rounded-s border border-midnight-200/30 p-1 placeholder-midnight-300 focus:ring-0 focus:outline-0 w-15 grow text-white"
                          placeholder={t("common.search-placeholder")}
                        />
                        <button className="w-22 flex-none bg-midnight-400 border-y border-midnight-200/30 text-xs px-2 inline-flex items-center justify-center text-white shrink-0">
                          All Category
                          <svg
                            className="w-2.5 h-2.5 ms-2.5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 10 6"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m1 1 4 4 4-4"
                            />
                          </svg>
                        </button>
                        <button
                          type="submit"
                          className="w-15 flex top-0 end-0 rounded-e bg-midnight-400 justify-center items-center border border-midnight-200/30 shrink-0 text-white"
                        >
                          <svg
                            className="w-4 h-4"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 20"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                            />
                          </svg>
                        </button>
                      </div>
                    </form>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
