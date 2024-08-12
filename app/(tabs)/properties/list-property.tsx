import Image from "next/image";
import Link from "next/link";

interface PropertyProps {
  id: number;
  title: string;
  address: string | null;
  transactionType: string;
  photos: Photo[];
}

interface Photo {
  id: number;
  url: string;
  description: string;
}

export default function ListProperty({
  id,
  photos = [],
  title,
  address,
  transactionType,
}: PropertyProps) {
  return (
    <Link
      href={`/properties/${id}`}
      className="flex gap-5 rounded-box p-2.5 transition-all hover:bg-base-200"
    >
      {photos.length !== 0 ? (
        <div className="relative size-28 overflow-hidden rounded-box">
          <Image
            fill
            src={photos[0].url}
            alt={photos[0].description}
            className="object-cover"
          />
        </div>
      ) : (
        <div className="size-28 rounded-box bg-accent" />
      )}
      <div className="flex flex-col">
        <span className="text-2xl font-bold">{title}</span>
        <span>{address}</span>
        <span>{transactionType}</span>
      </div>
    </Link>
  );
}
