import BaseLink from './baseLink';

interface AsideActiveLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const AsideActiveLink = ({
  href,
  children,
  className,
}: AsideActiveLinkProps) => (
  <BaseLink
    href={href}
    baseClassName="hover:text-primary-Default animate block p-2 rounded"
    activeClassName="text-primary-Default"
    className={className}
  >
    {children}
  </BaseLink>
);
