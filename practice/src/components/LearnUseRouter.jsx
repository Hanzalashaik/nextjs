"use client";
import { useRouter } from "next/navigation";
import React from "react";

function LearnUseRouter() {
  const router = useRouter();
  console.log("Router", router);
  return (
    <>
      {/* <h1>Use Router</h1> */}
      <button
        className="border hover:bg-slate-600 rounded-xl py-1 px-2"
        onClick={() => router.push("/admin/dashboard/")}
      >
        Go to Admin Dashboard
      </button>
    </>
  );
}

export default LearnUseRouter;
