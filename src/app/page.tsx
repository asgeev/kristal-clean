import { Footer } from '../components/organisms/Footer';
import { Header } from '../components/organisms/Header';
import { Main } from '../components/organisms/Main';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <div className="fixed w-full h-full -z-10">
        <div className="container mx-auto h-full">
          <div
            className="h-watermarkHeight lg:h-watermarkHeightLg
             w-watermarkWidth lg:w-watermarkWidthLg
        top-4 md:top-14 lg:top-4
        -left-24 lg:-left-52 
        opacity-10 relative"
          >
            <Image src="/assets/logo.svg" alt="logo" fill quality={100} />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4">
        <Header />
        <Main />
        <Footer />
      </div>
    </div>
  );
}
