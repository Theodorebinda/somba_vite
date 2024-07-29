import { Container } from "@/ui/components/container/container";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Typography } from "@/ui/components/typography/typography";
import { Heart } from "lucide-react"; // Import de l'icône de cœur
import { useState } from "react";
import { Button } from "./ui/button";
import { PropsProduct } from "@/types/productProps";

export default function NewArrivages({name, id, images, price, className}:PropsProduct ){
  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <Container className="flex flex-col gap-8 items-start">
      <Container className= {`flex flex-col ${className}`} >
        <Container className="w-44 h-[95vw] relative">
          <AspectRatio ratio={16/9}>
            <Image
              src="https://th.bing.com/th/id/OIP.SUnyG064cG-qz7laXb6vlAAAAA?rs=1&pid=ImgDetMain"
              width={200}
              height={400}
              alt="Image"
              className="rounded-lg object-cover"
            />
            <Button
              className="absolute top-3 right-7 bg-white rounded-full h-14 w-14"
              onClick={handleFavoriteClick}
            >
              <Heart
                className={`h-12 w-12 ${
                  isFavorite ? "text-red-500 fill-red-500" : "text-gray-500"
                }`}
              />
            </Button>
            <Container className="flex flex-col gap-1">
            <Typography component="span" variant="title-base">
              {name}
            </Typography>
            <Typography component="span">{`$ ${price}`}</Typography>
          </Container>
          </AspectRatio>

        </Container>
      </Container>
    </Container>
  );
}
