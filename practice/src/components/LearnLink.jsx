import Link from "next/link";
import React from "react";

function LearnLink() {
  const id = 2;
  return (
    <>
      <Link href="/admin/dashboard/">Go to Admin Dashboard</Link>
      <Link href={`/user/settings/${id}`}>Go to user Profile</Link>
    </>
  );
}

export default LearnLink;
