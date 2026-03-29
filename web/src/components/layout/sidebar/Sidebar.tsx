"use client";

import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import Link from "next/link";
import { useEffect, useId, useState } from "react";

import { SIDEBAR_OPEN_BY_DEFAULT } from "./sidebar.constants";

type SidebarProps = {
  defaultOpen?: boolean;
};

export function Sidebar({
  defaultOpen = SIDEBAR_OPEN_BY_DEFAULT,
}: SidebarProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const titleId = useId();

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-controls="app-sidebar"
        aria-expanded={isOpen}
        className={`fixed left-4 top-4 z-40 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-lg shadow-slate-300/35 transition-all hover:-translate-y-0.5 hover:bg-slate-50 ${
          isOpen ? "pointer-events-none opacity-0" : "opacity-100"
        }`}
      >
        <MenuRoundedIcon fontSize="small" />
      </button>

      <button
        type="button"
        aria-label="Fechar sidebar"
        onClick={() => setIsOpen(false)}
        className={`fixed inset-0 z-30 bg-slate-950/45 transition-opacity ${
          isOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <aside
        id="app-sidebar"
        role="dialog"
        aria-modal={isOpen}
        aria-hidden={!isOpen}
        aria-labelledby={titleId}
        className={`fixed inset-y-0 left-0 z-40 flex w-[min(88vw,20rem)] flex-col border-r border-slate-200 bg-white/95 shadow-2xl shadow-slate-950/15 backdrop-blur transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between border-b border-slate-200 px-5 py-5">

          <button
            type="button"
            aria-label="Fechar menu"
            onClick={() => setIsOpen(false)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition-colors hover:bg-slate-100"
          >
            <CloseRoundedIcon fontSize="small" />
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-2 p-4">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="group flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition-all hover:border-slate-300 hover:bg-white hover:text-slate-950"
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900 text-white transition-transform group-hover:scale-105">
              <HomeRoundedIcon fontSize="small" />
            </span>
            <span>Home</span>
          </Link>
        </nav>
      </aside>
    </>
  );
}
