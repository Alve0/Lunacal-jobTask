"use client";

import { useState, useRef, useEffect, useLayoutEffect } from "react";

interface Tab {
  id: string;
  label: string;
}

export default function Navigation() {
  const [activeTab, setActiveTab] = useState<string>("about-me");
  const [indicatorStyle, setIndicatorStyle] = useState<{
    left: number;
    width: number;
  }>({ left: 0, width: 0 });

  const navRef = useRef<HTMLUListElement | null>(null);

  const tabs: Tab[] = [
    { id: "about-me", label: "About me" },
    { id: "experiences", label: "Experiences" },
    { id: "recommended", label: "Recommended" },
  ];

  useLayoutEffect(() => {
    const activeElement = navRef.current?.querySelector<HTMLLIElement>(
      `[data-tab="${activeTab}"]`
    );
    if (activeElement) {
      const { offsetLeft, offsetWidth } = activeElement;
      setIndicatorStyle({ left: offsetLeft, width: offsetWidth });
    }
  }, [activeTab]);

  return (
    <div className="w-full">
      <nav>
        <ul
          ref={navRef}
          className="relative flex gap-6 text-[#A3ADB2] p-2 items-center justify-around rounded-2xl bg-[#171717] text-lg font-medium cursor-pointer overflow-hidden"
        >
          {/* Sliding Indicator */}
          <span
            className="absolute top-2 bottom-2 bg-[#28292F] rounded-lg shadow-[0_4px_15px_#0A0A0A] transition-all duration-300 ease-in-out"
            style={{
              left: `${indicatorStyle.left}px`,
              width: `${indicatorStyle.width}px`,
            }}
          ></span>

          {tabs.map((tab) => (
            <li
              key={tab.id}
              data-tab={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative z-10 px-[24px] py-[10px] transition-all duration-200 ${
                activeTab === tab.id
                  ? "text-white"
                  : "text-[#A3ADB2] hover:text-white"
              }`}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
