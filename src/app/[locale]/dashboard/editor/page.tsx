"use client";

import { comboboxtypes } from "@/components/interface/comboboxtype";
import { useSidebar } from "@/components/SidebarContext";
import { filterPls } from "@/lib/filterpls";
import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import clsx from "clsx";
import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { FiCheck, FiChevronDown } from "react-icons/fi";

// Replace this with database later :D
const temp_dev_placeholder: comboboxtypes[] = [
  { id: 1, name: `HoYoverse` },
  { id: 2, name: `Kuro Games` },
  { id: 3, name: `Papergames` },
  { id: 4, name: `SHIFT UP` },
  { id: 5, name: `Hypergryph` },
  { id: 6, name: `Yostar` },
  { id: 7, name: `Aniplex` },
  { id: 8, name: `Bandai Namco` },
  { id: 9, name: `DeNA` },
  { id: 10, name: `Bluepoch` },
  { id: 11, name: `GungHo` },
  { id: 12, name: `Cygames` },
  { id: 13, name: `XFLAG` },
  { id: 14, name: `Level Infinite` },
  { id: 15, name: `Devsisters` },
  { id: 16, name: `PONOS` },
  { id: 17, name: `Com2uS` },
  { id: 18, name: `NetEase` },
  { id: 19, name: `NEXON` },
  { id: 20, name: `Other` },
];

const temp_engine_placeholder: comboboxtypes[] = [
  { id: 1, name: `Cocos2D` },
  { id: 2, name: `CryEngine` },
  { id: 3, name: `Frostbite` },
  { id: 4, name: `GameMaker Studio` },
  { id: 5, name: `Godot` },
  { id: 6, name: `RPG Maker` },
  { id: 7, name: `Source Engine` },
  { id: 8, name: `Unity` },
  { id: 9, name: `Unreal Engine` },
  { id: 10, name: `Other` },
];

export default function Page() {
  const { setSidebar } = useSidebar();
  const t = useTranslations(); // later use
  const locale = useLocale(); //later use

  // Form
  const [dev, setDev] = useState<comboboxtypes | null>();
  const [engine, setEngine] = useState<comboboxtypes | null>();
  const [devQuery, setDevQuery] = useState("");
  const [engineQuery, setEngineQuery] = useState("");
  const [notSureEngine, setNotSureEngine] = useState(false);
  const [notSureDev, setNotSureDev] = useState(false);
  const [TBA, setTBA] = useState(false);

  const isOtherDev = dev?.name === "Other";
  const isOtherEngine = engine?.name === "Other";

  const filterDev = filterPls(temp_dev_placeholder, devQuery);
  const filterEngine = filterPls(temp_engine_placeholder, engineQuery);

  useEffect(() => {
    setSidebar({
      search: true,
      group: [
        {
          group_name: "common.page-editor",
          items: [
            {
              name: "common.add-games",
              href: "/poll",
              icon: "/images/poll.svg",
            },
            {
              name: "common.add-items",
              href: "/poll",
              icon: "/images/poll.svg",
            },
            {
              name: "common.add-guides",
              href: "/poll",
              icon: "/images/poll.svg",
            },
            {
              name: "common.add-news",
              href: "/poll",
              icon: "/images/poll.svg",
            },
          ],
        },
      ],
    });
  }, [setSidebar]);

  return (
    <div className="w-full flex justify-center items-center lg:flex-row flex-col">
      <div className="flex-1 bg-midnight-600 m-4 rounded p-2">
        <form action="" method="post">
          <h1 className="mt-4 text-2xl font-black text-amber-200 ms-2">
            Game Editor
          </h1>
          <div
            className={clsx(
              "text-white ms-2 text-sm bg-midnight-100/10 rounded p-2",
              "dark:text-midnight-100"
            )}
          >
            <ul>
              <li>
                Start by creating a Game category if you want to add a new game.
              </li>
              <li>Later, you can attach items to that Game category.</li>
              <li>
                "Items" isn't just for item like what it sounds, it can also
                include characters, artifacts, awards, and more.
              </li>
              <li>
                You can reference an item in a guide using{" "}
                <code className={clsx("bg-midnight-900/40 px-1")}>
                  &lt;id:itemid /&gt;
                </code>
                .
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-2  text-midnight-200 px-2">
            <div className="">
              <label htmlFor="" className="block font-bold">
                Game Name*
              </label>
              <input
                type="text"
                name="gamename"
                id="gamename"
                className={clsx(
                  "w-full rounded-lg border-none bg-white/10 py-1.5 px-3 text-sm/6 text-midnight-200",
                  "focus:not-data-focus:outline-none data-focus:outline-1 data-focus:-outline-offset-2 data-focus:outline-white/25",
                  "dark:bg-midnight-400/50 dark:text-midnight-200"
                )}
                placeholder="Honkai Star Rail"
                maxLength={100}
              />
              <span className="text-midnight-300 text-sm">
                Global game name, you could also add another language title by
                pressing + button below
              </span>
            </div>
            <div>
              <label htmlFor="" className="block font-bold">
                Developer
              </label>
              <Combobox
                onChange={(value) => setDev(value as comboboxtypes)}
                onClose={() => setDevQuery("")}
              >
                <div className="relative">
                  <ComboboxInput
                    className={clsx(
                      "w-full rounded-lg border-none bg-white/10 py-1.5 pr-8 pl-3 text-sm/6 text-midnight-200",
                      "focus:not-data-focus:outline-none data-focus:outline-1 data-focus:-outline-offset-2 data-focus:outline-white/25",
                      "dark:bg-midnight-400/50 dark:text-midnight-200"
                    )}
                    displayValue={(dev: comboboxtypes) => dev?.name}
                    onChange={(event) => setDevQuery(event.target.value)}
                  />

                  {!devQuery && !dev && (
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-midnight-300 pointer-events-none">
                      Select Developer...
                    </span>
                  )}

                  <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                    <FiChevronDown className="size-4 fill-white/60 group-data-hover:fill-white" />
                  </ComboboxButton>
                </div>

                <ComboboxOptions
                  anchor="bottom"
                  transition
                  className={clsx(
                    "w-(--input-width) rounded-xl border border-midnight-100/5 bg-midnight-500 p-1 [--anchor-gap:--spacing(1)] empty:invisible",
                    "transition duration-100 ease-in data-leave:data-closed:opacity-0"
                  )}
                >
                  {filterDev.map((dev) => (
                    <ComboboxOption
                      key={dev.id}
                      value={dev}
                      className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/10"
                    >
                      <FiCheck className="invisible size-4 fill-white group-data-selected:visible" />
                      <div className="text-sm/6 text-midnight-200">
                        {dev.name}
                      </div>
                    </ComboboxOption>
                  ))}
                </ComboboxOptions>
              </Combobox>
              <span className="text-midnight-300 text-sm">
                Choose "Other" not sure or if nothing match
              </span>
            </div>
            {isOtherDev && (
              <div>
                <label htmlFor="" className="block font-bold">
                  Other Developer*
                </label>
                <input
                  type="text"
                  name="developer"
                  id="developer"
                  className={clsx(
                    "bg-midnight-400 w-full rounded border border-midnight-200/30 placeholder:text-midnight-300 p-1",
                    "disabled:hidden"
                  )}
                  placeholder="HoYoverse"
                  maxLength={50}
                  disabled={notSureDev}
                />
                <label className="flex items-center gap-2 mt-2 text-midnight-300 text-sm cursor-pointer">
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <div className="relative w-5 h-5">
                      <input
                        type="checkbox"
                        checked={notSureDev}
                        onChange={(e) => setNotSureDev(e.target.checked)}
                        className="peer appearance-none w-full h-full bg-white border border-gray-300 rounded-sm checked:bg-blue-500 checked:border-blue-500 focus:outline-none"
                      />
                      <svg
                        className="pointer-events-none absolute inset-0 stroke-white opacity-0 peer-checked:opacity-100"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M3 8L6 11L11 3.5"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <span>Not sure</span>
                </label>
              </div>
            )}
            <div>
              <label htmlFor="" className="block font-bold">
                Game Engine*
              </label>
              <Combobox
                onChange={(value) => setEngine(value as comboboxtypes)}
                onClose={() => setEngineQuery("")}
              >
                <div className="relative">
                  <ComboboxInput
                    className={clsx(
                      "w-full rounded-lg border-none bg-white/10 py-1.5 pr-8 pl-3 text-sm/6 text-midnight-200",
                      "focus:not-data-focus:outline-none data-focus:outline-1 data-focus:-outline-offset-2 data-focus:outline-white/25",
                      "dark:bg-midnight-400/50 dark:text-midnight-200"
                    )}
                    displayValue={(engine: comboboxtypes) => engine?.name}
                    onChange={(event) => setEngineQuery(event.target.value)}
                  />

                  {!engineQuery && !engine && (
                    <span className="absolute left-3 top-1/2 -translate-y-1/2 text-sm text-midnight-300 pointer-events-none">
                      Select Game Engine...
                    </span>
                  )}

                  <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5">
                    <FiChevronDown className="size-4 fill-white/60 group-data-hover:fill-white" />
                  </ComboboxButton>
                </div>

                <ComboboxOptions
                  anchor="bottom"
                  transition
                  className={clsx(
                    "w-(--input-width) rounded-xl border border-midnight-100/5 bg-midnight-500 p-1 [--anchor-gap:--spacing(1)] empty:invisible",
                    "transition duration-100 ease-in data-leave:data-closed:opacity-0"
                  )}
                >
                  {filterEngine.map((engine) => (
                    <ComboboxOption
                      key={engine.id}
                      value={engine}
                      className="group flex cursor-default items-center gap-2 rounded-lg px-3 py-1.5 select-none data-focus:bg-white/10"
                    >
                      <FiCheck className="invisible size-4 fill-white group-data-selected:visible" />
                      <div className="text-sm/6 text-midnight-200">
                        {engine.name}
                      </div>
                    </ComboboxOption>
                  ))}
                </ComboboxOptions>
              </Combobox>
              <span className="text-midnight-300 text-sm">
                Choose "Other" not sure or if nothing match
              </span>
            </div>
            {isOtherEngine && (
              <div>
                <label htmlFor="" className="block font-bold">
                  Other Game Engine
                </label>
                <input
                  type="text"
                  name="developer"
                  id="developer"
                  className={clsx(
                    "bg-midnight-400 w-full rounded border border-midnight-200/30 placeholder:text-midnight-300 p-1 mt-2",
                    "disabled:hidden"
                  )}
                  placeholder="Other game engine"
                  maxLength={50}
                  disabled={notSureEngine}
                />
                <label className="flex items-center gap-2 mt-2 text-midnight-300 text-sm cursor-pointer">
                  <div className="relative w-12 h-12 flex items-center justify-center">
                    <div className="relative w-5 h-5">
                      <input
                        type="checkbox"
                        checked={notSureEngine}
                        onChange={(e) => setNotSureEngine(e.target.checked)}
                        className="peer appearance-none w-full h-full bg-white border border-gray-300 rounded-sm checked:bg-blue-500 checked:border-blue-500 focus:outline-none"
                      />
                      <svg
                        className="pointer-events-none absolute inset-0 stroke-white opacity-0 peer-checked:opacity-100"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M3 8L6 11L11 3.5"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <span>Not sure</span>
                </label>
              </div>
            )}
            <div className="relative">
              <label htmlFor="release-date" className="block font-bold">
                Release Date*
              </label>
              <input
                type="date"
                name="release-date"
                id="release-date"
                className={clsx(
                  " rounded-lg border-none bg-white/10 py-1.5 px-3 text-sm/6 text-midnight-200",
                  "focus:not-data-focus:outline-none data-focus:outline-1 data-focus:-outline-offset-2 data-focus:outline-white/25",
                  "dark:bg-midnight-400/50 dark:text-midnight-200",
                  "disabled:hidden"
                )}
                disabled={TBA}
                defaultValue={new Date().toISOString().split("T")[0]}
              />
              <label className="flex items-center gap-2 mt-2 text-midnight-300 text-sm cursor-pointer">
                <div className="relative w-12 h-12 flex items-center justify-center">
                  <div className="relative w-5 h-5">
                    <input
                      type="checkbox"
                      checked={TBA}
                      onChange={(e) => setTBA(e.target.checked)}
                      className="peer appearance-none w-full h-full bg-white border border-gray-300 rounded-sm checked:bg-blue-500 checked:border-blue-500 focus:outline-none"
                    />
                    <svg
                      className="pointer-events-none absolute inset-0 stroke-white opacity-0 peer-checked:opacity-100"
                      viewBox="0 0 14 14"
                      fill="none"
                    >
                      <path
                        d="M3 8L6 11L11 3.5"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
                <span>No Released Date/TBA</span>
              </label>
            </div>

            <div>
              <label htmlFor="" className="block font-bold">
                Game Icon
              </label>
              <div className="flex flex-row h-40 gap-4">
                <div className="flex flex-col flex-2/3">
                  <input
                    type="text"
                    name="developer"
                    id="developer"
                    className={clsx(
                      "rounded-lg border-none bg-white/10 py-1.5 px-3 text-sm/6 text-midnight-200 grow",
                      "focus:not-data-focus:outline-none data-focus:outline-1 data-focus:-outline-offset-2 data-focus:outline-white/25",
                      "dark:bg-midnight-400/50 dark:text-midnight-200"
                    )}
                    placeholder="Click here or drag and drop image file"
                    maxLength={50}
                  />
                </div>
                <div className="h-full flex justify-center items-center flex-1/3 ">
                  <img
                    src="/images/general/ico_rank_game.webp"
                    alt=""
                    className="object-contain h-full w-full max-w-[167px] max-h-[167px]"
                  />
                </div>
              </div>
              <span className="text-midnight-300 text-sm">
                Game icon need to be 167 x 167 pixel, and under 300 kb
              </span>
            </div>
          </div>
        </form>
      </div>
      <div className="flex-1">{/* Preview Page */}</div>
    </div>
  );
}
