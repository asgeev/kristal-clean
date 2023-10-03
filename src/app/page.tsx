import { Logo } from '../components/atoms/Logo';
import { Navigation } from '../components/atoms/Navigation';

export default function Home() {
  return (
    <div className="container mx-auto px-4 ">
      <header className="">
        <Logo />
        <Navigation />
      </header>
      <main className=""></main>
      <footer className=""></footer>
    </div>
  );
}
