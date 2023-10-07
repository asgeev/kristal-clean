import { Instagram, Facebook } from 'iconsax-react';

interface SocialLinks {
  facebook: string;
  instagram: string;
}

export const SocialIcons = (props: SocialLinks) => {
  return (
    <div className="flex flex-row gap-4">
      <a href={props.facebook}>
        <Facebook variant="Bold" size={58} />
      </a>
      <a href={props.instagram}>
        <Instagram variant="Bold" size={58} />
      </a>
    </div>
  );
};
