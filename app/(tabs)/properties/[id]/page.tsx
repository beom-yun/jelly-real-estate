import db from "@/lib/db";
import { getIsOwner } from "@/lib/getIsOwner";
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
  });
  if (!property) return notFound();

  const isOwner = await getIsOwner(property.userId);
  if (!isOwner) redirect(`/properties`);

  console.log(property);

  return (
    <div>
      <span>{property.propertyName}</span>
      <table className="table table-sm">
        <thead>
          <tr className="bg-base-200 text-base">
            <th>1. 가격</th>
            <td></td>
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
  );
}
