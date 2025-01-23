import ComponentOne from "@/components/one/ComponentOne";
import ComponentTwo from "@/components/two/ComponentTwo";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div>
      <h1 className="text-6xl">Hello world</h1>
      <Link href={`product/1`}>
        <button>Click</button>
      </Link>
      <ComponentOne />
      <ComponentTwo />
    </div>
  );
}
