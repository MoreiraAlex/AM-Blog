import { Categories, Header, LateralBar } from '@/components';

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main className='space-y-20'>
        <Categories />
        <div className='container mx-auto w-full space-y-10 lg:space-y-0 lg:grid lg:grid-cols-7 lg:gap-5 xl:grid-cols-4'>
          <LateralBar />
          {children}
        </div>
      </main>
    </>
  );
}
