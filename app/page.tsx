import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="my-auto flex flex-col *:text-6xl *:font-bold">
        <span className="text-black">부동산</span>
        <span className="text-black">계약</span>
        <span className="text-black">이렇게</span>
        <span className="text-black">쉬웠어?</span>
      </div>
      <Link href="/properties" className="btn btn-secondary w-full">
        시작하기
      </Link>
    </div>
  );
}
