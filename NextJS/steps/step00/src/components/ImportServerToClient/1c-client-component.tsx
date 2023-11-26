// you cannot import the server component directly into the client component. you have pass Server Components as a prop to a Client Component

"use client";

import { useState } from "react";

export default function ClientComponent({
  children, // this is where we pass the server component as a prop to the client component
}: {
  children: React.ReactNode;
}) {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center">
      <button
        className="px-4 py-2 font-bold text-white rounded bg-gradient-to-br from-sky-200 to-blue-200"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <p className="mt-4 text-2xl font-bold">{count}</p>
      {children}{" "}
      {/* this is where we pass the server component as a prop to the client component */}
    </div>
  );
}
