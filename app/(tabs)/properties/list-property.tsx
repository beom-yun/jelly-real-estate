import Link from "next/link";

interface PropertyProps {
  id: number;
  photo: string;
  title: string;
  address: string;
}

export default function ListProperty({
  id,
  photo,
  title,
  address,
}: PropertyProps) {
  return (
    <Link
      href={`/properties/${id}`}
      className="flex gap-5 rounded-box p-2.5 transition-all hover:bg-base-200"
    >
      <div className="size-28 rounded-box bg-primary">{photo}</div>
      <div className="flex flex-col">
        <span>{title}</span>
        <span>{address}</span>
        {/* <span>{createdAt.toString()}</span> */}
      </div>
    </Link>
  );
}
