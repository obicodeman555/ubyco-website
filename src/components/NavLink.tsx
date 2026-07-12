"use client";

import { isActiveRoute } from "@/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode } from "react";

interface INavLinkProps {
  href: string;
  children: ReactNode;
}
export const NavLink = ({ href, children }: INavLinkProps) => {
  const pathname = usePathname();

  const active = isActiveRoute(pathname, href);

  return (
    <Link href={href} className={active ? "activeNavLink" : ""}>
      {children}
    </Link>
  );
};
