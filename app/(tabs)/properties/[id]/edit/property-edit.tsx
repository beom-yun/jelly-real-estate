"use client";

import { getFormattedDate } from "@/lib/utils";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import { useFormState } from "react-dom";
import { createPhoto, getUploadUrl, PropertyEditAction } from "./actions";
import { useState } from "react";

export interface IPhoto {
  id: number;
  url: string;
  description: string;
}

export interface IProperty {
  id: number;
  propertyName: string;
  transactionType: string;
  deposit: number | null;
  maintenanceCost: number | null;
  address: string | null;
  year: string | null;
  commonArea: number | null;
  dedicatedArea: number | null;
  livingRoom: string | null;
  room: string | null;
  toilet: string | null;
  veranda: string | null;
  parkingLot: string | null;
  etc: string | null;
  loanAvailability: boolean;
  moveInAvailability: boolean;
  contractPeriod: string | null;
  gasFee: boolean;
  electricityFee: boolean;
  waterFee: boolean;
  cleaningFee: boolean;
  parkingFee: boolean;
  etcFee: string | null;
  moveInDate: Date | null;
  option: string | null;
  airConditioner: boolean;
  boiler: boolean;
  warmWater: boolean;
  generalWaste: boolean;
  foodWaste: boolean;
  recyclableWaste: boolean;
  commonEntrance: boolean;
  cctv: boolean;
  securityOffice: boolean;
  naturalLighting: string | null;
  soundproof: string | null;
  window: string | null;
  ventilationFacility: string | null;
  waterPressure: string | null;
  drainage: string | null;
  drainSmell: string | null;
  lighting: string | null;
  ceilingFloor: string | null;
  kitchenTile: boolean;
  toiletTile: boolean;
  entranceTile: boolean;
  waterLeak: string | null;
  mold: string | null;
  appraisal: string | null;
  userId: number;
  created_at: Date;
  updated_at: Date;
  photos: IPhoto[];
}

export default function PropertyEditForm({
  property,
}: {
  property: IProperty;
}) {
  const [state, dispatch] = useFormState(PropertyEditAction, {
    propertyId: property.id + "",
  });
  const [photoList, setPhotoList] = useState<IPhoto[]>(property.photos);
  const addPhoto = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { files },
    } = event;
    if (!files) return;

    for (let i = 0; i < files.length; i++) {
      const cloudflareForm = new FormData();
      cloudflareForm.append("file", files[i]);
      const newPhoto = await createPhoto(cloudflareForm, property.id);
      if (newPhoto) {
        const newPhotoList = [...photoList, newPhoto];
        setPhotoList(newPhotoList);
      }
    }
  };
  const deletePhoto = (index: number) => {
    console.log(`${photoList[index].id} clicked!`);
  };

  return (
    <div className="flex flex-col gap-10 p-5">
      <span className="text-4xl font-bold">부동산 수정하기</span>

      <form action={dispatch} className="flex flex-col gap-5">
        <div className="join join-vertical">
          {/* 1.기본사항 */}
          <div className="collapse join-item collapse-arrow rounded-box border border-base-300 bg-base-200/50 text-xl font-bold">
            <input type="checkbox" name="accordion" defaultChecked />
            <span className="collapse-title">기본사항</span>
            <div className="collapse-content flex flex-col gap-2.5">
              <div className="flex flex-col gap-2.5 px-2.5">
                <span className="divider divider-start text-center text-xl font-bold">
                  0. 이름
                </span>
                <label className="flex flex-col gap-1">
                  <input
                    name="propertyName"
                    type="text"
                    className={`input input-bordered ${state.error?.fieldErrors.propertyName ? "input-error" : ""}`}
                    defaultValue={property.propertyName as string}
                  />
                </label>
                <span className="px-5 text-base text-red-500">
                  {state.error?.fieldErrors.propertyName}
                </span>
              </div>
              <div className="flex flex-col gap-2.5 px-2.5">
                <span className="divider divider-start text-center text-xl font-bold">
                  1. 가격
                </span>
                <div className="flex flex-col gap-1">
                  <span className="text-lg font-bold">분류</span>
                  <div className="flex items-center justify-center gap-2">
                    <label className="w-full">
                      <input
                        name="transactionType"
                        value="sale"
                        type="radio"
                        className="peer hidden"
                        defaultChecked={property.transactionType === "sale"}
                      />
                      <div
                        className={`btn w-full bg-base-100 peer-checked:bg-base-300`}
                      >
                        매매
                      </div>
                    </label>
                    <label className="w-full">
                      <input
                        name="transactionType"
                        value="lease"
                        type="radio"
                        className="peer hidden"
                        defaultChecked={property.transactionType === "lease"}
                      />
                      <div
                        className={`btn w-full bg-base-100 peer-checked:bg-base-300`}
                      >
                        전세
                      </div>
                    </label>
                    <label className="w-full">
                      <input
                        name="transactionType"
                        value="monthlyRent"
                        type="radio"
                        className="peer hidden"
                        defaultChecked={
                          property.transactionType === "monthlyRent"
                        }
                      />
                      <div
                        className={`btn w-full bg-base-100 peer-checked:bg-base-300`}
                      >
                        월세
                      </div>
                    </label>
                  </div>
                  {/* {state?.fieldErrors.transactionType ? (
                    <span className="text-base text-red-500">
                      {state.fieldErrors.transactionType}
                    </span>
                  ) : null} */}
                </div>
                <label className="flex flex-col gap-1">
                  <span className="text-lg font-bold">보증금</span>
                  <input
                    name="deposit"
                    type="number"
                    className="input input-bordered"
                    defaultValue={property.deposit as number}
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-lg font-bold">관리비</span>
                  <input
                    name="maintenanceCost"
                    type="number"
                    className="input input-bordered"
                    defaultValue={property.maintenanceCost as number}
                  />
                </label>
              </div>
              <div className="flex flex-col gap-2.5 px-2.5">
                <span className="divider divider-start text-center text-xl font-bold">
                  2. 주소
                </span>
                <label className="flex flex-col gap-1">
                  <span className="text-lg font-bold">주소</span>
                  <input
                    name="address"
                    type="text"
                    className="input input-bordered"
                    defaultValue={property.address as string}
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-lg font-bold">연식</span>
                  <input
                    name="year"
                    type="text"
                    className="input input-bordered"
                    defaultValue={property.year as string}
                  />
                </label>
              </div>
              <div className="flex flex-col gap-2.5 px-2.5">
                <span className="divider divider-start text-center text-xl font-bold">
                  3. 면적
                </span>
                <div className="flex gap-5">
                  <label className="flex w-full flex-col gap-1">
                    <span className="text-lg font-bold">공용(평수)</span>
                    <input
                      name="commonArea"
                      type="number"
                      className="input input-bordered"
                      defaultValue={property.commonArea as number}
                    />
                  </label>
                  <label className="flex w-full flex-col gap-1">
                    <span className="text-lg font-bold">전용(평수)</span>
                    <input
                      name="dedicatedArea"
                      type="number"
                      className="input input-bordered"
                      defaultValue={property.dedicatedArea as number}
                    />
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 px-2.5">
                <span className="divider divider-start text-center text-xl font-bold">
                  4. 구조
                </span>
                <div className="flex gap-5">
                  <label className="flex w-full flex-col gap-1">
                    <span className="text-lg font-bold">거실</span>
                    <input
                      name="livingRoom"
                      type="text"
                      className="input input-bordered"
                      defaultValue={property.livingRoom as string}
                    />
                  </label>
                  <label className="flex w-full flex-col gap-1">
                    <span className="text-lg font-bold">방</span>
                    <input
                      name="room"
                      type="text"
                      className="input input-bordered"
                      defaultValue={property.room as string}
                    />
                  </label>
                </div>
                <div className="flex gap-5">
                  <label className="flex w-full flex-col gap-1">
                    <span className="text-lg font-bold">화장실</span>
                    <input
                      name="toilet"
                      type="text"
                      className="input input-bordered"
                      defaultValue={property.toilet as string}
                    />
                  </label>
                  <label className="flex w-full flex-col gap-1">
                    <span className="text-lg font-bold">베란다</span>
                    <input
                      name="veranda"
                      type="text"
                      className="input input-bordered"
                      defaultValue={property.veranda as string}
                    />
                  </label>
                </div>
                <div className="flex gap-5">
                  <label className="flex w-full flex-col gap-1">
                    <span className="text-lg font-bold">주차장</span>
                    <input
                      name="parkingLot"
                      type="text"
                      className="input input-bordered"
                      defaultValue={property.parkingLot as string}
                    />
                  </label>
                  <label className="flex w-full flex-col gap-1">
                    <span className="text-lg font-bold">기타</span>
                    <input
                      name="etc"
                      type="text"
                      className="input input-bordered"
                      defaultValue={property.etc as string}
                    />
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 px-2.5">
                <span className="divider divider-start text-center text-xl font-bold">
                  5. 거래
                </span>
                <div className="flex items-center justify-center gap-2">
                  <label className="w-full">
                    <input
                      name="loanAvailability"
                      type="checkbox"
                      className="peer hidden"
                      defaultChecked={property.loanAvailability}
                    />
                    <div className="btn w-full bg-base-100 peer-checked:bg-base-300">
                      대출 가능 여부
                    </div>
                  </label>
                  <label className="w-full">
                    <input
                      name="moveInAvailability"
                      type="checkbox"
                      className="peer hidden"
                      defaultChecked={property.moveInAvailability}
                    />
                    <div className="btn w-full bg-base-100 peer-checked:bg-base-300">
                      전입신고 가능 여부
                    </div>
                  </label>
                </div>
                <label className="flex w-full flex-col gap-1">
                  <span className="text-lg font-bold">계약 기간</span>
                  <input
                    name="contractPeriod"
                    type="text"
                    className="input input-bordered"
                    defaultValue={property.contractPeriod as string}
                  />
                </label>
              </div>
              <div className="flex flex-col gap-2.5 px-2.5">
                <span className="divider divider-start text-center text-xl font-bold">
                  6. 관리비 포함
                </span>
                <div className="flex items-center justify-center gap-2">
                  <label className="w-full">
                    <input
                      name="gasFee"
                      type="checkbox"
                      className="peer hidden"
                      defaultChecked={property.gasFee}
                    />
                    <div className="btn w-full bg-base-100 peer-checked:bg-base-300">
                      가스
                    </div>
                  </label>
                  <label className="w-full">
                    <input
                      name="electricityFee"
                      type="checkbox"
                      className="peer hidden"
                      defaultChecked={property.electricityFee}
                    />
                    <div className="btn w-full bg-base-100 peer-checked:bg-base-300">
                      전기
                    </div>
                  </label>
                  <label className="w-full">
                    <input
                      name="waterFee"
                      type="checkbox"
                      className="peer hidden"
                      defaultChecked={property.waterFee}
                    />
                    <div className="btn w-full bg-base-100 peer-checked:bg-base-300">
                      수도
                    </div>
                  </label>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <label className="w-full">
                    <input
                      name="cleaningFee"
                      type="checkbox"
                      className="peer hidden"
                      defaultChecked={property.cleaningFee}
                    />
                    <div className="btn w-full bg-base-100 peer-checked:bg-base-300">
                      청소
                    </div>
                  </label>
                  <label className="w-full">
                    <input
                      name="parkingFee"
                      type="checkbox"
                      className="peer hidden"
                      defaultChecked={property.parkingFee}
                    />
                    <div className="btn w-full bg-base-100 peer-checked:bg-base-300">
                      주차
                    </div>
                  </label>
                </div>
                <label className="flex w-full flex-col gap-1">
                  <span className="text-lg font-bold">기타</span>
                  <input
                    name="etcFee"
                    type="text"
                    className="input input-bordered"
                    defaultValue={property.etcFee as string}
                  />
                </label>
              </div>
              <div className="flex flex-col gap-2.5 px-2.5">
                <span className="divider divider-start text-center text-xl font-bold">
                  7. 입주 가능일
                </span>
                <label className="flex w-full flex-col gap-1">
                  <input
                    name="moveInDate"
                    type="date"
                    className="input input-bordered"
                    defaultValue={
                      property.moveInDate
                        ? getFormattedDate(property.moveInDate as Date)
                        : ""
                    }
                  />
                </label>
              </div>
              <div className="flex flex-col gap-2.5 px-2.5">
                <span className="divider divider-start text-center text-xl font-bold">
                  8. 옵션
                </span>
                <label className="flex w-full flex-col gap-1">
                  <input
                    name="option"
                    type="text"
                    className="input input-bordered"
                    defaultValue={property.option as string}
                  />
                </label>
              </div>
              <div className="flex flex-col gap-2.5 px-2.5">
                <span className="divider divider-start text-center text-xl font-bold">
                  9. 냉난방
                </span>
                <div className="flex items-center justify-center gap-2">
                  <label className="w-full">
                    <input
                      name="airConditioner"
                      type="checkbox"
                      className="peer hidden"
                      defaultChecked={property.airConditioner}
                    />
                    <div className="btn w-full bg-base-100 peer-checked:bg-base-300">
                      에어컨
                    </div>
                  </label>
                  <label className="w-full">
                    <input
                      name="boiler"
                      type="checkbox"
                      className="peer hidden"
                      defaultChecked={property.boiler}
                    />
                    <div className="btn w-full bg-base-100 peer-checked:bg-base-300">
                      보일러
                    </div>
                  </label>
                  <label className="w-full">
                    <input
                      name="warmWater"
                      type="checkbox"
                      className="peer hidden"
                      defaultChecked={property.warmWater}
                    />
                    <div className="btn w-full bg-base-100 peer-checked:bg-base-300">
                      온수
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 px-2.5">
                <span className="divider divider-start text-center text-xl font-bold">
                  10. 쓰레기 처리장
                </span>
                <div className="flex items-center justify-center gap-2">
                  <label className="w-full">
                    <input
                      name="generalWaste"
                      type="checkbox"
                      className="peer hidden"
                      defaultChecked={property.generalWaste}
                    />
                    <div className="btn w-full bg-base-100 peer-checked:bg-base-300">
                      일반 쓰레기
                    </div>
                  </label>
                  <label className="w-full">
                    <input
                      name="foodWaste"
                      type="checkbox"
                      className="peer hidden"
                      defaultChecked={property.foodWaste}
                    />
                    <div className="btn w-full bg-base-100 peer-checked:bg-base-300">
                      음식물 쓰레기
                    </div>
                  </label>
                  <label className="w-full">
                    <input
                      name="recyclableWaste"
                      type="checkbox"
                      className="peer hidden"
                      defaultChecked={property.recyclableWaste}
                    />
                    <div className="btn w-full bg-base-100 peer-checked:bg-base-300">
                      재활용 쓰레기
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 px-2.5">
                <span className="divider divider-start text-center text-xl font-bold">
                  11. 보안
                </span>
                <div className="flex items-center justify-center gap-2">
                  <label className="w-full">
                    <input
                      name="commonEntrance"
                      type="checkbox"
                      className="peer hidden"
                      defaultChecked={property.commonEntrance}
                    />
                    <div className="btn w-full bg-base-100 peer-checked:bg-base-300">
                      공동현관
                    </div>
                  </label>
                  <label className="w-full">
                    <input
                      name="cctv"
                      type="checkbox"
                      className="peer hidden"
                      defaultChecked={property.cctv}
                    />
                    <div className="btn w-full bg-base-100 peer-checked:bg-base-300">
                      CCTV
                    </div>
                  </label>
                  <label className="w-full">
                    <input
                      name="securityOffice"
                      type="checkbox"
                      className="peer hidden"
                      defaultChecked={property.securityOffice}
                    />
                    <div className="btn w-full bg-base-100 peer-checked:bg-base-300">
                      경비실
                    </div>
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* 2.세부사항 */}
          <div className="collapse join-item collapse-arrow rounded-box border border-base-300 bg-base-200/50 text-xl font-bold">
            <input type="checkbox" name="accordion" />
            <span className="collapse-title">세부사항</span>
            <div className="collapse-content flex flex-col gap-2.5">
              <div className="flex flex-col gap-2.5 px-2.5">
                <span className="divider divider-start text-center text-xl font-bold">
                  12. 채광
                </span>
                <label className="flex flex-col gap-1">
                  <input
                    name="naturalLighting"
                    type="text"
                    className="input input-bordered"
                    defaultValue={property.naturalLighting as string}
                  />
                </label>
              </div>
              <div className="flex flex-col gap-2.5 px-2.5">
                <span className="divider divider-start text-center text-xl font-bold">
                  13. 방음
                </span>
                <label className="flex flex-col gap-1">
                  <input
                    name="soundproof"
                    type="text"
                    className="input input-bordered"
                    defaultValue={property.soundproof as string}
                  />
                </label>
              </div>
              <div className="flex flex-col gap-2.5 px-2.5">
                <span className="divider divider-start text-center text-xl font-bold">
                  14. 환기
                </span>
                <label className="flex flex-col gap-1">
                  <span className="text-lg font-bold">창문</span>
                  <input
                    name="window"
                    type="text"
                    className="input input-bordered"
                    defaultValue={property.window as string}
                  />
                </label>
                <label className="flex flex-col gap-1">
                  <span className="text-lg font-bold">환기 시설</span>
                  <input
                    name="ventilationFacility"
                    type="text"
                    className="input input-bordered"
                    defaultValue={property.ventilationFacility as string}
                  />
                </label>
              </div>
              <div className="flex flex-col gap-2.5 px-2.5">
                <span className="divider divider-start text-center text-xl font-bold">
                  15. 수압
                </span>
                <label className="flex flex-col gap-1">
                  <input
                    name="waterPressure"
                    type="text"
                    className="input input-bordered"
                    defaultValue={property.waterPressure as string}
                  />
                </label>
              </div>
              <div className="flex flex-col gap-2.5 px-2.5">
                <span className="divider divider-start text-center text-xl font-bold">
                  16. 배수
                </span>
                <label className="flex flex-col gap-1">
                  <input
                    name="drainage"
                    type="text"
                    className="input input-bordered"
                    defaultValue={property.drainage as string}
                  />
                </label>
              </div>
              <div className="flex flex-col gap-2.5 px-2.5">
                <span className="divider divider-start text-center text-xl font-bold">
                  17. 하수구 냄새
                </span>
                <label className="flex flex-col gap-1">
                  <input
                    name="drainSmell"
                    type="text"
                    className="input input-bordered"
                    defaultValue={property.drainSmell as string}
                  />
                </label>
              </div>
              <div className="flex flex-col gap-2.5 px-2.5">
                <span className="divider divider-start text-center text-xl font-bold">
                  18. 조명
                </span>
                <label className="flex flex-col gap-1">
                  <input
                    name="lighting"
                    type="text"
                    className="input input-bordered"
                    defaultValue={property.lighting as string}
                  />
                </label>
              </div>
              <div className="flex flex-col gap-2.5 px-2.5">
                <span className="divider divider-start text-center text-xl font-bold">
                  19. 천장, 바닥
                </span>
                <label className="flex flex-col gap-1">
                  <input
                    name="ceilingFloor"
                    type="text"
                    className="input input-bordered"
                    defaultValue={property.ceilingFloor as string}
                  />
                </label>
              </div>
              <div className="flex flex-col gap-2.5 px-2.5">
                <span className="divider divider-start text-center text-xl font-bold">
                  20. 타일 탈락 여부
                </span>
                <div className="flex items-center justify-center gap-2">
                  <label className="w-full">
                    <input
                      name="kitchenTile"
                      type="checkbox"
                      className="peer hidden"
                      defaultChecked={property.kitchenTile}
                    />
                    <div className="btn w-full bg-base-100 peer-checked:bg-base-300">
                      부엌
                    </div>
                  </label>
                  <label className="w-full">
                    <input
                      name="toiletTile"
                      type="checkbox"
                      className="peer hidden"
                      defaultChecked={property.toiletTile}
                    />
                    <div className="btn w-full bg-base-100 peer-checked:bg-base-300">
                      화장실
                    </div>
                  </label>
                  <label className="w-full">
                    <input
                      name="entranceTile"
                      type="checkbox"
                      className="peer hidden"
                      defaultChecked={property.entranceTile}
                    />
                    <div className="btn w-full bg-base-100 peer-checked:bg-base-300">
                      현관
                    </div>
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-2.5 px-2.5">
                <span className="divider divider-start text-center text-xl font-bold">
                  21. 누수
                </span>
                <label className="flex flex-col gap-1">
                  <input
                    name="waterLeak"
                    type="text"
                    className="input input-bordered"
                    defaultValue={property.waterLeak as string}
                  />
                </label>
              </div>
              <div className="flex flex-col gap-2.5 px-2.5">
                <span className="divider divider-start text-center text-xl font-bold">
                  22. 곰팡이
                </span>
                <label className="flex flex-col gap-1">
                  <input
                    name="mold"
                    type="text"
                    className="input input-bordered"
                    defaultValue={property.mold as string}
                  />
                </label>
              </div>
            </div>
          </div>

          {/* 3.최종평가 */}
          <div className="collapse join-item collapse-arrow rounded-box border border-base-300 bg-base-200/50 text-xl font-bold">
            <input type="checkbox" name="accordion" />
            <span className="collapse-title">최종평가</span>
            <div className="collapse-content flex flex-col gap-2.5">
              <textarea
                name="appraisal"
                className="textarea textarea-bordered h-80"
                placeholder="최종평가"
                defaultValue={property.appraisal as string}
              ></textarea>
            </div>
          </div>

          {/* 4.사진 */}
          <div className="collapse join-item collapse-arrow rounded-box border border-base-300 bg-base-200/50 text-xl font-bold">
            <input type="checkbox" name="accordion" />
            <span className="collapse-title">사진</span>
            <div className="collapse-content flex flex-col gap-2.5 overflow-hidden">
              <div className="carousel rounded-box">
                {photoList.map((photo, index) => (
                  <div key={index} className="flex flex-col border-2">
                    <div className="carousel-item relative size-[200px] overflow-hidden">
                      <Image
                        src={photo.url}
                        alt={photo.description}
                        fill
                        sizes="50vw"
                        className="object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => deletePhoto(index)}
                        className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2"
                      >
                        <XMarkIcon className="size-5" />
                      </button>
                    </div>
                    <input
                      name="photoDescription"
                      type="text"
                      className="bg-secondary py-2 text-center text-base outline-none"
                      defaultValue={photo.description}
                    />
                  </div>
                ))}
              </div>
              <label className="btn btn-accent">
                <input
                  type="file"
                  onChange={addPhoto}
                  className="hidden"
                  multiple
                />
                <PlusIcon className="size-5" />
                <span>사진 추가하기</span>
              </label>
            </div>
          </div>
        </div>

        <button className="btn bg-accent">반영하기</button>
      </form>
    </div>
  );
}
