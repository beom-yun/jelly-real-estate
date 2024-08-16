import { notFound, redirect } from "next/navigation";
import { getIsOwner } from "@/lib/getIsOwner";
import db from "@/lib/db";
import PropertyEditForm from "./property-edit";

export default async function PropertyEditPage({
  params,
}: {
  params: { id: string };
}) {
  // const images = [
  //   {
  //     id: 1,
  //     src: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
  //     alt: "icecream",
  //   },
  //   {
  //     id: 2,
  //     src: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
  //     alt: "grape",
  //   },
  //   {
  //     id: 3,
  //     src: "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
  //     alt: "lemon",
  //   },
  //   {
  //     id: 4,
  //     src: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
  //     alt: "bluelemon",
  //   },
  //   {
  //     id: 5,
  //     src: "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
  //     alt: "pineapple",
  //   },
  //   {
  //     id: 6,
  //     src: "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
  //     alt: "cherry",
  //   },
  //   {
  //     id: 7,
  //     src: "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
  //     alt: "strawberry",
  //   },
  // ];

  // const [state, dispatch] = useFormState(PropertyEditAction, {
  //   propertyId: params.id,
  // });

  const id = Number(params.id);
  if (isNaN(id)) return notFound();

  const property = await db.property.findUnique({
    where: { id: +params.id },
    include: { photos: { select: { id: true, url: true, description: true } } },
  });
  if (!property) return notFound();

  const isOwner = await getIsOwner(property.userId);
  if (!isOwner) redirect(`/properties`);

  return <PropertyEditForm property={property} />;
}
