import * as React from "react";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// import img from "@/assets/bgimg.jpg";

export function CardWithForm({
  title,
  description = "Default Description",
  image = "https://th.bing.com/th/id/R.0ac5077c287abdb94b0457e6fd9a9240?rik=zrkbm%2bMWWnTOvg&pid=ImgRaw&r=0",
}: {
  title: string;
  description?: string;
  image?: string;
}) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Image src={image} width={700} height={700} alt="blogImage" />
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button>See More</Button>
      </CardFooter>
    </Card>
  );
}
