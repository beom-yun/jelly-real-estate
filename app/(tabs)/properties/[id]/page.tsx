import db from "@/lib/db";
import { getIsOwner } from "@/lib/getIsOwner";
import Image from "next/image";
import Link from "next/link";
import { notFound, redirect } from "next/navigation";

export default async function PropertyDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const id = Number(params.id);
  if (isNaN(id)) return notFound();

  const property = await db.property.findUnique({
    where: { id: +params.id },
    include: { photos: { select: { id: true, url: true, description: true } } },
  });
  if (!property) return notFound();

  const isOwner = await getIsOwner(property.userId);
  if (!isOwner) redirect(`/properties`);

  return (
    <div className="flex flex-col p-2.5">
      <span className="p-2.5 text-4xl font-extrabold">
        {property.propertyName}
      </span>
      <div role="tablist" className="tabs tabs-bordered tabs-lg mt-5">
        <input
          type="radio"
          name="propertyTab"
          role="tab"
          className="tab"
          aria-label="기본사항"
          defaultChecked
        />
        <div role="tabpanel" className="tab-content pt-5">
          <table className="table table-sm">
            <thead>
              <tr className="bg-base-200 text-base">
                <th className="w-1/2">1. 가격</th>
                <td className="w-1/2"></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>거래 방식</th>
                <td>{property.transactionType}</td>
              </tr>
              <tr>
                <th>보증금</th>
                <td>{property.deposit}</td>
              </tr>
              <tr>
                <th>관리비</th>
                <td>{property.maintenanceCost}</td>
              </tr>
            </tbody>

            <thead>
              <tr className="bg-base-200 text-base">
                <th>2. 주소</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>주소</th>
                <td>{property.address}</td>
              </tr>
              <tr>
                <th>연식</th>
                <td>{property.year}</td>
              </tr>
            </tbody>

            <thead>
              <tr className="bg-base-200 text-base">
                <th>3. 면적</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>공용(평수)</th>
                <td>{property.commonArea}</td>
              </tr>
              <tr>
                <th>전용(평수)</th>
                <td>{property.dedicatedArea}</td>
              </tr>
            </tbody>

            <thead>
              <tr className="bg-base-200 text-base">
                <th>4. 구조</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>거실</th>
                <td>{property.livingRoom}</td>
              </tr>
              <tr>
                <th>방</th>
                <td>{property.room}</td>
              </tr>
              <tr>
                <th>화장실</th>
                <td>{property.toilet}</td>
              </tr>
              <tr>
                <th>베란다</th>
                <td>{property.veranda}</td>
              </tr>
              <tr>
                <th>주차장</th>
                <td>{property.parkingLot}</td>
              </tr>
              <tr>
                <th>기타</th>
                <td>{property.etc}</td>
              </tr>
            </tbody>

            <thead>
              <tr className="bg-base-200 text-base">
                <th>5. 거래</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>대출 가능 여부</th>
                <td>{property.loanAvailability ? "가능" : "불가능"}</td>
              </tr>
              <tr>
                <th>전입신고 가능 여부</th>
                <td>{property.moveInAvailability ? "가능" : "불가능"}</td>
              </tr>
              <tr>
                <th>계약 기간</th>
                <td>{property.contractPeriod}</td>
              </tr>
            </tbody>

            <thead>
              <tr className="bg-base-200 text-base">
                <th>6. 관리비 포함</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>가스</th>
                <td>{property.gasFee ? "O" : "X"}</td>
              </tr>
              <tr>
                <th>전기</th>
                <td>{property.electricityFee ? "O" : "X"}</td>
              </tr>
              <tr>
                <th>수도</th>
                <td>{property.waterFee ? "O" : "X"}</td>
              </tr>
              <tr>
                <th>청소</th>
                <td>{property.cleaningFee ? "O" : "X"}</td>
              </tr>
              <tr>
                <th>주차</th>
                <td>{property.parkingFee ? "O" : "X"}</td>
              </tr>
              <tr>
                <th>기타</th>
                <td>{property.etcFee}</td>
              </tr>
            </tbody>

            <thead>
              <tr className="bg-base-200 text-base">
                <th>7. 입주 가능일</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>입주 가능일</th>
                <td>{property.moveInDate?.toLocaleDateString()}</td>
              </tr>
            </tbody>

            <thead>
              <tr className="bg-base-200 text-base">
                <th>8. 옵션</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>옵션</th>
                <td>{property.option}</td>
              </tr>
            </tbody>

            <thead>
              <tr className="bg-base-200 text-base">
                <th>9. 냉난방</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>에어컨</th>
                <td>{property.airConditioner ? "O" : "X"}</td>
              </tr>
              <tr>
                <th>보일러</th>
                <td>{property.boiler ? "O" : "X"}</td>
              </tr>
              <tr>
                <th>온수</th>
                <td>{property.warmWater ? "O" : "X"}</td>
              </tr>
            </tbody>

            <thead>
              <tr className="bg-base-200 text-base">
                <th>10. 쓰레기 처리장</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>일반 쓰레기</th>
                <td>{property.generalWaste ? "O" : "X"}</td>
              </tr>
              <tr>
                <th>음식물 쓰레기</th>
                <td>{property.foodWaste ? "O" : "X"}</td>
              </tr>
              <tr>
                <th>재활용 쓰레기</th>
                <td>{property.recyclableWaste ? "O" : "X"}</td>
              </tr>
            </tbody>

            <thead>
              <tr className="bg-base-200 text-base">
                <th>11. 보안</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>공동현관</th>
                <td>{property.commonEntrance ? "O" : "X"}</td>
              </tr>
              <tr>
                <th>CCTV</th>
                <td>{property.cctv ? "O" : "X"}</td>
              </tr>
              <tr>
                <th>경비실</th>
                <td>{property.securityOffice ? "O" : "X"}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <input
          type="radio"
          name="propertyTab"
          role="tab"
          className="tab"
          aria-label="세부사항"
        />
        <div role="tabpanel" className="tab-content pt-5">
          <table className="table table-sm">
            <thead>
              <tr className="bg-base-200 text-base">
                <th className="w-1/2">12. 채광</th>
                <td className="w-1/2"></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>채광</th>
                <td>{property.naturalLighting}</td>
              </tr>
            </tbody>

            <thead>
              <tr className="bg-base-200 text-base">
                <th>13. 방음</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>방음</th>
                <td>{property.soundproof}</td>
              </tr>
            </tbody>

            <thead>
              <tr className="bg-base-200 text-base">
                <th>14. 환기</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>창문</th>
                <td>{property.window}</td>
              </tr>
              <tr>
                <th>환기 시설</th>
                <td>{property.ventilationFacility}</td>
              </tr>
            </tbody>

            <thead>
              <tr className="bg-base-200 text-base">
                <th>15. 수압</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>수압</th>
                <td>{property.waterPressure}</td>
              </tr>
            </tbody>

            <thead>
              <tr className="bg-base-200 text-base">
                <th>16. 배수</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>배수</th>
                <td>{property.drainage}</td>
              </tr>
            </tbody>

            <thead>
              <tr className="bg-base-200 text-base">
                <th>17. 하수구 냄새</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>하수구 냄새</th>
                <td>{property.drainSmell}</td>
              </tr>
            </tbody>

            <thead>
              <tr className="bg-base-200 text-base">
                <th>18. 조명</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>조명</th>
                <td>{property.lighting}</td>
              </tr>
            </tbody>

            <thead>
              <tr className="bg-base-200 text-base">
                <th>19. 천장, 바닥</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>천장, 바닥</th>
                <td>{property.ceilingFloor}</td>
              </tr>
            </tbody>

            <thead>
              <tr className="bg-base-200 text-base">
                <th>20. 타일 탈락 여부</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>부엌</th>
                <td>{property.kitchenTile ? "O" : "X"}</td>
              </tr>
              <tr>
                <th>화장실</th>
                <td>{property.toiletTile ? "O" : "X"}</td>
              </tr>
              <tr>
                <th>현관</th>
                <td>{property.entranceTile ? "O" : "X"}</td>
              </tr>
            </tbody>

            <thead>
              <tr className="bg-base-200 text-base">
                <th>21. 누수</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>누수</th>
                <td>{property.waterLeak}</td>
              </tr>
            </tbody>

            <thead>
              <tr className="bg-base-200 text-base">
                <th>22. 곰팡이</th>
                <td></td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>곰팡이</th>
                <td>{property.mold}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <input
          type="radio"
          name="propertyTab"
          role="tab"
          className="tab"
          aria-label="최종평가"
        />
        <div role="tabpanel" className="tab-content pt-5">
          <textarea
            className="textarea textarea-bordered min-h-[50vh] w-full"
            placeholder="최종평가"
            readOnly
            defaultValue={property.appraisal as string}
          />
        </div>

        <input
          type="radio"
          name="propertyTab"
          role="tab"
          className="tab"
          aria-label="사진"
        />
        <div role="tabpanel" className="tab-content pt-5">
          {property.photos.length !== 0 ? (
            <div className="grid grid-cols-2 gap-2.5">
              {property.photos.map((photo) => (
                <Link
                  href="#"
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
                </Link>
              ))}
            </div>
          ) : (
            <div className="w-full text-center text-2xl font-bold">
              등록된 사진이 없습니다.
            </div>
          )}
        </div>

        <input
          type="radio"
          name="propertyTab"
          role="tab"
          className="tab"
          aria-label="기타"
        />
        <div role="tabpanel" className="tab-content pt-5">
          <Link
            href={`/properties/${params.id}/edit`}
            className="btn btn-accent w-full"
          >
            수정하기
          </Link>
        </div>
      </div>
    </div>
  );
}
