"use client";

import { BuildingOffice2Icon as OutlineBuildingIcon } from "@heroicons/react/24/outline";
import { BuildingOffice2Icon as SolidBuildingIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TabBar() {
  const pathname = usePathname();

  const tabs = [
    {
      path: "/properties",
      unClickedIcon: OutlineBuildingIcon,
      clickedIcon: SolidBuildingIcon,
      title: "내 리스트",
    },
  ];

  return (
    <div className="fixed bottom-0 mx-auto grid w-full max-w-screen-sm grid-cols-5 border-t border-t-base-300 bg-base-200">
      {tabs.map((tab, index) => (
        <Link
          key={index}
          href={tab.path}
          className="flex flex-col items-center p-2.5 *:text-neutral"
        >
          {pathname === tab.path ? (
            <tab.clickedIcon className="size-5" />
          ) : (
            <tab.unClickedIcon className="size-5" />
          )}
          <span className="text-xs font-bold">{tab.title}</span>
        </Link>
      ))}
    </div>
  );
}
