"use client";

import { useFormState } from "react-dom";
import { PropertyAddAction } from "./actions";

export default function PropertyAddPage() {
  const images = [
    {
      id: 1,
      src: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp",
      alt: "icecream",
    },
    {
      id: 2,
      src: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp",
      alt: "grape",
    },
    {
      id: 3,
      src: "https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp",
      alt: "lemon",
    },
    {
      id: 4,
      src: "https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp",
      alt: "bluelemon",
    },
    {
      id: 5,
      src: "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp",
      alt: "pineapple",
    },
    {
      id: 6,
      src: "https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp",
      alt: "cherry",
    },
    {
      id: 7,
      src: "https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp",
      alt: "strawberry",
    },
  ];
  const [state, dispatch] = useFormState(PropertyAddAction, null);

  return (
    <div className="flex flex-col gap-10 p-5">
      <span className="text-4xl font-bold">새 부동산</span>

      <form action={dispatch} className="flex flex-col gap-5">
        <label className="flex flex-col gap-1">
          <span className="text-lg font-bold">이름</span>
          <input
            name="propertyName"
            type="text"
            className="input input-bordered"
          />
        </label>
        <button className="btn bg-accent/50">만들기</button>
      </form>
    </div>
  );
}
