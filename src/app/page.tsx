import Image from 'next/image';
import { Navbar } from '@/components/navbar';
import { Header } from '@/components/header';
import { Categories } from '@/components/categories';

export default function Home() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <Categories />
      </main>
      <footer>Footer</footer>
    </>
  );
}
