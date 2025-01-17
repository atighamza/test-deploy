import ComponentOne from "@/components/one/ComponentOne";
import ComponentTwo from "@/components/two/ComponentTwo";
import Link from "next/link";
import { useEffect, useState } from "react";

export async function getServerSideProps() {
  const fetchData = async () => {
    const res = await fetch("http://localhost:3000/api/user", {
      method: "POST",
    });
    const data = await res.json();
    return data;
  };
  const users = await fetchData();
  console.log("users: ", users);
  return { props: { users } };
}

export default function Home({ users }) {
  return (
    <div>
      <h1 className="text-6xl">Hello world</h1>
      <Link href={`product/1`}>
        <button>Click</button>
      </Link>
      <ComponentOne />
      <ComponentTwo />
      <div>
        {users.map((user) => (
          <p>{user.name}</p>
        ))}
      </div>
    </div>
  );
}
