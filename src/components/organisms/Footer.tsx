import { Copyrights } from '../atoms/Copyrights';
import Divider from '../atoms/Divider';
import { Email } from '../atoms/Email';
import { FooterContainer } from '../atoms/FooterContainer';
import { Logo } from '../atoms/Logo';
import { SocialIcons } from '../atoms/SocialIcons';
import { DevIcons } from '../atoms/DevIcons';

export const Footer = () => {
  return (
    <footer className="mt-24 mb-6">
      <Divider />
      <div className="flex flex-row flex-wrap py-10 gap-16">
        <div className="flex flex-col flex-wrap gap-10">
          <Logo />
          <Email />
          <div className="flex flex-col gap-3">
            <p>Sprawdź nas!</p>
            <SocialIcons facebook="asfa" instagram="afssf" />
          </div>
        </div>
        <div className="flex flex-row gap-16 mb-28">
          <FooterContainer title="Adres">
            <div className="flex flex-col gap-2">
              <p>Kristal Clean</p>
              <p>21-040 Świdnik</p>
            </div>
          </FooterContainer>
          <FooterContainer title="Created by">
            <div className="flex flex-col gap-2">
              <p>Adam Szymański</p>
              <DevIcons
                github="https://github.com"
                linkedin="https://linkedin.com"
              />
            </div>
          </FooterContainer>
        </div>
      </div>

      <Copyrights />
    </footer>
  );
};

export default Footer;
