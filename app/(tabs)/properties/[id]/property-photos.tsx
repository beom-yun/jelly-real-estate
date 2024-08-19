"use client";

import Image from "next/image";
import { IPhoto } from "./edit/property-edit";

export default function PropertyPhotos({ photos }: { photos: IPhoto[] }) {
  return (
    <>
      {photos.length !== 0 ? (
        <div className="grid grid-cols-2 gap-2.5">
          {photos.map((photo) => (
            <button
              onClick={() => console.log("clicked")}
              key={photo.id}
              className="relative aspect-square overflow-hidden rounded-box transition-all hover:scale-105 hover:brightness-110"
            >
              <Image
                key={photo.id}
                src={photo.url}
                alt={photo.description}
                fill
                className="object-cover"
              />
            </button>
          ))}
        </div>
      ) : (
        <div className="w-full text-center text-2xl font-bold">
          등록된 사진이 없습니다.
        </div>
      )}
    </>
  );
}
