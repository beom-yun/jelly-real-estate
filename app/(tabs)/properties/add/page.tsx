export default function PropertyAddPage() {
  return (
    <div className="flex flex-col gap-10 p-5">
      <span className="text-4xl font-bold">새 부동산</span>
      <form className="flex flex-col gap-8">
        {/* 1.기본사항 */}
        <div className="collapse collapse-arrow rounded-box bg-base-200 text-xl font-bold">
          <input type="checkbox" name="accordion" defaultChecked />
          <span className="collapse-title">기본사항</span>
          <div className="collapse-content flex flex-col gap-2.5">
            <div className="flex flex-col gap-2.5 px-2.5">
              <span className="divider divider-start text-center text-xl font-bold">
                1. 가격
              </span>
              <div className="flex flex-col gap-1">
                <span className="text-lg font-bold">분류</span>
                <div className="flex items-center justify-center gap-2">
                  <div className="btn w-[32.45%] bg-base-100">매매</div>
                  <div className="btn w-[32.45%] bg-base-100">전세</div>
                  <div className="btn w-[32.45%] bg-base-100">월세</div>
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
            <div className="flex flex-col gap-2.5 px-2.5">
              <span className="divider divider-start text-center text-xl font-bold">
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
            <div className="flex flex-col gap-2.5 px-2.5">
              <span className="divider divider-start text-center text-xl font-bold">
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
            <div className="flex flex-col gap-2.5 px-2.5">
              <span className="divider divider-start text-center text-xl font-bold">
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
            <div className="flex flex-col gap-2.5 px-2.5">
              <span className="divider divider-start text-center text-xl font-bold">
                5. 거래
              </span>
              <div className="flex items-center justify-center gap-2">
                <div className="btn w-[49.5%] bg-base-100">대출 가능 여부</div>
                <div className="btn w-[49.5%] bg-base-100">
                  전입신고 가능 여부
                </div>
              </div>
              <label className="flex w-full flex-col gap-1">
                <span className="text-lg font-bold">계약 기간</span>
                <input type="text" className="input input-bordered" />
              </label>
            </div>
            <div className="flex flex-col gap-2.5 px-2.5">
              <span className="divider divider-start text-center text-xl font-bold">
                6. 관리비 포함
              </span>
              <div className="flex items-center justify-center gap-2">
                <div className="btn w-[32.45%] bg-base-100">가스</div>
                <div className="btn w-[32.45%] bg-base-100">전기</div>
                <div className="btn w-[32.45%] bg-base-100">수도</div>
              </div>
              <div className="flex items-center justify-center gap-2">
                <div className="btn w-[49.5%] bg-base-100">청소</div>
                <div className="btn w-[49.5%] bg-base-100">주차</div>
              </div>
              <label className="flex w-full flex-col gap-1">
                <span className="text-lg font-bold">기타</span>
                <input type="text" className="input input-bordered" />
              </label>
            </div>
            <div className="flex flex-col gap-2.5 px-2.5">
              <span className="divider divider-start text-center text-xl font-bold">
                7. 입주 가능일
              </span>
              <label className="flex w-full flex-col gap-1">
                <input type="date" className="input input-bordered" />
              </label>
            </div>
            <div className="flex flex-col gap-2.5 px-2.5">
              <span className="divider divider-start text-center text-xl font-bold">
                8. 옵션
              </span>
              <label className="flex w-full flex-col gap-1">
                <input type="text" className="input input-bordered" />
              </label>
            </div>
            <div className="flex flex-col gap-2.5 px-2.5">
              <span className="divider divider-start text-center text-xl font-bold">
                9. 냉난방
              </span>
              <div className="flex items-center justify-center gap-2">
                <div className="btn w-[32.45%] bg-base-100">에어컨</div>
                <div className="btn w-[32.45%] bg-base-100">보일러</div>
                <div className="btn w-[32.45%] bg-base-100">온수</div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 px-2.5">
              <span className="divider divider-start text-center text-xl font-bold">
                10. 쓰레기 처리장
              </span>
              <div className="flex items-center justify-center gap-2">
                <div className="btn w-[32.45%] bg-base-100">일반 쓰레기</div>
                <div className="btn w-[32.45%] bg-base-100">음식물 쓰레기</div>
                <div className="btn w-[32.45%] bg-base-100">재활용 쓰레기</div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 px-2.5">
              <span className="divider divider-start text-center text-xl font-bold">
                11. 보안
              </span>
              <div className="flex items-center justify-center gap-2">
                <div className="btn w-[32.45%] bg-base-100">공동현관</div>
                <div className="btn w-[32.45%] bg-base-100">CCTV</div>
                <div className="btn w-[32.45%] bg-base-100">경비실</div>
              </div>
            </div>
          </div>
        </div>

        {/* 2.세부사항 */}
        <div className="collapse collapse-arrow rounded-box bg-base-200 text-xl font-bold">
          <input type="checkbox" name="accordion" />
          <span className="collapse-title">세부사항</span>
          <div className="collapse-content flex flex-col gap-2.5">
            <div className="flex flex-col gap-2.5 px-2.5">
              <span className="divider divider-start text-center text-xl font-bold">
                12. 채광
              </span>
              <label className="flex flex-col gap-1">
                <input type="text" className="input input-bordered" />
              </label>
            </div>
            <div className="flex flex-col gap-2.5 px-2.5">
              <span className="divider divider-start text-center text-xl font-bold">
                13. 방음
              </span>
              <label className="flex flex-col gap-1">
                <input type="text" className="input input-bordered" />
              </label>
            </div>
            <div className="flex flex-col gap-2.5 px-2.5">
              <span className="divider divider-start text-center text-xl font-bold">
                14. 환기
              </span>
              <label className="flex flex-col gap-1">
                <span className="text-lg font-bold">창문</span>
                <input type="text" className="input input-bordered" />
              </label>
              <label className="flex flex-col gap-1">
                <span className="text-lg font-bold">환기 시설</span>
                <input type="text" className="input input-bordered" />
              </label>
            </div>
            <div className="flex flex-col gap-2.5 px-2.5">
              <span className="divider divider-start text-center text-xl font-bold">
                15. 수압
              </span>
              <label className="flex flex-col gap-1">
                <input type="text" className="input input-bordered" />
              </label>
            </div>
            <div className="flex flex-col gap-2.5 px-2.5">
              <span className="divider divider-start text-center text-xl font-bold">
                16. 배수
              </span>
              <label className="flex flex-col gap-1">
                <input type="text" className="input input-bordered" />
              </label>
            </div>
            <div className="flex flex-col gap-2.5 px-2.5">
              <span className="divider divider-start text-center text-xl font-bold">
                17. 하수구 냄새
              </span>
              <label className="flex flex-col gap-1">
                <input type="text" className="input input-bordered" />
              </label>
            </div>
            <div className="flex flex-col gap-2.5 px-2.5">
              <span className="divider divider-start text-center text-xl font-bold">
                18. 조명
              </span>
              <label className="flex flex-col gap-1">
                <input type="text" className="input input-bordered" />
              </label>
            </div>
            <div className="flex flex-col gap-2.5 px-2.5">
              <span className="divider divider-start text-center text-xl font-bold">
                19. 천장, 바닥
              </span>
              <label className="flex flex-col gap-1">
                <input type="text" className="input input-bordered" />
              </label>
            </div>
            <div className="flex flex-col gap-2.5 px-2.5">
              <span className="divider divider-start text-center text-xl font-bold">
                20. 타일 탈락 여부
              </span>
              <div className="flex items-center justify-center gap-2">
                <div className="btn w-[32.45%] bg-base-100">부엌</div>
                <div className="btn w-[32.45%] bg-base-100">화장실</div>
                <div className="btn w-[32.45%] bg-base-100">현관</div>
              </div>
            </div>
            <div className="flex flex-col gap-2.5 px-2.5">
              <span className="divider divider-start text-center text-xl font-bold">
                21. 누수
              </span>
              <label className="flex flex-col gap-1">
                <input type="text" className="input input-bordered" />
              </label>
            </div>
            <div className="flex flex-col gap-2.5 px-2.5">
              <span className="divider divider-start text-center text-xl font-bold">
                22. 곰팡이
              </span>
              <label className="flex flex-col gap-1">
                <input type="text" className="input input-bordered" />
              </label>
            </div>
          </div>
        </div>

        {/* 3.최종평가 */}
        <div className="collapse collapse-arrow rounded-box bg-base-200 text-xl font-bold">
          <input type="checkbox" name="accordion" />
          <span className="collapse-title">최종평가</span>
          <div className="collapse-content flex flex-col gap-2.5"></div>
        </div>

        {/* 4.사진 */}
        <div className="collapse collapse-arrow rounded-box bg-base-200 text-xl font-bold">
          <input type="checkbox" name="accordion" />
          <span className="collapse-title">사진</span>
          <div className="collapse-content flex flex-col gap-2.5"></div>
        </div>
      </form>
    </div>
  );
}
