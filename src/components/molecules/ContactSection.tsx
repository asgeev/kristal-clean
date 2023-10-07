import { PhoneNumber } from '../atoms/PhoneNumber';
import { SocialIcons } from '../atoms/SocialIcons';

export const ContactSection = () => {
  return (
    <div id="contact" className="py-8 md:py-24 xl:py-44">
      <div className="flex flex-col items-center gap-8">
        <p className="tracking-widest	text-lg md:text-2xl">
          Zadzwoń już teraz!!!
        </p>
        <PhoneNumber invert text="733 726 236" />
        <SocialIcons
          facebook="https://www.facebook.com"
          instagram="https://www.instagram.com"
        />
      </div>
    </div>
  );
};
