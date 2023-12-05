import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import image from "@/assets/bgImg.jpeg";

export default function CardWithForm(props: {
  title: string;
  description: string;
}) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle> {props.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image
          src={
            "https://images.pexels.com/photos/159866/books-book-pages-read-literature-159866.jpeg?cs=srgb&dl=pexels-pixabay-159866.jpg&fm=jpg"
          }
          width={700}
          height={700}
          alt="Post Image"
        />
        <CardDescription>{props.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>See More</Button>
      </CardFooter>
    </Card>
  );
}
