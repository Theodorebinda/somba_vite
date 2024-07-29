import BaseLink from "./baseLink"



interface ActiveLinkProps {
    href: string
    children: React.ReactNode
    className?: string
  }
  
  export const ActiveLink = ({ href, children, className }: ActiveLinkProps) => (
    <BaseLink
      href={href}
      baseClassName="hover:text-primary-Default font-semibold animate p-3 w-full block rounded hover:bg-secondary-50"
      activeClassName="text-primary-Default bg-secondary-50"
      className={className}
    >
      {children}
    </BaseLink>
  )
  