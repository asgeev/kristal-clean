import Link from 'next/link';
interface Props {
  href: string;
  name: string;
  onClick: React.MouseEventHandler<HTMLAnchorElement>;
  animationDelay: number;
}

export const NavLink = (props: Props) => {
  return (
    <Link
      href={props.href}
      onClick={props.onClick}
      className={`max-md:animate-jump-in 
                max-md:animate-duration-[200ms] 
                max-md:animate-delay-[${props.animationDelay}ms] 
                max-md:animate-ease-in
                md:hover:scale-110
                duration-500 transform-gpu`}
    >
      {props.name}
    </Link>
  );
};
