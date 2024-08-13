"use client";

import { KeyIcon, UserIcon } from "@heroicons/react/24/solid";
import { useFormState } from "react-dom";
import { loginAction } from "./actions";

export default function LogInPage() {
  const [state, dispatch] = useFormState(loginAction, null);

  return (
    <form
      action={dispatch}
      className="mx-auto flex h-screen flex-col gap-8 p-5 pt-10"
    >
      <div className="flex flex-col gap-2">
        <span className="text-4xl font-extrabold">로그인</span>
        <span className="text-xl">돌아오신 걸 환영합니다!</span>
      </div>
      <div className="flex flex-col gap-2">
        <label
          className={`input input-bordered flex items-center gap-3 ${state?.fieldErrors.username ? "input-error" : null}`}
        >
          <UserIcon className="size-4" />
          <input
            name="username"
            type="text"
            placeholder="아이디"
            className="grow"
          />
        </label>
        {state?.fieldErrors.username ? (
          <span className="px-5 text-base text-red-500">
            {state.fieldErrors.username}
          </span>
        ) : null}
        <label
          className={`input input-bordered flex items-center gap-3 ${state?.fieldErrors.password ? "input-error" : null}`}
        >
          <KeyIcon className="size-4" />
          <input
            name="password"
            type="password"
            placeholder="비밀번호"
            className="grow"
          />
        </label>
        {state?.fieldErrors.password ? (
          <span className="px-5 text-base text-red-500">
            {state.fieldErrors.password}
          </span>
        ) : null}
        <button className="btn btn-secondary mt-2">들어가기</button>
      </div>
    </form>
  );
}
