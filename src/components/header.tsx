"use client";

import { cn } from "@/lib/utils";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useState } from "react";
import { Logo } from "./logo";
import { ToggleTheme } from "./toggle-theme";

export function Header() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-4">
      <div
        className={cn(
          "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-background/90 backdrop-blur-sm border rounded-full transition-all duration-300 ease-in-out",
          { "bg-transparent backdrop-blur-none border-transparent": !scrolled }
        )}
      >
        <div className="flex justify-between items-center h-16">
          <div className="shrink-0">
            <h3
              className={cn(
                !scrolled && "bg-background rounded-full py-2 px-4 -ml-4"
              )}
            >
              <Logo />
            </h3>
          </div>

          <ToggleTheme />
        </div>
      </div>
    </nav>
  );
}
