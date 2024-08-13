import { PlusIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import ListProperty from "./list-property";
import db from "@/lib/db";
import getSession from "@/lib/session";

export default async function PropertiesPage() {
  const session = await getSession();
  const properties = await db.property.findMany({
    where: { userId: session.id },
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
      {properties.length !== 0 ? (
        properties.map((property) => (
          <ListProperty
            key={property.id}
            id={property.id}
            title={property.propertyName}
            address={property.address}
            transactionType={property.transactionType}
            photos={property.photos}
          />
        ))
      ) : (
        <span className="pb-2.5 text-center text-2xl font-bold">
          등록된 부동산이 없습니다.
        </span>
      )}
      <Link href="/properties/add" className="btn mt-2.5">
        <PlusIcon className="size-5" />
        <span>새로운 부동산 추가하기</span>
      </Link>
    </div>
  );
}
