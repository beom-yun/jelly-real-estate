export default function PropertyAddPage() {
  return (
    <div className="flex flex-col gap-10 p-5">
      <span className="text-4xl font-bold">새 부동산</span>
      <form className="flex flex-col gap-8">
        <div className="rounded-box bg-secondary px-5 py-3 text-xl font-bold">
          기본사항
        </div>
        <div className="flex flex-col gap-3 px-2.5">
          <span className="divider divider-accent text-center text-xl font-bold">
            1. 가격
          </span>
          <div className="flex flex-col gap-1">
            <span className="text-lg font-bold">분류</span>
            <div className="flex items-center justify-center gap-2">
              <div className="btn w-[32.45%]">매매</div>
              <div className="btn w-[32.45%]">전세</div>
              <div className="btn w-[32.45%]">월세</div>
            </div>
          </div>
          <label className="flex flex-col gap-1">
            <span className="text-lg font-bold">보증금</span>
            <input type="number" className="input input-bordered" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-lg font-bold">관리비</span>
            <input type="number" className="input input-bordered" />
          </label>
        </div>
        <div className="flex flex-col gap-3 px-2.5">
          <span className="divider divider-accent text-center text-xl font-bold">
            2. 주소
          </span>
          <label className="flex flex-col gap-1">
            <span className="text-lg font-bold">주소</span>
            <input type="text" className="input input-bordered" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-lg font-bold">연식</span>
            <input type="text" className="input input-bordered" />
          </label>
        </div>
        <div className="flex flex-col gap-3 px-2.5">
          <span className="divider divider-accent text-center text-xl font-bold">
            3. 면적
          </span>
          <div className="flex gap-5">
            <label className="flex w-full flex-col gap-1">
              <span className="text-lg font-bold">공용(평수)</span>
              <input type="number" className="input input-bordered" />
            </label>
            <label className="flex w-full flex-col gap-1">
              <span className="text-lg font-bold">전용(평수)</span>
              <input type="number" className="input input-bordered" />
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-2.5">
          <span className="divider divider-accent text-center text-xl font-bold">
            4. 구조
          </span>
          <div className="flex gap-5">
            <label className="flex w-full flex-col gap-1">
              <span className="text-lg font-bold">거실</span>
              <input type="text" className="input input-bordered" />
            </label>
            <label className="flex w-full flex-col gap-1">
              <span className="text-lg font-bold">방</span>
              <input type="text" className="input input-bordered" />
            </label>
          </div>
          <div className="flex gap-5">
            <label className="flex w-full flex-col gap-1">
              <span className="text-lg font-bold">화장실</span>
              <input type="text" className="input input-bordered" />
            </label>
            <label className="flex w-full flex-col gap-1">
              <span className="text-lg font-bold">베란다</span>
              <input type="text" className="input input-bordered" />
            </label>
          </div>
          <div className="flex gap-5">
            <label className="flex w-full flex-col gap-1">
              <span className="text-lg font-bold">주차장</span>
              <input type="text" className="input input-bordered" />
            </label>
            <label className="flex w-full flex-col gap-1">
              <span className="text-lg font-bold">기타</span>
              <input type="text" className="input input-bordered" />
            </label>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-2.5">
          <span className="divider divider-accent text-center text-xl font-bold">
            5. 거래
          </span>
          <div className="flex items-center justify-center gap-2">
            <div className="btn w-[49.5%]">대출 가능 여부</div>
            <div className="btn w-[49.5%]">전입신고 가능 여부</div>
          </div>
          <label className="flex w-full flex-col gap-1">
            <span className="text-lg font-bold">계약 기간</span>
            <input type="text" className="input input-bordered" />
          </label>
        </div>
        <div className="flex flex-col gap-3 px-2.5">
          <span className="divider divider-accent text-center text-xl font-bold">
            6. 관리비 포함
          </span>
          <div className="flex items-center justify-center gap-2">
            <div className="btn w-[32.45%]">가스</div>
            <div className="btn w-[32.45%]">전기</div>
            <div className="btn w-[32.45%]">수도</div>
          </div>
          <div className="flex items-center justify-center gap-2">
            <div className="btn w-[49.5%]">청소</div>
            <div className="btn w-[49.5%]">주차</div>
          </div>
          <label className="flex w-full flex-col gap-1">
            <span className="text-lg font-bold">기타</span>
            <input type="text" className="input input-bordered" />
          </label>
        </div>
        <div className="flex flex-col gap-3 px-2.5">
          <span className="divider divider-accent text-center text-xl font-bold">
            7. 입주 가능일
          </span>
          <label className="flex w-full flex-col gap-1">
            <input type="date" className="input input-bordered" />
          </label>
        </div>
        <div className="flex flex-col gap-3 px-2.5">
          <span className="divider divider-accent text-center text-xl font-bold">
            8. 옵션
          </span>
          <label className="flex w-full flex-col gap-1">
            <input type="text" className="input input-bordered" />
          </label>
        </div>
        <div className="flex flex-col gap-3 px-2.5">
          <span className="divider divider-accent text-center text-xl font-bold">
            9. 냉난방
          </span>
          <div className="flex items-center justify-center gap-2">
            <div className="btn w-[32.45%]">에어컨</div>
            <div className="btn w-[32.45%]">보일러</div>
            <div className="btn w-[32.45%]">온수</div>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-2.5">
          <span className="divider divider-accent text-center text-xl font-bold">
            10. 쓰레기 처리장
          </span>
          <div className="flex items-center justify-center gap-2">
            <div className="btn w-[32.45%]">일반 쓰레기</div>
            <div className="btn w-[32.45%]">음식물 쓰레기</div>
            <div className="btn w-[32.45%]">재활용 쓰레기</div>
          </div>
        </div>
        <div className="flex flex-col gap-3 px-2.5">
          <span className="divider divider-accent text-center text-xl font-bold">
            11. 보안
          </span>
          <div className="flex items-center justify-center gap-2">
            <div className="btn w-[32.45%]">공동현관</div>
            <div className="btn w-[32.45%]">CCTV</div>
            <div className="btn w-[32.45%]">경비실</div>
          </div>
        </div>

        <div className="h-5" />

        {/* 보증금 */}
        {/* 관리비 */}
        {/* 2.세부사항 */}
        <div className="rounded-box bg-base-200 px-5 py-3 text-xl font-bold">
          세부사항
        </div>

        <div className="h-5" />

        {/* 3.최종평가 */}
        <div className="rounded-box bg-base-200 px-5 py-3 text-xl font-bold">
          최종평가
        </div>
      </form>
    </div>
  );
}
