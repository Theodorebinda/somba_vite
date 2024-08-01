import { MainRoutes } from '@/lib/pageRoute/pageRoutes';
import { Container } from '@/ui/components/container/container';
import { Typography } from '@/ui/components/typography/typography';
import { StoreIcon } from 'lucide-react';
import AccordonNavigation from '@/components/accordonNavigation';

export function SideMobileContent() {
  return (
    <nav className="h-full flex-col justify-between">
      <Typography variant='title-base' className='flex gap-4 justify-center'>
        <StoreIcon/> SOMBA VITE
      </Typography>
      <Container className="w-full flex flex-col">
        {MainRoutes.map((route) => (
          <Container key={route.title!}>
            <AccordonNavigation
              className='body-base'
              titre={route.title}
              items={[
                { content: route.title, route: route.baseUrl! },
                { content: route.title, route: route.baseUrl! },
                // Ajoutez d'autres items ici si nécessaire
              ]}
            />
          </Container>
        ))}
      </Container>
    </nav>
  );
}
