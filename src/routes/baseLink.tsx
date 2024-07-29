'use client'

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useMemo } from "react"

interface BaseLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  activeClassName?: string
  baseClassName: string
}

const BaseLink = ({ href, children, className, activeClassName, baseClassName }: BaseLinkProps) => {
  const pathname = usePathname()
  const isActive = useMemo(() => pathname === href, [pathname, href])

  return (
    <Link
      className={clsx(
        baseClassName,
        isActive && activeClassName,
        className
      )}
      href={href}
    >
      {children}
    </Link>
  )
}
export default BaseLink