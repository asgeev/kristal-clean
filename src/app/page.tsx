import { Footer } from '../components/organisms/Footer';
import { Header } from '../components/organisms/Header';
import { Main } from '../components/organisms/Main';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
