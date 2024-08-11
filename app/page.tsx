import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between bg-secondary p-5">
      <div className="my-auto flex flex-col *:text-6xl *:font-extrabold *:text-black">
        <span>부동산</span>
        <span>계약</span>
        <span>이렇게</span>
        <span>쉬웠어?</span>
      </div>
      <Link href="/properties" className="btn btn-secondary w-full">
        시작하기
      </Link>
    </div>
  );
}
