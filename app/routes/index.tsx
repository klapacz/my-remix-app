import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

type LoaderData = {
  greeting: string;
};

export const loader: LoaderFunction = async () => {
  const data: LoaderData = { greeting: "Welcome to Remix" };
  return json(data);
};

export default function Index() {
  const data = useLoaderData<LoaderData>();

  return (
    <div className="flex justify-center p-4">
      <h1 className="text-2xl">{data.greeting}</h1>
    </div>
  );
}
