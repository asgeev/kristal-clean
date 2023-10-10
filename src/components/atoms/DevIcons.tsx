import Image from 'next/image';
import Link from 'next/link';

interface SocialLinks {
  github: string;
  linkedin: string;
}

export const DevIcons = (props: SocialLinks) => {
  return (
    <div className="flex flex-row gap-4">
      <Link href={props.github}>
        <Image src="/assets/github.svg" alt="asfas" width={32} height={32} />
      </Link>
      <Link href={props.linkedin}>
        <Image src="/assets/linkedin.svg" alt="asfas" width={32} height={32} />
      </Link>
    </div>
  );
};
