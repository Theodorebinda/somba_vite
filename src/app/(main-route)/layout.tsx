import { Toaster } from "@/components/ui/toaster"
// import { MobileNavigation } from "@/routes/mobileNavigation"
// import { Navigation } from "@/routes/navigation"
import { Footer } from "@/ui/modules/footer"


export default function MainRoutesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className=''>
      <p>Hey</p>
      {/* <Navigation className='hidden md:block'/> */}
      {/* <MobileNavigation className='md:hidden'/> */}
      {children}
      {/* <Footer/> */}
      <Toaster/>
    </div>
  )
}
