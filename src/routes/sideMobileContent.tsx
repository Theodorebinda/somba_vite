import { MainRoutes } from '@/lib/pageRoute/pageRoutes';
import { Container } from '@/ui/components/container/container';
import { Typography } from '@/ui/components/typography/typography';
import { ActiveLink } from './activeLink';

export function SideMobileContent() {
  // const session = await getServerSession(authOptions)

  // const user = session ? await prisma?.user.findUnique({
  //   where: {
  //     name: session!.user!.name!
  //   },
  //   select: {
  //     firstName: true,
  //     lastName: true,
  //     image: true,
  //   }
  // }) : null
  return (
    <nav className="h-full  flex-col justify-between">
      <Container className="w-full flex flex-col ">
        {MainRoutes.map((route) => (
          <Typography key={route.title!} variant="body-base" component="p">
            <ActiveLink href={route.baseUrl!}>{route.title}</ActiveLink>
          </Typography>
        ))}
      </Container>
      <Container className="w-full flex flex-col gap-2 mb-4">
        {/* {
          session ?
            user ?
              <ProfileButton profileImg={ user.image ? user.image : undefined } name={user!.firstName! + " " + '' + user!.lastName!}/>
            :
            <SignInButton/>
          :
          <SignInButton/>
        } */}
      </Container>
    </nav>
  );
}
