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
      <div className="flex flex-col pt-8 md:mb-10 gap-16 md:gap-28 md:justify-between md:flex-row ">
        <div className="flex flex-col flex-wrap gap-6">
          <Logo />
          <div className="flex flex-col gap-3">
            <p>Sprawdź nas!</p>
            <SocialIcons
              small
              facebook="https://www.facebook.com/profile.php?id=100095595249458&locale=pl_PL"
              instagram="https://www.instagram.com/kristalclean.pl"
            />
          </div>
          <Email />
        </div>
        <div className="flex flex-row flex-wrap gap-12 mb-28">
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
                github="https://github.com/polishghost27"
                linkedin="https://www.linkedin.com/in/szymanski-adam/"
              />
            </div>
          </FooterContainer>
          {/* <FooterContainer title="O nas">
            <p>Czym się zajmujemy?</p>
          </FooterContainer> */}
        </div>
      </div>

      <Copyrights />
    </footer>
  );
};

export default Footer;
