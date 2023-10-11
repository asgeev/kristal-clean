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
        <div className="h-8 w-8 relative">
          <Image
            src="/assets/github.svg"
            alt="asfas"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>
      <Link href={props.linkedin}>
        <div className="h-8 w-8 relative">
          <Image
            src="/assets/linkedin.svg"
            alt="asfas"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </Link>
    </div>
  );
};
