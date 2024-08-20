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
        <div className="relative size-28 shrink-0 overflow-hidden rounded-box">
          <Image
            fill
            sizes="50vw"
            priority
            src={photos[0].url}
            alt={photos[0].description}
            className="object-cover"
          />
        </div>
      ) : (
        <div className="size-28 shrink-0 rounded-box bg-accent" />
      )}
      <div className="flex w-full justify-between">
        <div className="flex flex-col">
          <span className="text-2xl font-bold">{title}</span>
          <span>{address}</span>
          <span>{transactionType}</span>
        </div>
        <div className="rating items-center px-5">
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
          <input
            type="radio"
            name="rating-2"
            className="mask mask-star-2 bg-orange-400"
          />
        </div>
      </div>
    </Link>
  );
}
