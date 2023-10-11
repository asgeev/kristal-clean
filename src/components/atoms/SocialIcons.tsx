import { Instagram, Facebook } from 'iconsax-react';

interface SocialLinks {
  facebook: string;
  instagram: string;
  small?: boolean;
}

export const SocialIcons = (props: SocialLinks) => {
  return (
    <div className="flex flex-row gap-4">
      <a href={props.facebook}>
        <Facebook
          variant="Bold"
          className={`${
            props.small ? 'h-10 w-10' : 'h-14 w-14 md:h-16 md:w-16'
          }`}
        />
      </a>
      <a href={props.instagram}>
        <Instagram
          variant="Bold"
          className={`${
            props.small ? 'h-10 w-10' : 'h-14 w-14 md:h-16 md:w-16'
          }`}
        />
      </a>
    </div>
  );
};
