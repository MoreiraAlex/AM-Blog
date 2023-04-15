import Image from 'next/image';
import { Navbar } from '@/components/navbar';

export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>Main</main>
      <footer>Footer</footer>
    </>
  );
}
