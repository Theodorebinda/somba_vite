// interface Props {
//   className?: string
// }

// export const Navigation = async ({ className }: Props) => {
//   const session = await getServerSession(authOptions)
//   const user = session ? await prisma?.user.findUnique({
//     where: {
//       name: session!.user!.name!
//     },
//     select: {
//       name: true,
//       image: true,
//     }
//   })
//   : null

//   return(
//     <header
//       className={
//         clsx(
//           "z-40 fixed top-0 left-0 right-0 border-b-[1px] border-slate-50 bg-white",
//           className
//         )
//       }
//     >
//       <Container className="flex flex-row items-center justify-between px-8 h-[10vh]">
//         <Link href="/">
//           <Image src={MonYayaLogo} alt='Logo MonYaya' width={120} height={120} priority/>
//         </Link>
//         <nav className="flex items-center gap-4 justify-center">
//           {
//             MainRoutes.map(route =>
//               <Typography key={route.title} variant="body-base" component="p">
//                 <ActiveLink href={route.baseUrl!}>
//                   {route.title}
//                 </ActiveLink>
//               </Typography>
//             )
//           }
//           {
//             session ?
//               user ?
//                 <ProfileButton profileImg={ user.image ? user.image : undefined }/>
//               :
//               <SignInButton/>
//             :
//             <SignInButton/>
//           }
//         </nav>
//       </Container>
//     </header>
//   )
// }
