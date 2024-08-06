import { MainRoutes } from '@/lib/pageRoute/pageRoutes';
import { Container } from '@/ui/components/container/container';
import { Typography } from '@/ui/components/typography/typography';
import { ActiveLink } from "@/routes/activeLink";
import { StoreIcon } from 'lucide-react';
import AccordonNavigation from '@/components/accordonNavigation';

export function SideMobileContent() {
  return (
    <nav className="h-full flex-col justify-between">
      <Typography variant='title-base' className='flex gap-4 justify-center'>
        <StoreIcon /> SOMBA VITE
      </Typography>
      <Container className="h-full w-full flex flex-col justify-between py-4">
        <Container className='h-5/6 flex flex-col gap-4 overflow-auto  '>
        <ActiveLink href={'/'} className='font-medium text-lg ' >{"Page d'Accueil"}</ActiveLink>
        {MainRoutes.map((route, index) => (
          <Container key={index}>
            <AccordonNavigation
              className='body-base'
              titre={route.title}
              items={route.items}
            />
          </Container>
        ))}
        </Container>

        <Container className="flex  items-center justify-between">
          <Typography variant='body-base' className='text-center'>
            Connectez-vous.
          </Typography>
          <Container>
          <ActiveLink href={'/login'}>{"Connexion"}</ActiveLink>
          </Container>
        </Container>
      </Container>
    </nav>
  );
}
