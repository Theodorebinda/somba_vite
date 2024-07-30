import { Typography } from '@/ui/components/typography/typography';
import Link from 'next/link';
import { ActiveLink } from './activeLink';
import clsx from 'clsx';
import { Container } from '@/ui/components/container/container';
// import { getServerSession } from "next-auth"
// import { ProfileButton, SignInButton } from "./auth-buttons"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Menu, StoreIcon } from 'lucide-react';
import { MainRoutes } from '@/lib/pageRoute/pageRoutes';
import { SideMobileContent } from './sideMobileContent';

interface Props {
  className: string;
}

export const MobileNavigation = async ({ className }: Props) => {
  return (
    <header
      className={clsx(
        'z-40 fixed top-0 left-0 right-0 border-b-[1px] bg-white border-slate-50',
        className,
      )}
    >
      <Container className="flex flex-row items-center justify-between px-4 py-2 gap-4 h-[8vh]">
        <Sheet>
          <SheetTrigger>
            <Menu />
          </SheetTrigger>
          <SheetContent className="w-[90vw] bg-white" side={'left'}>
            <SheetDescription className="h-full">
              <SideMobileContent />
            </SheetDescription>
          </SheetContent>
        </Sheet>
        <Typography component="h4" variant="title-base">
          Somba Vite
        </Typography>
        <StoreIcon />
      </Container>
    </header>
  );
};
