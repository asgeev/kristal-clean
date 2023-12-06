'use client';

import Link from 'next/link';
interface Props {
  href: string;
  name: string;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
  animationDelay?: number;
}

export const NavLink = (props: Props) => {
  const { href, name, animationDelay, onClick, ...rest } = props;

  return (
    <Link
      {...rest}
      href={href}
      onClick={onClick}
      className={`
                md:duration-500
                md:hover:scale-110
                `}
    >
      {name}
    </Link>
  );
};
