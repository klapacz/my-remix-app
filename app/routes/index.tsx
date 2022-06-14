import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import type { User } from "@prisma/client";

import { db } from "~/utils/db.server";

type LoaderData = {
  greeting: string;
  users: User[];
};

export const loader: LoaderFunction = async () => {
  const users = await db.user.findMany();
  const data: LoaderData = { greeting: "Welcome to Remix", users };
  return json(data);
};

export default function Index() {
  const data = useLoaderData<LoaderData>();

  return (
    <div className="flex flex-col justify-center items-center p-4">
      <h1 className="text-2xl">{data.greeting}</h1>

      <ul className="list-disc pl-4">
        {data.users.map((user) => (
          <li key={user.id}>{user.email}</li>
        ))}
      </ul>
    </div>
  );
}
