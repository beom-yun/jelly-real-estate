import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ListProperty from "./list-property";

export default function PropertiesPage() {
  const properties = [
    {
      id: 1,
      title: "아파트",
      photo: "abc",
      address: "인천광역시 미추홀구",
    },
    {
      id: 2,
      title: "빌라",
      photo: "abc!",
      address: "인천광역시 남동구",
    },
    {
      id: 3,
      title: "다가구주택",
      photo: "ABCDE",
      address: "인천광역시 남동구",
    },
  ];

  return (
    <div className="flex flex-col p-5">
      {properties.map((property) => (
        <ListProperty
          key={property.id}
          id={property.id}
          title={property.title}
          photo={property.photo}
          address={property.address}
        />
      ))}
      <Link href="/properties/add" className="btn mt-2.5">
        <PlusIcon className="size-5" />
        <span>새로운 매물 추가하기</span>
      </Link>
    </div>
  );
}
