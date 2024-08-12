"use client";

import {
  BuildingOffice2Icon as OutlineBuildingIcon,
  UserIcon as OutlineUserIcon,
} from "@heroicons/react/24/outline";
import {
  BuildingOffice2Icon as SolidBuildingIcon,
  UserIcon as SolidUserIcon,
} from "@heroicons/react/24/solid";
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
    {
      path: "/profile",
      unClickedIcon: OutlineUserIcon,
      clickedIcon: SolidUserIcon,
      title: "마이페이지",
    },
  ];

  return (
    <div className="btm-nav mx-auto max-w-screen-md bg-base-200">
      {tabs.map((tab, index) => (
        <Link
          key={index}
          href={tab.path}
          className={pathname === tab.path ? "border-t-2" : ""}
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
