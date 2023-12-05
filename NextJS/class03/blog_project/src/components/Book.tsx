import React from "react";

export default function Book(props: any) {
  return (
    <div className="bg-gray-200 max-w-sm min-h-full">
      <h2>{props.name}</h2>
      <p>{props.type}</p>
      <p>{props.available}</p>
    </div>
  );
}
