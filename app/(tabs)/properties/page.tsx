import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ListProperty from "./list-property";
import db from "@/lib/db";

export default async function PropertiesPage() {
  const properties = await db.property.findMany({
    select: {
      id: true,
      propertyName: true,
      transactionType: true,
      address: true,
      photos: { select: { id: true, url: true, description: true } },
    },
  });

  return (
    <div className="flex flex-col p-5">
      {properties.map((property) => (
        <ListProperty
          key={property.id}
          id={property.id}
          title={property.propertyName}
          address={property.address}
          transactionType={property.transactionType}
          photos={property.photos}
        />
      ))}
      <Link href="/properties/add" className="btn mt-2.5">
        <PlusIcon className="size-5" />
        <span>새로운 매물 추가하기</span>
      </Link>
    </div>
  );
}
