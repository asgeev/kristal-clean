import Link from 'next/link';
interface Props {
  href: string;
  name: string;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
  animationDelay: number;
}

export const NavLink = (props: Props) => {
  const { href, name, animationDelay, onClick, ...rest } = props;

  return (
    <Link
      {...rest}
      href={href}
      onClick={onClick}
      className={`max-md:animate-jump-in 
                max-md:animate-duration-[200ms] 
                max-md:animate-delay-[${animationDelay}ms] 
                max-md:animate-ease-in
                md:hover:scale-110
                duration-500 transform-gpu`}
    >
      {name}
    </Link>
  );
};
