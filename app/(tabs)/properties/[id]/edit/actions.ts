"use server";

import db from "@/lib/db";
import getSession from "@/lib/session";
import { redirect } from "next/navigation";
import { z } from "zod";

const propertyEditSchema = z.object({
  transactionType: z.string({ required_error: "거래 분류를 선택해주세요." }), // 분류
  deposit: z.coerce.number().optional(), // 보증금
  maintenanceCost: z.coerce.number().optional(), // 관리비
  address: z.string().optional(), // 주소
  year: z.string().optional(), // 연식
  commonArea: z.coerce.number().optional(), // 공용(평수)
  dedicatedArea: z.coerce.number().optional(), // 전용(평수)
  livingRoom: z.string().optional(), // 거실
  room: z.string().optional(), // 방
  toilet: z.string().optional(), // 화장실
  veranda: z.string().optional(), // 베란다
  parkingLot: z.string().optional(), // 주차장
  etc: z.string().optional(), // 기타
  loanAvailability: z.boolean(), // 대출 가능 여부
  moveInAvailability: z.boolean(), // 전입신고 가능 여부
  contractPeriod: z.string().optional(), // 계약 기간
  gasFee: z.boolean(), // 가스 관리비
  electricityFee: z.boolean(), // 전기 관리비
  waterFee: z.boolean(), // 수도 관리비
  cleaningFee: z.boolean(), // 청소 관리비
  parkingFee: z.boolean(), // 주차 관리비
  etcFee: z.string().optional(), // 기타 관리비
  moveInDate: z.coerce.date().optional(), // 입주 가능일
  option: z.string().optional(), // 옵션
  airConditioner: z.boolean(), // 에어컨
  boiler: z.boolean(), // 보일러
  warmWater: z.boolean(), // 온수
  generalWaste: z.boolean(), // 일반 쓰레기
  foodWaste: z.boolean(), // 음식물 쓰레기
  recyclableWaste: z.boolean(), // 재활용 쓰레기
  commonEntrance: z.boolean(), // 공동현관
  cctv: z.boolean(), // CCTV
  securityOffice: z.boolean(), // 경비실
  naturalLighting: z.string().optional(), // 채광
  soundproof: z.string().optional(), // 방음
  window: z.string().optional(), // 창문
  ventilationFacility: z.string().optional(), // 환기 시설
  waterPressure: z.string().optional(), // 수압
  drainage: z.string().optional(), // 배수
  drainSmell: z.string().optional(), // 하수구 냄새
  lighting: z.string().optional(), // 조명
  ceilingFloor: z.string().optional(), // 천장, 바닥
  kitchenTile: z.boolean(), // 부엌 타일 탈락 여부
  toiletTile: z.boolean(), // 화장실 타일 탈락 여부
  entranceTile: z.boolean(), // 현관 타일 탈락 여부
  waterLeak: z.string().optional(), // 누수
  mold: z.string().optional(), // 곰팡이
  appraisal: z.string().optional(), // 최종평가
});

export async function PropertyEditAction(
  prevState: { propertyId: string },
  formData: FormData,
) {
  const data = {
    transactionType: formData.get("transactionType") || undefined,
    deposit: formData.get("deposit") || undefined,
    maintenanceCost: formData.get("maintenanceCost") || undefined,
    address: formData.get("address") || undefined,
    year: formData.get("year") || undefined,
    commonArea: formData.get("commonArea") || undefined,
    dedicatedArea: formData.get("dedicatedArea") || undefined,
    livingRoom: formData.get("livingRoom") || undefined,
    room: formData.get("room") || undefined,
    toilet: formData.get("toilet") || undefined,
    veranda: formData.get("veranda") || undefined,
    parkingLot: formData.get("parkingLot") || undefined,
    etc: formData.get("etc") || undefined,
    loanAvailability: Boolean(formData.get("loanAvailability")),
    moveInAvailability: Boolean(formData.get("moveInAvailability")),
    contractPeriod: formData.get("contractPeriod") || undefined,
    gasFee: Boolean(formData.get("gasFee")),
    electricityFee: Boolean(formData.get("electricityFee")),
    waterFee: Boolean(formData.get("waterFee")),
    cleaningFee: Boolean(formData.get("cleaningFee")),
    parkingFee: Boolean(formData.get("parkingFee")),
    etcFee: formData.get("etcFee") || undefined,
    moveInDate: formData.get("moveInDate") || undefined,
    option: formData.get("option") || undefined,
    airConditioner: Boolean(formData.get("airConditioner")),
    boiler: Boolean(formData.get("boiler")),
    warmWater: Boolean(formData.get("warmWater")),
    generalWaste: Boolean(formData.get("generalWaste")),
    foodWaste: Boolean(formData.get("foodWaste")),
    recyclableWaste: Boolean(formData.get("recyclableWaste")),
    commonEntrance: Boolean(formData.get("commonEntrance")),
    cctv: Boolean(formData.get("cctv")),
    securityOffice: Boolean(formData.get("securityOffice")),
    naturalLighting: formData.get("naturalLighting") || undefined,
    soundproof: formData.get("soundproof") || undefined,
    window: formData.get("window") || undefined,
    ventilationFacility: formData.get("ventilationFacility") || undefined,
    waterPressure: formData.get("waterPressure") || undefined,
    drainage: formData.get("drainage") || undefined,
    drainSmell: formData.get("drainSmell") || undefined,
    lighting: formData.get("lighting") || undefined,
    ceilingFloor: formData.get("ceilingFloor") || undefined,
    kitchenTile: Boolean(formData.get("kitchenTile")),
    toiletTile: Boolean(formData.get("toiletTile")),
    entranceTile: Boolean(formData.get("entranceTile")),
    waterLeak: formData.get("waterLeak") || undefined,
    mold: formData.get("mold") || undefined,
    appraisal: formData.get("appraisal") || undefined,
  };
  const result = await propertyEditSchema.safeParseAsync(data);
  if (!result.success)
    return { propertyId: prevState.propertyId, error: result.error.flatten() };
  const session = await getSession();
  const updatedProperty = await db.property.update({
    where: { id: +prevState.propertyId },
    data: {
      transactionType: result.data.transactionType,
      deposit: result.data.deposit,
      maintenanceCost: result.data.maintenanceCost,
      address: result.data.address,
      year: result.data.year,
      commonArea: result.data.commonArea,
      dedicatedArea: result.data.dedicatedArea,
      livingRoom: result.data.livingRoom,
      room: result.data.room,
      toilet: result.data.toilet,
      veranda: result.data.veranda,
      parkingLot: result.data.parkingLot,
      etc: result.data.etc,
      loanAvailability: result.data.loanAvailability,
      moveInAvailability: result.data.moveInAvailability,
      contractPeriod: result.data.contractPeriod,
      gasFee: result.data.gasFee,
      electricityFee: result.data.electricityFee,
      waterFee: result.data.waterFee,
      cleaningFee: result.data.cleaningFee,
      parkingFee: result.data.parkingFee,
      etcFee: result.data.etcFee,
      moveInDate: result.data.moveInDate,
      option: result.data.option,
      airConditioner: result.data.airConditioner,
      boiler: result.data.boiler,
      warmWater: result.data.warmWater,
      generalWaste: result.data.generalWaste,
      foodWaste: result.data.foodWaste,
      recyclableWaste: result.data.recyclableWaste,
      commonEntrance: result.data.commonEntrance,
      cctv: result.data.cctv,
      securityOffice: result.data.securityOffice,
      naturalLighting: result.data.naturalLighting,
      soundproof: result.data.soundproof,
      window: result.data.window,
      ventilationFacility: result.data.ventilationFacility,
      waterPressure: result.data.waterPressure,
      drainage: result.data.drainage,
      drainSmell: result.data.drainSmell,
      lighting: result.data.lighting,
      ceilingFloor: result.data.ceilingFloor,
      kitchenTile: result.data.kitchenTile,
      toiletTile: result.data.toiletTile,
      entranceTile: result.data.entranceTile,
      waterLeak: result.data.waterLeak,
      mold: result.data.mold,
      appraisal: result.data.appraisal,
    },
    select: { id: true },
  });
  // redirect(`/properties/${updatedProperty.id}`);
  return { propertyId: prevState.propertyId };
}
