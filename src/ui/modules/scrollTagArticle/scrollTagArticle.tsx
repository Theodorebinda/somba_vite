import { AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { ScrollBar } from '@/components/ui/scroll-area';
import { tag } from '@/lib/tag/tag';
import { Avatar } from '@radix-ui/react-avatar';
import { ScrollArea } from '@radix-ui/react-scroll-area';
// import Image from "next/image";

export function ScrollTagArt() {
  return (
    <ScrollArea className=" whitespace-nowrap  ">
      <div className="flex w-1/2 space-x-4 p-4">
        {tag.map((artTag) => (
          <figure
            key={artTag.name}
            className="flex flex-col items-center shrink-0"
          >
            <div className="overflow-hidden rounded-full w-14">
              <Avatar>
                <AvatarImage src={artTag.image} />
                <AvatarFallback>{artTag.name}</AvatarFallback>
              </Avatar>
            </div>
            <figcaption className="pt-2 text-xs text-muted-foreground">
              <span className="font-semibold text-foreground">
                {artTag.name}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
      <ScrollBar orientation="horizontal" asChild />
    </ScrollArea>
  );
}
