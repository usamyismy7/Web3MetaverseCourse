import React from "react";
import CardWithForm from "./Card";
import { Montserrat } from "next/font/google";

const mont = Montserrat({
  weight: "700",
  subsets: ["latin"],
  style: "normal",
});

export default async function Blogs() {
  const response = await fetch("https://simple-books-api.glitch.me/books");
  const data = await response.json();
  console.log(data);

  return (
    <section className="flex justify-center min-h-screen shadow-lg ">
      <div className="w-11/12 m-4 bg-white rounded-sm ">
        <h1 className={`${mont.className} text-center mt-3 font-bold text-3xl`}>
          Our Featured Blogs
        </h1>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-20">
          {data.map((book: any) => {
            return (
              <CardWithForm
                key={book.id}
                title={book.name}
                description={book.type}
                // image={book.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

/**
 * My working code:
 * import { CardWithForm } from "@/components/custom/Card";
import { Montserrat } from "next/font/google";

const mont = Montserrat({
  weight: "700",
  style: "normal",
  subsets: ["latin"],
});
export default function Blog() {
  return (
    <section className="flex justify-center min-h-screen shadow-lg">
      <div className="w-11/12 m-4 bg-white">
        <h1
          className={`${mont.className} rounded-sm text-center mt-3 font-bold text-3xl`}
        >
          Our Featured Blogs
        </h1>

        Card 
        <div className="flex flex-wrap justify-center gap-4 my-20 item-center">
          <CardWithForm
            title="Our First Blog"
            description="My first blog description"
            image="https://th.bing.com/th/id/OIP._Gh6-SqFMmP8sjzC0PPG1wHaEK?rs=1&pid=ImgDetMain"
          />
          <CardWithForm
            title="Our Second Blog"
            description="My second blog description"
          />
          <CardWithForm
            title="Our Third Blog"
            image="https://th.bing.com/th/id/OIP._Gh6-SqFMmP8sjzC0PPG1wHaEK?rs=1&pid=ImgDetMain"
          />
          <CardWithForm title="Our Fourth Blog" />
        </div>
      </div>
    </section>
  );
}
 */
